const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airlines: {
    type: String,
    required: true
  },
  flightNumber: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, departs: Date,
}, { 
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);