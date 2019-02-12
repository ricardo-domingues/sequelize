const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

var models = require('./models');

// dependencies
// const { User, Profile } = require('./sequelize')

// API ENDPOINTS

require('./routes')(app);
app.get('/', (req, res) => {
    return res.status(200).json({message: 'Hello World'});
})

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})