const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Quake = new Schema({
  name: { type: String, required: true },
  mag: { type: Number, required: true },
  coor: { type: [Number], required: false },
  time: { type: Number, required: false }
});

module.exports = mongoose.model("quakes", Quake);
