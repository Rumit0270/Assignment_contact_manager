// Router to handle user routes
const { Router } = require('express');
const { verfiyFBLogin } = require('../middlewares/auth');
const { generateJWTTOken } = require('../utils');
const passport = require('../middlewares/passport');

const router = Router();
const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/login', verfiyFBLogin, (req, res) => {

    const user = req.user;
    const token = generateJWTTOken(user);
    res.status(200).json({
        token
    });
});

// test endpoint
router.get('/validateToken', requireAuth, (req, res) => {
    res.status(200).json({
        user: req.user.dataValues
    })
})

module.exports = router;