import React from "react";
import Postitem from "./Postitem";
import Pagination from "./Pagination";

const Posts = () => {
  return (
    <div class="col-lg-8">
      <div class="blog-box list-style">
        <Postitem />
        <Postitem />
        <Postitem />
        <Postitem />

        <Pagination />

      </div>
    </div>

  );
};

export default Posts;
