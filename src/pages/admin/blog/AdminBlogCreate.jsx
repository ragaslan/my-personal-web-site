import axios from "axios";
import React, { useState } from "react";
import {useAuth} from "../../../contexts/AuthContextProvider"
import { useNavigate } from "react-router";
function AdminBlogCreate() {

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  
  let {token} = useAuth()
  let base_url = import.meta.env.VITE_API_URL;
  let navigate = useNavigate();

  let handleTitle = (e) => {
    setTitle(e.target.value);
  }

  let handleContent = (e) => {
    setContent(e.target.value);
  }

  let handleSubmit = (e) => {

    // create post request then navigate
    axios.post(base_url + "/posts/",{
      title,
      content,
      author: "Admin",
      createdAt : new Date().toString()
    },{
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => {
      navigate("/admin/blog/")
    })
    .catch(err => console.log(err))
  
  }

  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Create Post</h2>
        <div className="input-group flex flex-col gap-2">
          <label className="font-bold text-sm" htmlFor="title">
            Title
          </label>
          <input
            className="border-2 text-sm p-2 border-gray-200 rounded"
            type="text"
            name="title"
            id="title"
            onChange={handleTitle}
            value={title}
          />
        </div>
        <div className="input-group flex flex-col items-start gap-2">
          <label className="font-bold text-sm" htmlFor="title">
            Content
          </label>
          <textarea
            className="border-2 resize-none border-gray-200 text-sm p-2 w-full min-h-[300px] rounded"
            name="title"
            id="title"
            onChange={handleContent}
            value={content}
          />
        </div>
        <div className="input-group flex flex-col items-start gap-2 self-end">
          
          <button
            className="bg-green-500 rounded text-white border text-sm p-2 min-w-[300px] hover:cursor-pointer hover:scale-105"
            onClick={handleSubmit}
            name="submitBtn"
            id="submitBtn"
          >Create</button>
        </div>
    </div>
  );
}

export default AdminBlogCreate;
