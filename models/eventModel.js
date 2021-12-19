const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  eventId: {type: Number, required,unique},
  userName: { type: mongoose.SchemaType.objectId, ref: userSchem },
  city: { type: String, required: true},
  date: { type: Date, required: true },
  description: { type: String, required: true },
  images: {type: String, required},
  createdBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  createdDate: Date,
  modifiedBy:  { type: mongoose.SchemaType.objectId, ref: userSchema },
  modifiedDate: Date,
  isDeleted: {type: Boolean , default:false},
});



module.exports.event = mongoose.model("Event", eventSchema);
