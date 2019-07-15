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
    Notes: String,
})

module.exports = mongoose.model("Appointments", AppointmentSchema)