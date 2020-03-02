const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  {useNewUrlParser:true, useUnifiedTopology:true}
)

requireDir('./src/models');


app.use(express.json())
app.use('/api',require('./src/routes'))
app.use(cors())

app.listen(3001);
console.log('http://localhost:3001')