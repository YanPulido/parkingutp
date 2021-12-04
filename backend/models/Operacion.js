const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OperacionShema = new Schema({
  
  clientes: {
    type: String
  },
  horaini: {
    type: String
  },
  operacion: {
    type: Number
  },
  id_cliente: { type: Schema.Types.ObjectId, ref: 'Clients' },
}, {
  collection: 'Operations'
})

module.exports = mongoose.model('Operations', OperacionShema)