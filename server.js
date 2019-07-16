const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
}

app.use(routes);

const uri = process.env.MONGODB_URI || "mongodb://localhost/reactplayground"

mongoose.connect(uri, { useNewUrlParser: true }).then(
    () => {
        console.log("Connected to Mongo")
    },
    err => {
        console.log("error connecting to mongo: ")
        console.log(err)
    })

app.listen(PORT, ()=> console.log(`Listening on PORT: ${PORT}`));

// Web Scraper Homework Solution Example
// (be sure to watch the video to see
// how to operate the site in the browser)
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// var express = require("express");
// var mongoose = require("mongoose");
// var exphbs = require("express-handlebars");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3001;

// var app = express();

// var routes = require("./routes");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// app.use(routes);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/barbershop";

console.log(MONGODB_URI);


// app.listen(PORT, function() {
//   console.log("Listening on port: " + PORT);
// });

