const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './client/dist')))

// routes

/*
`https://api.coindesk.com/v1/bpi/historical/close.json?start=${formState.startDateYear}-${formState.startDateMonth}-${formState.startDateDay}&end=${formState.endDateYear}-${formState.endDateMonth}-${formState.endDateDay}`
*/

app.get('/api', (req, res) => {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-01-01&end=2020-06-12`)
    .then(({data}) => {
      console.log('data => ', data)
      res.status(200).send(data.bpi)
    })
    .catch(err => res.send(err))
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: http://localhost:${PORT}`)
});

