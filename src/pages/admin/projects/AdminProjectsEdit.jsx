import React from 'react'

function AdminProjectsEdit() {

  
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-bold'>Update Project </h2>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="title">Title</label>
                <input className='h-10 border rounded pl-2' type="text" name="title" id="title" placeholder='Project Name' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="link">Github Link</label>
                <input className='h-10 border rounded pl-2' type="text" name="link" id="link" placeholder='Project Link' />
            </div>
            
            <div className='flex flex-col gap-2'>
                <label htmlFor="introduction">Introduction Text</label>
                <input className='h-10 border rounded pl-2' type="text" name="introduction" id="introduction" placeholder='Project Introduction Text' />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="content">Project Content</label>
                <textarea className='border resize-none h-[200px] rounded p-2' name="content" id="content"></textarea>
            </div>
            <button className='bg-yellow-400 text-white py-2'>Update</button>
        </form>
    </div>
  )
}

export default AdminProjectsEdit