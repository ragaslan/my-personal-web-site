import React from 'react'

function AdminBlogEdit() {
  return (
    <form className="flex flex-col gap-4">
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
          />
        </div>
        <div className="input-group flex flex-col items-start gap-2 self-end">
          
          <input
            className="bg-yellow-500 rounded text-white border text-sm p-2 min-w-[300px] hover:cursor-pointer hover:scale-105"
            type="submit"
            name="submitBtn"
            id="submitBtn"
            value={"Update"}
          />
        </div>
    </form>
  )
}

export default AdminBlogEdit