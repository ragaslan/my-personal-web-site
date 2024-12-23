import React from 'react'
import { useParams } from 'react-router';
import { AiFillGithub } from "react-icons/ai";

function ProjectDetail() {

  // get projectId and send request to the server app 
  let params = useParams();

  const DATA = {
    id : params.projectId,
    name : "Project Name",
    content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis atque numquam mollitia vero sequi, dolor molestiae eius quia ad corrupti beatae, aperiam aliquid accusamus quas, possimus pariatur optio at reprehenderit! Excepturi veritatis ipsa voluptatem possimus soluta expedita fugiat alias vel.",
    link : "https://github.com/ragaslan"
}

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='font-bold text-2xl text-blue-400'>Proje Detay</h2>
        <div className='flex flex-col gap-4'>
            <a className='text-3xl'>{DATA.name}</a>
            <div className='flex flex-col gap-4 items-start'>
                <p>{DATA.content}</p>
                <a className='text-md p-2 px-4 rounded-md text-white bg-blue-400 flex items-center gap-2' href={DATA.link} target='_blank'>
                  <AiFillGithub/>
                  <span className='text-sm'>Kaynak Kodu</span></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetail