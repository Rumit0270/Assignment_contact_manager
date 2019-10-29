const axios = require('axios');

const isValidToken = async (userToken, id) => {

    try {
        const appLink = `https://graph.facebook.com/oauth/access_token?client_id=${process.env.FACEBOOK_APP_ID}&client_secret=${process.env.FACEBOOK_APP_SECRET}&grant_type=client_credentials`;

        // Call the FB API to get the fb app access token
        const appToken = await axios.get(appLink).then(res => res.data);
        const appAccessToken = appToken['access_token'];
        const verifyLink = `https://graph.facebook.com/debug_token?input_token=${userToken}&access_token=${appAccessToken}`;
        const res = await axios.get(verifyLink).then(res => res.data.data);
        const {
            user_id: userId,
            is_valid: isValid
        } = res;

        return isValid && id === userId;
    } catch(err) {
        throw err;
    }
};

const verfiyFBLogin = async (req, res, next) => {

    try {
        // Validate the fb access token and if valid pass the 
        // valid user in req.context.user
        const {
            accessToken: clientToken,
            userId,
            email,
            name
        } = req.body;

        if (await isValidToken(clientToken, userId)) {
            // Create a user with above data
            console.log('Verified');
            next()
        } else {
            // token in invalid
            return res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
        return res.status(422).send({
            error: `Error validating the token: ${err}`
        })
    }
};

module.exports = {
    verfiyFBLogin
};