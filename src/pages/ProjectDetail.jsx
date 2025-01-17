import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router';
import { AiFillGithub } from "react-icons/ai";
import axios from 'axios';

function ProjectDetail() {

  // get projectId and send request to the server app 
  let {projectId} = useParams();
  const [projectData,setProjectData] = useState({});
  let location = useLocation();
  const base_url = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    if(location.state != null && location.state.data != null){
      setProjectData(location.state.data);
    }else{
      axios.get(base_url + `/projects/${projectId}`)
      .then(res => setProjectData(res.data))
      .catch(err => console.log(err))
    }
  },[]);

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='font-bold text-2xl text-blue-400'>Proje Detay</h2>
        <div className='flex flex-col gap-4'>
            <a className='text-3xl'>{projectData.name}</a>
            <div className='flex flex-col gap-4 items-start'>
                <p>{projectData.content}</p>
                <a className='text-md p-2 px-4 rounded-md text-white bg-blue-400 flex items-center gap-2' href={projectData.githubLink} target='_blank'>
                  <AiFillGithub/>
                  <span className='text-sm'>Kaynak Kodu</span></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetail