// Router to handle user routes
const { Router } = require('express');
const { verfiyFBLogin } = require('../middlewares/auth');
const { generateJWTTOken } = require('../utils');

const router = Router();

router.get('/login', verfiyFBLogin, (req, res) => {

    const user = req.user;
    console.log(user.id);
    const token = generateJWTTOken(user.id);
    res.status(200).json({
        token
    });
});

module.exports = router;