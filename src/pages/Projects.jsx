import React, { useEffect, useState } from 'react'
import ProjectIntro from '../components/Projects/ProjectIntro'
import axios from 'axios';

function Projects() {
  const [projects,setProjects] = useState([]);

  const base_url = import.meta.env.VITE_API_URL;
  

  useEffect(()=> {
    axios.get(base_url + "/projects/")
    .then(res => {console.log(res)})
    .catch(err => console.log(err))
  },[]);

  const DATA = [
    {
      id : 1,
      name : "Project Name",
      introText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis quam possimus. Totam, expedita accusantium!"
    },
    {
      id : 2,
      name : "Project Name",
      introText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis quam possimus. Totam, expedita accusantium!"
    },
    {
      id : 3,
      name : "Project Name",
      introText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis quam possimus. Totam, expedita accusantium!"
    },
    {
      id : 4,
      name : "Project Name",
      introText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis quam possimus. Totam, expedita accusantium!"
    },
    {
      id : 5,
      name : "Project Name",
      introText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis quam possimus. Totam, expedita accusantium!"
    },
    {
      id : 6,
      name : "Project Name",
      introText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis quam possimus. Totam, expedita accusantium!"
    }
  ]


  return (
    <div className='flex flex-col gap-4'>

        <h2 className='text-3xl font-bold mb-4'>Projeler</h2>
        {DATA.map((item) => <ProjectIntro data={item}/>)}
    </div>
  )
}

export default Projects