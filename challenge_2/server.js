const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// routes


app.listen(PORT, () => {
  console.log(`Server is listening on PORT: http://localhost:${PORT}`)
});

