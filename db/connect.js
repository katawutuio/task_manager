const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://user1:User1Password@nodeexpressprojects.1ixramy.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) => {
    return mongoose.connect(url); // return promise
}

module.exports = connectDB;