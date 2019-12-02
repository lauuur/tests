const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

router.post("/", async (req, res) =>{
  console.log(req.body);
  const user1 = new User(req.body);
  user1.save(err =>{
      if(err){
        console.log(err);
          res.send(500);
          return;
      }
      res.send(200);
  });
});

module.exports = router;

