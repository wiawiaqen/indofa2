const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const opts = {
  jwtFromRequest: req => req?.cookies?.jwt || null,
  secretOrKey: process.env.JWT_SECRET
};

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // JWT strategy logic
  }));
  
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost:5000/auth/googleRedirect"
  }, (accessToken, refreshToken, profile, cb) => {
    // Google strategy logic
  }));

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
};
