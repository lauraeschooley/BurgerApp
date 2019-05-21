var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

// Creating the page routes and the logic to get to them
router.get("/", function(req, res) {
   
  });
  
  router.post("/api/burgers", function(req, res) {

  });
  
  router.put("/api/burgers/:id", function(req, res) {
  
  });
  
  router.delete("/api/burgers/:id", function(req, res) {
  
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  