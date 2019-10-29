require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', routes.user);
app.get('/api/', (req, res) => {
    res.send('Hello world');
});

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
});
