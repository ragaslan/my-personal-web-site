import React from 'react'
import PostItem from '../../../components/Admin/Blog/PostItem'
import { Link } from 'react-router'

function AdminBlog() {
  const postList = [
    {
      "id" : 0,
      "title" : "How to create a static web site ?",
      "author" : "Ramazan Ağaslan",
      "date" : "15.12.2024",
      "tags" : ["web development","http"],
      "content" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nemo beatae a quae? Praesentium placeat sunt molestiae. Blanditiis unde cupiditate expedita nobis, consectetur autem deserunt ipsam cumque mollitia eius dolorem temporibus asperiores laboriosam perferendis recusandae sed ratione harum. Rerum esse at quo ea amet repudiandae natus adipisci enim voluptatibus eos?"
    },
    {
      "id" : 1,
      "title" : "How to create a static web site ?",
      "author" : "Ramazan Ağaslan",
      "date" : "15.12.2024",
      "tags" : ["web development","http"],
      "content" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nemo beatae a quae? Praesentium placeat sunt molestiae. Blanditiis unde cupiditate expedita nobis, consectetur autem deserunt ipsam cumque mollitia eius dolorem temporibus asperiores laboriosam perferendis recusandae sed ratione harum. Rerum esse at quo ea amet repudiandae natus adipisci enim voluptatibus eos?"
    },
    {
      "id" : 2,
      "title" : "How to create a static web site ?",
      "author" : "Ramazan Ağaslan",
      "date" : "15.12.2024",
      "tags" : ["web development","http"],
      "content" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nemo beatae a quae? Praesentium placeat sunt molestiae. Blanditiis unde cupiditate expedita nobis, consectetur autem deserunt ipsam cumque mollitia eius dolorem temporibus asperiores laboriosam perferendis recusandae sed ratione harum. Rerum esse at quo ea amet repudiandae natus adipisci enim voluptatibus eos?"
    },
    {
      "id" : 3,
      "title" : "How to create a static web site ?",
      "author" : "Ramazan Ağaslan",
      "date" : "15.12.2024",
      "tags" : ["web development","http"],
      "content" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nemo beatae a quae? Praesentium placeat sunt molestiae. Blanditiis unde cupiditate expedita nobis, consectetur autem deserunt ipsam cumque mollitia eius dolorem temporibus asperiores laboriosam perferendis recusandae sed ratione harum. Rerum esse at quo ea amet repudiandae natus adipisci enim voluptatibus eos?"
    },
    {
      "id" : 4,
      "title" : "How to create a static web site ?",
      "author" : "Ramazan Ağaslan",
      "date" : "15.12.2024",
      "tags" : ["web development","http"],
      "content" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nemo beatae a quae? Praesentium placeat sunt molestiae. Blanditiis unde cupiditate expedita nobis, consectetur autem deserunt ipsam cumque mollitia eius dolorem temporibus asperiores laboriosam perferendis recusandae sed ratione harum. Rerum esse at quo ea amet repudiandae natus adipisci enim voluptatibus eos?"
    },
  ]
  return (
    <div className='flex flex-col gap-4 items-start'>
      <Link to={`./create`} className='bg-green-500 text-white px-4 py-2 rounded'>Create Post</Link>
      {postList.map((postItem,index) => <PostItem key={index} data={postItem}/>)}
    </div>
  )
}

export default AdminBlog