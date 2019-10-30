const seedUserAndContacts = async () => {
    // Create user and Contact
    const [user, created] = await User.findOrCreate({
        where: {
            name: 'JDOE'
        }, 
        defaults: {
            email: 'jdoe@example.com',
            id: '4444'
        }
    });

    const contact1 = await Contact.create({
        name: 'Mandy',
        email:'mandy@example.com',
        phone: '55555'
    });

    const contact2 = await Contact.create({
        name: 'John',
        email: 'john@example.com',
        phone: '88888'
    });
    contact1.setUser(user);
    contact2.setUser(user);
};

module.exports = {
    seedUserAndContacts    
};