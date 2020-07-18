const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");

router.get("/categories", (req , res) => {
  Category.find()
  .populate("category", "_id name")
  .then((categories) => {
    res.json({ categories });
  })
  .catch((err)=>{
    console.log(err);
  });
});

router.get("/category-num", (req , res) => {
  Category.count({})
  .populate("category", "_id name")
  .then((categories) => {
    res.json({ categories });
  })
  .catch((err)=>{
    console.log(err);
  });
});

router.post("/new-category", (req , res) => {
  const {name} = req.body;
  if(!name ){
    res.json({err: "All fields are mandatory."});
  }

  const category = new Category({
    name
  });

  category.save().then(() =>{
    res.json({msg: "Category created successfully ! "});
  })
  .catch((err)=>{
    console.log(err);
  });
});

module.exports = router;
