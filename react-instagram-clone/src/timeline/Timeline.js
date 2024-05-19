import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "user153829473927",
      postImage:
        "https://hamboards.com/cdn/shop/articles/howlongboarding.jpg?v=1583922289",
      likes: 540,
      timestamp: "2d",
    },
    {
      user: "ramundson",
      postImage:
        "https://runawayjuno.com/wp-content/uploads/2021/09/05.2021_Northern-California__DSC7103-Juno-Kim-2000.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "Bates College",
      postImage:
        "https://tahoequarterly.com/wp-content/uploads/2021/06/Yuba-River-Sunset-Cast-Fly-Fishing.jpg",
      likes: 492,
      timestamp: "2d",
    },
    {
      user: "waffle_warrior",
      postImage:
        "https://i.pinimg.com/originals/e8/db/60/e8db60ca8e1e0dd342cb4719ccfc47e8.jpg",
      likes: 314,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
