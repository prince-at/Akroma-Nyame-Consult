import React from "react";
import { BlogList } from "./BlogData";
import "./Pages/BlogPost.css";
import Subscribe from "./Subscribe";
import { useNavigate } from "react-router-dom";

type Props = {};

const BlogPost: React.FC<Props> = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="blog-post">
      <div className="blog-post-outer">
        {BlogList.map((blog, index) => {
          return (
            <div className="blog-post-card" key={index}>
              <div>
                <img
                  src={blog.blogImage}
                  alt="Blog Image"
                  className="blog-image"
                />
                <h1 className="title-blog">{blog.blogTitle}</h1>
                <p className="blog-date">{blog.blogDate}</p>
                <p className="blog-description">{blog.blogDescription}</p>
                <button className="button-content"
                onClick={()=>
                    navigate(blog.route)
                }>{blog.buttonText}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
     <Subscribe/>
     </>
  );
};

export default BlogPost;
