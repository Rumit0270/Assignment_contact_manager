const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        }
    });

    User.associate = models => {
        User.hasMany(models.Contact, { onDelete: 'CASCADE '});
    };

    return User;
};

module.exports = user;