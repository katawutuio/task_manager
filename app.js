const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Task Manager API</h1>');
});

const port = 5000;
app.listen(port, console.log(`Server start on port ${port}...`));