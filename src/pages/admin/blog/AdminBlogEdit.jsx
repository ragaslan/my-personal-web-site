import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useAuth } from '../../../contexts/AuthContextProvider';

function AdminBlogEdit() {

  const base_url = import.meta.env.VITE_API_URL;

  const {token} = useAuth();
  const location = useLocation();
  const {postId} = useParams();
  const navigate = useNavigate();

  let postData = null;
  if(location.state != null){
    postData = location.state.postData
  }
  
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("")
  const [author,setAuthor] = useState("")
  let handleTitle = (e) => {
    setTitle(e.target.value);
  }
  let handleContent = (e) => {
    setContent(e.target.value);
  }


  useEffect(() => {
    if(postData == null){
      axios.get(base_url + `/posts/${postId}`)
      .then(res => {
        setTitle(res.data.title)
        setContent(res.data.content)
        setAuthor(res.data.author)
      })
      .catch(err => console.log(err))
    }else{
      setTitle(postData.title)
      setContent(postData.content)
      setAuthor(postData.author)
    }
  },[])

  let updatePost = () => {
    axios.put(base_url + `/posts/${postId}`,{
      title,
      content,
      author,
      createdAt : new Date().toString()
    },{
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => navigate("/admin/blog/"))
    .catch(err => console.log(err))
  }

  return (
    <div className="flex flex-col gap-4">
        <h2 className='text-xl font-bold'>Edit Post</h2>
        <div className="input-group flex flex-col gap-2">
          <label className="font-bold text-sm" htmlFor="title">
            Title
          </label>
          <input
            className="border-2 text-sm p-2 border-gray-200 rounded"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitle}
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
            value={content}
            onChange={handleContent}
          />
        </div>
        <div className="input-group flex flex-col items-start gap-2 self-end">
          
          <button
            onClick={updatePost}
            className="bg-yellow-500 rounded text-white border text-sm p-2 min-w-[300px] hover:cursor-pointer hover:scale-105"
            name="submitBtn"
            id="submitBtn"
          >Update</button>
        </div>
    </div>
  )
}

export default AdminBlogEdit