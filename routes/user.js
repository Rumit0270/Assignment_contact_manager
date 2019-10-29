// Router to handle user routes
const { Router } = require('express');
const { verfiyFBLogin } = require('../middlewares/auth');

const router = Router();

router.get('/login', verfiyFBLogin, (req, res) => {

    // TODO:- generate a jwt and send it to the client
    res.send('User in login route');
});

module.exports = router;