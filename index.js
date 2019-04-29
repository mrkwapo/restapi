const express = require('express');

//set up expressapp
const app = express();

//initialize routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.port||4000,function() {
  console.log('now listening for requests');
  console.log('nodemon working');

});
