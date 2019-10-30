const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'postgres'
    }
);

// sequelize.import(path) basically does require(path)(this, DataTypes) 
const models = {
    User: sequelize.import('./user'),
    Contact: sequelize.import('./contact')
};

Object.keys(models).forEach(key => {
    if('associate' in models[key]) {
        models[key].associate(models);
    }
});

module.exports = {
    sequelize,
    models
};