import React from "react";
import Item from "./item";

export default function Posts() {
  const posts = [
    {
      id: "1",
      userName: "amir8282",
      userImage: "./image/Profile.jpg",
      img: "./image/elden ring.png",
      caption: "bluh bluh bluh",
    },
    {
      id: "2",
      userName: "amir8282",
      userImage: "./image/Profile.jpg",
      img: "./image/elden ring.png",
      caption: "bluh bluh bluh",
    },
    {
      id: "3",
      userName: "amir8282",
      userImage: "./image/Profile.jpg",
      img: "./image/elden ring.png",
      caption: "bluh bluh bluh",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Item
          key={post.id}
          id={post.id}
          userName={post.userName}
          userImage={post.userImage}
          image={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
