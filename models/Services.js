// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;
// Create the noteSchema with the schema object
var servicesSchema = new Schema({

  serviceID: {
    required: Number,
    unique: { index: { unique: true } }
  },
  
  service: {
    type: String,
    required: true 
    }
  
});

// Create the Services model using the noteSchema
var Services = mongoose.model("Services", servicesSchema);

// Export the Services model
module.exports = Services;
