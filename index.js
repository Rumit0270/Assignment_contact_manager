require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const routes = require('./routes');
const { sequelize } = require('./models');
const { seedUserAndContacts } = require('./seeds/user');

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', routes.user);
app.use('/api/contacts', routes.contact);

app.get('/api/', (req, res) => {
    res.send('Hello world');
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 4000;
const eraseDatabaseOnSync = false;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {

    if(eraseDatabaseOnSync) {
        await seedUserAndContacts();
    }

    app.listen(PORT, () => {
        console.log(`Server listening at port: ${PORT}`);
    });    
}).catch(err => console.log(err));;
