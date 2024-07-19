const express = require('express');
const app = express();


require('dotenv').config();

port = process.env.PORT || 8000;

require('./dbConnection');


const {User} = require('./models/user.model')
User.create({
        userName: 'JohnDoe',
        fName: 'John',
        lName: 'Doe',
        Age: 25
    })
















app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
