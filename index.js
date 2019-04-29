const express = require('express');

//set up expressapp
const app = express();

app.get('/api', function(req, res) {
  console.log('GET request');
  res.send({name:'Yoshi'});
});


//listen for requests
app.listen(process.env.port||4000,function() {
  console.log('now listening for requests');
});
