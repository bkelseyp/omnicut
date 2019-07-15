// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;
// Create the noteSchema with the schema object
var appointmentSchema = new Schema({

  appointmentID: {
    required: true,
    unique: { index: { unique: true } }
  },
  
  apptDate: {
    type: Date,
    required: true
  },
  // date is just a string
  dateCreated: {
    type: Date,
    default: Date.now
  },
  
  barberID:{
    type: Number,
    required: true
  },

  clientID:{
    type: Number,
    required: true
  },

  appointmentPrice:{
      type: Number,
      required: true
  },

  service:{
    type: String,
    required: true
  }

});

// Create the Appointment model using the noteSchema
var Appointment = mongoose.model("Appointment", appointmentSchema);

// Export the Appointment model
module.exports = Appointment;
