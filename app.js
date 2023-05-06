const express = require('express');
const connectDB = require('./config/db');
const books = require('./routes/api/books');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use(books);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));