const express = require('express');
const router = express.Router();

//get a list of users from the db
router.get('/users', function(req,res){
  res.send({type: 'GET'});
});

//add a new user to the db
router.post('/users', function(req,res){
  console.log(req.body);
  res.send({
    type: 'POST',
    name: req.body.name,
    rank: req.body.rank
  });
});


//update  a user to the db
router.put('/users/:id', function(req,res){
  res.send({type: 'PUT'});
});

//delete a user from the db
router.delete('/users/:id', function(req,res){
  res.send({type: 'DELETE'});
});


module.exports= router;
