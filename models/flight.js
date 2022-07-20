let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: Date,
});

let flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Delta", "Southwest", "United"],
  },
  airport: {
    type: String,
    enum: ["ATL", "DFW", "DEN", "LAX", "SAN"],
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: () => {
      let oneYearFromNow = new Date();
      return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    },
  },
  destination: [destinationSchema],
});

module.exports = mongoose.model("Flight", flightSchema);
