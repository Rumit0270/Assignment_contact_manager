const contact = (sequelize, DataTypes) => {

    const Contact = sequelize.define('contact', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
    });

    Contact.associate = models => {
        Contact.belongsTo(models.User);
    };

    return Contact;
};

module.exports = contact;