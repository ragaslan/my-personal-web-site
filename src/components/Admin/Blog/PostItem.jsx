import React from 'react'
import { Link } from 'react-router'

function PostItem({data}) {
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
                <span>{data.date} </span>  
            </div>
        </div>
        <div className='buttons flex gap-2'>
            <Link to={`./edit/${data.id}`} className='bg-blue-400 text-white p-2 min-w-[50px] rounded flex justify-center items-center'>Düzenle</Link>
            <Link to={`./delete/${data.id}`} className='bg-red-500 text-white p-2 min-w-[50px] rounded flex justify-center items-center'>Sil</Link>
        </div>

    </div>
  )
}

export default PostItem