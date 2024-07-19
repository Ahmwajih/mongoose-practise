const mongoose = require('mongoose');

mongoose.connect(process.env.MongoDB_URI)
.then(() => {
    console.log('Connected to the Mongo DB');
})
.catch((err) => {
    console.error(err);
});
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('Connected to the Mongo DB');
// });

// module.exports = db;