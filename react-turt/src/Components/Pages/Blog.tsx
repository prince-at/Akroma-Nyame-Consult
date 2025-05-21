import React from "react";
import "./Css/Blog.css";
import BlogPicture from "../../assets/Quyen-B.jpg";
import BlogPost from "../BlogPost";
import MarqueeText from "../MarqueeText";
import MarqueeText2 from "../MarqueeText2";

type Props = {};

const Blog = (props: Props) => {
  return (
    <>
      <div className="blog-page">
        <img
          src={BlogPicture}
          alt="blog-background-picture"
          className="Blog-picture"
        />
        <div>
          <h1 className="blog-title">Blog</h1>
        </div>
      </div>
      <MarqueeText2 />
      <h1 className="traveling-news">Latest Travelling News</h1>
      <hr />
      <div>
        <BlogPost />{" "}
      </div>
    </>
  );
};

export default Blog;
