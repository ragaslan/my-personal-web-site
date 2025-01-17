import React from "react";
import BlogTag from "./BlogTag";
import { Link, useLocation } from "react-router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { createDateFormat } from "../../utils/post";

function Post({ data }) {
  const location = useLocation();
  let createdAt = createDateFormat(data.createdAt);
  return (
    <div className="flex bg-white flex-col sm:flex-row shadow-md shadow-gray-300 rounded-lg">
      <div className="flex w-11/12 flex-col p-4  gap-4 sm:gap-2">
        <a className="text-2xl text-gray-900">{data.title}</a>
        <div className="post-header flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-bold">Yazar : </span>
            <span className="text-xs text-gray-500">{data.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-bold">
              Yayın Tarihi :{" "}
            </span>
            <span className="text-xs text-gray-500">{createdAt}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {data.tags.map((tagItem, index) => (
            <BlogTag key={index} data={tagItem} />
          ))}
        </div>
      </div>
      <Link
        to={`/blog/${data.slug}`}
        state={{data}}
        className="flex min-h-[30px]  w-full sm:w-1/12 bg-blue-400 rounded-bl-lg sm:rounded-tl-lg sm:rounded-tr-lg rounded-br-lg items-center justify-center text-white text-sm"
      >
        <AiOutlineArrowRight className="text-xl"/>
      </Link>
    </div>
  );
}

export default Post;
