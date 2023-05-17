const express = require("express");
let router = express.Router();

router
  .route("/home")
  .get((req,res) => {
    res.send("get /home");
  })
  .post((req,res) => {
    res.send("post /home")
  })
  .put((req,res) => {
    res.send("put /home")
  });

module.exports = router; 
