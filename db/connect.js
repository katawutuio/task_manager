const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url); // return promise
}

module.exports = connectDB;