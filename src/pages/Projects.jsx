import React, { useEffect, useState } from 'react'
import ProjectIntro from '../components/Projects/ProjectIntro'
import axios from 'axios';

function Projects() {
  const [projects,setProjects] = useState([]);

  const base_url = import.meta.env.VITE_API_URL;
  

  useEffect(()=> {
    axios.get(base_url + "/projects/")
    .then(res => setProjects(res.data))
    .catch(err => console.log(err))
  },[]);

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold mb-4'>Projeler</h2>
        {projects.map((item,index) => <ProjectIntro key={index} data={item}/>)}
    </div>
  )
}

export default Projects