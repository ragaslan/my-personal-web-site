import React, { useEffect, useState } from "react";
import Post from "../components/Blog/Post";

function Blog() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch((import.meta.env.VITE_API_URL + "/posts/"))
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  // const pagerCount = 3;

  // let pagerArr = [];

  // for (let i = 1; i <= pagerCount; i++) {
  //   pagerArr.push(i);
  // }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold">Blog</h2>
      <div className="posts flex flex-col gap-4">
        {posts.map((postItem) => (
          <Post key={postItem.id} data={postItem} />
        ))}
      </div>
      {/* <div className="pager flex gap-2 text-white self-start">
        {pagerArr.map((pagerItem,index) => (
          <a key={index} className="bg-blue-400 p-2 rounded" href={`?page=${pagerItem}`}>
            {pagerItem}
          </a>
        ))}
      </div> */}
    </div>
  );
}

export default Blog;
