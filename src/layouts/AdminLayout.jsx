import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Menu from '../components/Admin/Menu'

function AdminLayout() {
  const [activePage,setActivePage] = useState("Anasayfa")
  
  return (
    <div className='flex'>
        <Menu setActivePage={setActivePage}/>
        <div className='content flex flex-col w-full p-8'>
            <div className='flex bg-blue-200 py-2 px-4 max-w-[400px]'>{activePage}</div>
            <div className='border-2 border-blue-200 mt-8 min-h-[300px] p-4'>
                <Outlet/>
            </div>
            
        </div>
    </div>
  )
}

export default AdminLayout