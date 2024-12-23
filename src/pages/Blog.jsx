import React from 'react'
import Post from '../components/Blog/Post'

function Blog() {

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

  const pagerCount = 3;

  let pagerArr = []

  for(let i = 1; i <= pagerCount; i++){
    pagerArr.push(i);
  }
  return (
    <div className='flex flex-col gap-8'>
        <h2 className='text-3xl font-bold'>Blog</h2>
        <div className='posts flex flex-col gap-4'>
          {postList.map((postItem)=> <Post key={postItem.id} data={postItem} />)}
        </div>
        <div className='pager flex gap-2 text-white self-start'>
            {pagerArr.map(pagerItem => <a className='bg-blue-400 p-2 rounded' href={`?page=${pagerItem}`}>{pagerItem}</a>)}
        </div>
    </div>
  )
}

export default Blog