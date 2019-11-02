// Router to handle user routes
const { Router } = require('express');
const passport = require('../middlewares/passport');
const { Contact } = require('../models').models;

const router = Router();
const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/', requireAuth, async (req, res) => {
    const user = req.user;
    const contacts = await user.getContacts();
    return res.status(200).json({
        data: {
            contacts
        }
    });
});

router.post('/', requireAuth, async (req, res) => {
    const { name, email, phone } = req.body;
    const user = req.user;

    const contact = await Contact.create({
        name,
        email,
        phone
    });

    contact.setUser(user);
    return res.status(200).json({
        data: {
            contact
        }
    });
});

router.put('/:id', requireAuth, async (req, res) => {
    const user = req.user;
    const { name, email ,phone } = req.body;
    const [ affectedCount, affectedContacts] = await Contact.update({
        name, email, phone
    }, {
        returning: true,
        where: {
            id: req.params.id,
            userId: user.id
        }
    });

    const updatedContact = affectedContacts[0];
    return res.status(200).json({
        data: {
            contact: updatedContact
        }
    });
});

router.delete('/:id', requireAuth, async (req, res) => {
    const user = req.user;
    const deletedContact = await Contact.destroy({
        where: {
            id: req.params.id,
            userId: user.id
        }
    });

    return res.status(200).json({});
});

module.exports = router;