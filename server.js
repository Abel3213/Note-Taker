const express = require('express');
const path = require('path');

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/htmlRoutes'));


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))