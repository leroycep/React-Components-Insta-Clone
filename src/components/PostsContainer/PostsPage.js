//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummydata from "../../dummy-data.js";

const PostsPage = () => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {dummydata.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
