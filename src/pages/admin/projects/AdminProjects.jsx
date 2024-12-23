import React from 'react'
import { Link } from 'react-router'
import ProjectItem from "../../../components/Admin/Projects/ProjectItem"
function AdminProjects() {
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
    <div className='flex flex-col'>
        <div className='flex flex-col items-start py-2 gap-4'>
          <Link to={`./create`} className='flex px-3 py-2 bg-green-500 rounded text-white'>Create Project</Link>
          <div className='flex flex-col w-full gap-4'>
            {DATA.map((item) => <ProjectItem data={item}/>)}
          </div>
        </div>
    </div>
  )
}

export default AdminProjects