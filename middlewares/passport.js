const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { User } = require('../models').models;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_TOKEN_SECRET
};

// create a new jwt strategy with options and verify callback
const jwtAuth = new JwtStrategy(jwtOptions, function(payload, done) {

    const userId = payload.sub;
    User.findByPk(userId).then(user => {
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }, err => {
        return done(err, false);
    });
});

passport.use(jwtAuth);

module.exports = passport;