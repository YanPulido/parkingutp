const express = require('express');
const VehiculosRoute = express.Router();

// Bici Model
let VehiculosModel = require('../models/Vehiculos');

// API -> Listalas bicicicletas
VehiculosRoute.route('/').get((req, res) => {
  VehiculosModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 // INSERT BICI
 VehiculosRoute.route('/create-bici').post((req, res, next) => {
  VehiculosModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});




//UPDATE 
VehiculosRoute.route('/update-bici').post((req, res, next) => {
 
  VehiculosModel.findByIdAndUpdate(req.body._id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      
    }
  })
})

// Eliminar bici
VehiculosRoute.route('/delete-bici/:id').delete((req, res, next) => {
  VehiculosModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = VehiculosRoute;