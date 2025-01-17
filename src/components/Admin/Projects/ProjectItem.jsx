import React from 'react'
import { Link } from 'react-router'

function ProjectItem({data,deleteProject}) {

  return (
    <div className='flex justify-between w-full border-2 rounded p-4'>

      <div className='flex flex-col gap-2'>
        <a className='text-xl'>
        {data.name}
        </a>
        <p className='max-w-[500px] text-gray-500'>
          {data.introduction}
          </p>
      </div>

      <div className='flex flex-col gap-2 text-center'>
        <Link onClick={() => deleteProject(data.id)} className='p-2 bg-red-400 text-white rounded'>Delete</Link>
        <Link to={`./edit/${data.id}`} state={{data}} className='p-2 bg-yellow-400 text-white rounded'>Edit</Link>
      </div>

    </div>
  )
}

export default ProjectItem