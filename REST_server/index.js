const { load, config } = require('dotenv');
load();
config();

const express = require('express');
const path = require('path');
const { urlencoded, json } = require('body-parser');


const port = process.env.PORT || 3000;
const app = express();
const router = require('./routes/index');

app
  .use(urlencoded({ extended: true }))
  .use(json())
  .use(router);

app.listen(port, err => {
  if (err) throw `Could not connect on port ${port}`
  console.log(`connected on port ${port}`)
});