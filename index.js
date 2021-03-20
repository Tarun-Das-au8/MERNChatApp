const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const config = require("./server/config/keys");

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err)); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/dialogflow', require('./server/routes/dialogflow'));
  

//health check
app.get('/health',(req,res)=>{
  res.json({msg:"Server is running properly"});
});

app.listen(port,(err)=>{
  if(err) throw err;
  console.log(`Server is running on PORT ${port}`);
});

