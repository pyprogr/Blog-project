import React from "react";
import Header from "../Parts/Header";
import Breadcumb from "../Parts/Breadcumb";
import Posts from "../Parts/Posts";
import Sidebar from "../Parts/Sidebar";
import Footer from "../Parts/Footer";

const Category = () => {
  return (
  <>
  <Header />
  <Breadcumb />
  <section class="blog-section">
  <div class="container">
    <div class="row">
      <Posts />
      <Sidebar />
    </div>
  </div>
</section>
  <Footer />
  </>
  );
};

export default Category;
