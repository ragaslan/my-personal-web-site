import React, { useEffect, useState } from 'react'
import PostItem from '../../../components/Admin/Blog/PostItem'
import { Link } from 'react-router'
import axios from 'axios'
import { useAuth } from '../../../contexts/AuthContextProvider'

function AdminBlog() {
  const [posts,setPosts] = useState([])
  const base_url = import.meta.env.VITE_API_URL;
  let {token} = useAuth();

  useEffect(() => {
     axios.get(base_url + "/posts/")
     .then(res => {
        //console.log(res.data)
        setPosts(res.data)
      })
     .catch(err => console.log(err))
  },[])


  let deletePost = (ID) => {
    axios.delete(base_url + `/posts/${ID}`,{
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => {
      let postsAfterDelete = posts.filter(post => post.id != ID)
      setPosts(postsAfterDelete)
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='flex flex-col gap-4 items-start'>
      <Link to={`./create`} className='bg-green-500 text-white px-4 py-2 rounded'>Create Post</Link>
      {posts.map((postItem,index) => <PostItem key={index} data={postItem} deletePost={deletePost}/>)}
    </div>
  )
}

export default AdminBlog