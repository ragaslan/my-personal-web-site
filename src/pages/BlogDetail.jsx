import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import BlogTag from '../components/Blog/BlogTag'
import axios from 'axios';
import {createDateFormat} from "../utils/post"
function BlogDetail() {

    const [post,setPost] = useState({});
    const [date,setDate] = useState("");
    // unique olan post url ile postu getir
    const base_url = import.meta.env.VITE_API_URL;

    let {postUrl} = useParams()
    let location = useLocation();

    useEffect(() => {
        if(location.state != null && location.state.data){
            const postData = location.state.data
            //const createdAt = new Date(postData.createdAt)
            //const date_str = createdAt.getDay() + " " + months_tr.at(createdAt.getMonth()) + " " + createdAt.getFullYear()
            let date_str = createDateFormat(postData.createdAt);
            setDate(date_str)
            setPost(postData);
        }else{
            // todo url den cek ama su an url db de tutulmuyor
            axios.get(base_url + `/posts/slug/${postUrl}`)
            .then(res => {
                let date_str = createDateFormat(res.data.createdAt);
                setDate(date_str)
                setPost(res.data)
            })
            .catch(err => console.log(err))
        }
    },[])

  return (
    <div className='flex flex-col'>
        <h1 className='text-3xl text-blue-400 mb-4'>Blog</h1>
        <h2 className='text-3xl font-bold'>{post.title}</h2>
        <div className='mt-2 text-gray-600 flex gap-4'>
            <div className='text-sm'>
                <span>Author: </span>
                <span className='font-bold'>{post.author}</span>
            </div>
            <div className='text-sm'>
                <span>Published At: </span>
                <span className='font-bold'>{date}</span>
            </div>
        </div>
        <div className='post-content mt-8 flex'>
            <p>{post.content}</p>
        </div>

        <div className='flex flex-col gap-2'>
            <h3 className='text-blue-400 mt-4'>Etiketler</h3>
            <div className='flex gap-2'>
                {post.tag ? post.tags.map((tagItem,index) => <BlogTag key={index} data={tagItem}/>) : null}
            </div>
        </div>
    </div>
  )
}

export default BlogDetail