import React from 'react'
import { Link } from 'react-router'

function PostItem({data,deletePost}) {
    let date = new Date(data.createdAt)
    let months_tr = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Eylül","Ekim","Kasım","Aralık"]
    date = date.getDate() + " " + (months_tr.at(date.getMonth()))  + " " + date.getFullYear();

    let ID = data.id;


  return (
    <div className='flex justify-between hover:bg-blue-200 p-2 items-center rounded w-full border'>

        <div className='flex gap-4 items-center'>
            <div className='max-w-[400px] min-w-[300px]'>
                 {data.title}
            </div>
            <div className='flex gap-2 text-gray-500 text-sm'>
                <span>Yazar: </span>
                <span>{data.author} </span>  
            </div>
            <div className='flex gap-2 text-gray-500 text-sm'>
                <span>Yayın Tarihi: </span>
                <span>{date} </span>  
            </div>
        </div>
        <div className='buttons flex gap-2'>
            <Link to={`./edit/${data.id}`} state={{postData:data}} className='bg-yellow-400 text-white p-2 min-w-[50px] rounded flex justify-center items-center'>Edit</Link>
            <Link onClick={() => deletePost(ID)} className='bg-red-500 text-white p-2 min-w-[50px] rounded flex justify-center items-center'>Delete</Link>
        </div>

    </div>
  )
}

export default PostItem