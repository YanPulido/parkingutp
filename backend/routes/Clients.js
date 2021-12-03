const express = require('express');
const ClientRoute = express.Router();

// Client model
let ClientModel = require('../models/Clients');

//Find clients
ClientRoute.route('/').get((req, res) => {
  ClientModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
      console.log(data)
       res.json(data)
     }
   })
 })

 


 ClientRoute.route('/create-client').post((req, res, next) => {
  ClientModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});




ClientRoute.route('/update-client').post((req, res, next) => {
 
  ClientModel.findByIdAndUpdate(req.body._id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      
    }
  })
})


ClientRoute.route('/delete-client/:id').delete((req, res, next) => {
  ClientModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = ClientRoute;