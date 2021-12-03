const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientShema = new Schema({
  name: {
    type: String
  },
  document: {
    type: Number
  },
  phone: {
    type: String
  },
  startsoat: {
    type: String
  },
  finishsoat: {
    type: String
  },
}, {
  collection: 'Clients'
})

module.exports = mongoose.model('Clients', ClientShema)