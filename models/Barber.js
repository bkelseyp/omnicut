var mongoose = require('mongoose');

var BarberSchema = 
new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    zipcode: {type: Number, required: true},
    image: {type: String, required: false},
    isVendor: {type: Boolean, required: true},
    basePrice: {type: Number, required: true},
    bio: {type: String, required: true},
    availabilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Availabilities"
    }],
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointments"
    }],
    // appointmentPrice:{
    //     type: Number,
    //     required: true
    // },
});

module.exports = mongoose.model('Barber', BarberSchema);