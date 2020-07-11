import React from "react";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";
import Comment from "../Parts/Comment";
import PostsDesc from "../Parts/PostsDesc"


const Single = () => {
  return (
  <>
  <Header />
  <div className="single-post no-sidebar">
        <PostsDesc />
      </div>
    <Comment />
  <Footer />
  </>
  );
};

export default Single;
