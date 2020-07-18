const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const post = mongoose.Schema({
  title:{
    type:String,
    required:true,
  },

  description:{
    type:String,
    required:true,
  },

  imgurl:{
    type:String,
    required:true,
  },
  numOfLikes:{
    type: Number,
    required: true,
    default: 0,
  },
  isfeatured:{
    type: Boolean,
    default: false,
  },
  category:{
    type:ObjectId,
    ref:"Category",
  },

});
mongoose.model("Post",post);
