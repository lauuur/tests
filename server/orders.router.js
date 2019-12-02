const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Order.find({});
  res.send(xs);
});

router.post("/test/5", (req, res)=>{
  const order = new Order(req.body);
  order.save(err =>{
    if(err){
      res.send(500);
      return;
    }
    res.send(201);
    console.log("asd");
  }); 
});

module.exports = router;

