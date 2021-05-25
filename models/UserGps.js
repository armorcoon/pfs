const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');


const UserGpsSchema = new mongoose.Schema({
  userId :{
    type: String,
    required:[true,'Please add an ID'],
    uniqure: true,
    trim: true,
    maxlength:[10, 'ID must be less than 10 chars']
  },
  coordinates:{
    type: [Number],
    index :'2dsphere'
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserGps', UserGpsSchema);