import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../../contexts/AuthContextProvider'

function Menu({setActivePage}) {
  const {logout} = useAuth();
  return (
    <div className='w-[200px] h-screen bg-blue-400 flex flex-col p-4 fixed left-0 top-0'>
        <a className='text-white my-2 text-xl font-bold'>Settings</a>
        <div className='link-group flex flex-col gap-4 mt-6 text-gray-100'>
            <Link onClick={() => setActivePage("Who Am I ?")} to={"./whoami"}>Who Am I ?</Link>
            <Link onClick={() => setActivePage("Contact Settings")}  to={"./contact"}>Contact Settings</Link>
            <Link onClick={() => setActivePage("Languages")}  to={"./languages"}>Languages</Link>
            <Link onClick={() => setActivePage("Blogs")}  to={"./blog"}>Blogs</Link>
            <Link onClick={() => setActivePage("Projects")}  to={"./projects"}>Projects</Link>
            <Link onClick={() => logout()}>Logout</Link>
        </div>
        
    </div>
  )
}

export default Menu