const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const UserToken = require('../models/userToken');
const router = Router();
const nodemailer = require('nodemailer')


router.post('/register', async (req, res) => {
   
       let email = req.body.email;
        let name = req.body.name;
        let password = req.body.password; 
        let cfpassword = req.body.cfpassword;

        
        const record = await User.findOne({ email: email });
        if (record) {
            return res.status(400).send({
                message: "Email is already registered"
            });
        } else {
            
            const user = new User({
                name: name,
                email: email,
                password: password,
            });

            const result = await user.save();
            // JWt token
            const { _id } = await result.toJSON();
            const token = jwt.sign({ _id: _id }, "secret");

            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });

            res.send({
                message: "success"
            });
        
            
        }})
        

router.post('/login', async (req, res) => {
    
    const user = await User.findOne({ email: req.body.email})
    
    if(!user){
        return res.status(404).send({
            message:"User not found"
        })
    }
    
    if(!(await bcrypt.compare(req.body.password,user.password))){
        return res.status(400).send({
            
            message:"Password is Incorrect",
            
        })
    }
    const token = jwt.sign({ _id: user._id },"secret")

    res.cookie("jwt",token,{
        httpOnly:true,
        maxAge:24*60*60*1000 // for 1 day
    })

    res.send({
        message:"success"
    })
});

router.get('/user', async (req, res) => {
    try {
        const cookie = req.cookies['jwt'];
        const claims = jwt.verify(cookie, "secret");

        if (!claims) {
            return res.status(401).send({
                message: "unauthenticated"
            });
        }

        const user = await User.findOne({ _id: claims._id });
        const { hashedPassword, ...data } = await user.toJSON();
        res.send(data);
    } catch (err) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }
});

router.post('/logout',(req,res)=> {
    res.cookie("jwt","",{maxAge:0})

    res.send({
        message:"success"
    })
})

router.post('/send-email', async (req, res, next) => {
  try {
    const { email } = req.body;

    // Tìm người dùng theo email
    const user = await User.findOne({ email: { $regex: '^' + email + '$', $options: 'i' } });

    if (!user) {
      return res.status(404).send({
        message: 'User not found',
      });
    }

    // Tạo payload và token
    const payload = {
      email: user.email,
    };
    const expiryTime = 300;
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expiryTime });

    // Lưu token mới
    const newToken = new UserToken({
      userId: user._id,
      token: token,
    });
    await newToken.save();

    // Tạo transporter để gửi email
    const mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
      auth: {
        user: 'teamindofa@gmail.com',
        pass: 'kyagojijvbexwpwf',
      },
    });

    // Thiết lập các chi tiết email
    const mailOptions = {
      from: 'teamindofa@gmail.com',
      to: email,
      subject: 'Reset Password',
      html: `
        <html>
        <head>
            <title>Password Reset Request</title>
        </head>
        <body>
            <h1>Password Reset Request</h1>
            <p>Dear ${user.name},</p>
            <p>
            We have received a request to reset your password. Please click on the link below to proceed:<br>
            
            <a href="${process.env.LIVE_URL}/reset/${token}">Password Reset Link</a><br>
            
            If you did not request a password reset, please disregard this email. If you have any questions, please contact us.</p>
            
            <p>Best regards,<br>
            Indofa Team</p>
        </body>
        </html>`,
    };

    // Gửi email
    await mailTransporter.sendMail(mailOptions);

    return res.status(200).send({
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: 'Something went wrong while sending the email',
    });
  }
});

router.post("/reset-pw",  (req,res,next)=>{
    const token = req.body.token;
  const newPassword = req.body.password;

  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.status(500).send({
        message: "Reset link is expired!",
      });
    } else {
      const response = data;
      try {
        const user = await User.findOne({ email: { $regex: '^' + response.email + '$', $options: 'i' } });

        if (!user) {
          return res.status(404).send({
            message: "User not found",
          });
        }

        user.password = newPassword;
        const updatedUser = await user.save();

        return res.status(200).send({
          message: "Password reset successfully!",
        });
      } catch (error) {
        return res.status(500).send({
          message: "Something went wrong while resetting the password",
        });
      }
    }
  });
})
module.exports = router;