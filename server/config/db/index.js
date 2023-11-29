const mongoose = require('mongoose')
require('dotenv/config')

async function connect(){
    try{
        await mongoose.connect(process.env.DB_URL || 5000,{
           
            
        });
        console.log('Connect database successful')
       
    }catch (error){
        console.log(error.message)
    }
}

module.exports= {connect}