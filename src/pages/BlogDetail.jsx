import React from 'react'
import { useParams } from 'react-router'
import BlogTag from '../components/Blog/BlogTag'

function BlogDetail({data}) {

    // unique olan post url ile postu getir
    let params = useParams()

    // post var farzedelim
    let postDetailData = {
        "id" : 0,
        "title" : "How to create a static web site ?",
        "author" : "Ramazan Ağaslan",
        "date" : "15.12.2024",
        "tags" : ["web development","http"],
        "content" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nemo beatae a quae? Praesentium placeat sunt molestiae. Blanditiis unde cupiditate expedita nobis, consectetur autem deserunt ipsam cumque mollitia eius dolorem temporibus asperiores laboriosam perferendis recusandae sed ratione harum. Rerum esse at quo ea amet repudiandae natus adipisci enim voluptatibus eos?"
      }

  return (
    <div className='flex flex-col'>
        <h1 className='text-3xl text-blue-400 mb-4'>Blog</h1>
        <h2 className='text-3xl font-bold'>{postDetailData.title}</h2>
        <div className='mt-2 text-gray-600 flex gap-4'>
            <div className='text-sm'>
                <span>Author: </span>
                <span className='font-bold'>{postDetailData.author}</span>
            </div>
            <div className='text-sm'>
                <span>Published At: </span>
                <span className='font-bold'>{postDetailData.date}</span>
            </div>
        </div>
        <div className='post-content mt-8 flex'>
            <p>{postDetailData.content}</p>
        </div>

        <div className='flex flex-col gap-2'>
            <h3 className='text-blue-400 mt-4'>Etiketler</h3>
            <div className='flex gap-2'>
                {postDetailData.tags.map((tagItem,index) => <BlogTag key={index} data={tagItem}/>)}
            </div>
        </div>
    </div>
  )
}

export default BlogDetail