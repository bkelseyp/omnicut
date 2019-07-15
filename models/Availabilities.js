var mongoose = require('mongoose');

var AvailablitySchema = 
new mongoose.Schema({
    barberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Barber"
    },
    dayOfWeek: String,
    time: String
});

module.exports = mongoose.model('Availabilities', AvailablitySchema);