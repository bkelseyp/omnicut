
var mongoose = require("mongoose");

var AppointmentSchema = new mongoose.Schema({
    date: Date,
    barberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Barber"
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    notes: String
    
    // service:{
    //   type: String,
    //   required: true
    // }
});

module.exports = mongoose.model("Appointments", AppointmentSchema);