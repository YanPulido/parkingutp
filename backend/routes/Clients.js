const express = require('express');
const ClientRoute = express.Router();

// Client model
let ClientModel = require('../models/Clients');
let OperacionModel = require('../models/Operacion');


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


 // FIND XD 
 ClientRoute.route('/load-operations').get((req, res) => {
  OperacionModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
      console.log(data)
       res.json(data)
     }
   }).populate('id_cliente')
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


 ClientRoute.route('/create-ingreso-parking').post((req, res, next) => {
  OperacionModel.create(req.body, (error, data) => {
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