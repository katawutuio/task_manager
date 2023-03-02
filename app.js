const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Task Manager API</h1>');
});

// routes
app.use('/api/v1/tasks', tasks);

const port = 5000;
app.listen(port, console.log(`Server start on port ${port}...`));