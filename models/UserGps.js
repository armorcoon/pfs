const mongoose = require("mongoose");
const geocoder = require('../utils/geocoder');

const UserGpsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please add an ID"],
    uniqure: true,
    trim: true,
    maxlength: [10, "ID must be less than 10 chars"],
  },
  userName: {},
  userPhone: {},
  address: {},
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});




UserGpsSchema.pre('save', async function(next) {
  const loc = await geocoder.reverse({lat:this.address[0],lon:this.address[1]});
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // Do not save address
  this.address = undefined;
  next(); 
});

module.exports = mongoose.model("UserGps", UserGpsSchema);
