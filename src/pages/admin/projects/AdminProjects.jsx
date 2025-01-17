import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import ProjectItem from "../../../components/Admin/Projects/ProjectItem"
import axios from 'axios'
import { useAuth } from '../../../contexts/AuthContextProvider'
function AdminProjects() {
  const [projects,setProjects] = useState([])
  
  const {token} = useAuth();
  const base_url = import.meta.env.VITE_API_URL
  let navigate = useNavigate();
  useEffect(()=>{
    axios
    .get(base_url + "/projects/")
    .then(res => setProjects(res.data))
    .catch(err => console.log(err))
  },[])

  const deleteProject = (ID) => {
    axios.delete(base_url + `/projects/${ID}`,{
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => setProjects(projects.filter(item => item.id != ID)))
    .catch(err => console.log(err))
  }
  
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col items-start py-2 gap-4'>
          <Link to={`./create`} className='flex px-3 py-2 bg-green-500 rounded text-white'>Create Project</Link>
          <div className='flex flex-col w-full gap-4'>
            {projects.map((item) => <ProjectItem data={item} deleteProject={deleteProject}/>)}
          </div>
        </div>
    </div>
  )
}

export default AdminProjects