const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Category = mongoose.model("Category");

router.get("/posts", (req , res) => {
  Post.find()
  .populate("category", "_id name")
  .then((posts) => {
    res.json({ posts });
  })
  .catch((err)=>{
    console.log(err);
  });
});

router.get("/featured-posts", (req , res) => {
  Post.find({isfeatured: true})
  .populate("category", "_id name")
  .then((posts) => {
    res.json({ posts });
  })
  .catch((err)=>{
    console.log(err);
  });
});

router.get("/posts/:id", (req , res) => {
  Post.find({ _id: req.params.id })
  .populate("category" , "_id name")
  .then((posts) => {
    res.json({ posts });
  })
  .catch((err)=>{required
    console.log(err);
  });
});

router.get("/posts/category/:catId", (req , res) => {
  Post.find({ category: { _id:req.params.catId } })
  .populate("category" , "_id name")
  .then((posts) => {
    res.json({ posts });
  })
  .catch((err)=>{required
    console.log(err);
  });
});

router.get("/trending-posts", (req , res) => {
  Post.find().sort({numOfLikes: -1 })
  .populate("category", "_id name")
  .then((posts) => {
    res.json({ posts });
  })
  .catch((err)=>{required
    console.log(err);
  });
});

router.get("/fresh-stories", (req , res) => {
  Post.find().sort({_id: -1 }).limit(3)
  .populate("category", "_id name")
  .then((posts) => {
    res.json({ posts });
  })
  .catch((err)=>{required
    console.log(err);
  });
});

router.post("/new-posts", (req , res) => {
  const {title , description , imgurl , category , numOfLikes , isfeatured} = req.body;
  if(!title || !description || !imgurl || !category || !numOfLikes || !isfeatured){
    res.json({err: "All fields are mandatory."});
  }

  Category.findOne({_id : category.id})
  .then((cat) => {
    const post = new Post({
      title,
      description,
      imgurl,
      numOfLikes,
      isfeatured,
      category: cat,


    });

    post.save().then(() =>{
      res.json({msg: "Post created successfully ! "});
    })
    .catch((err)=>{
      console.log(err);
    });


  })
  .catch((err)=>{
    console.log(err);
  });

  });



module.exports = router;
