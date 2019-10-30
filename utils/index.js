const jwt = require('jsonwebtoken');
const secret = process.env.JWT_TOKEN_SECRET;

const generateJWTTOken = (user) => {
    const timestamp = new Date().getTime();

    // sub refers to subject: To whom does the token belong
    return jwt.sign({ sub: user.id, iat: timestamp}, secret, {
        expiresIn: '1h'
    });
};

module.exports = {
    generateJWTTOken
};