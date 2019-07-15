var mongoose = require('mongoose');

var BarberSchema = 
new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    zipcode: Number,
    image: String,
    isVendor: Boolean,
    basePrice: Number,
    bio: String,
    availabilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Availabilities"
    }],
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointments"
    }]
});

module.exports = mongoose.model('Barber', BarberSchema);