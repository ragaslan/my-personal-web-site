import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <>
    
    <Navbar/>
    <div className='max-w-[960px] m-auto mt-8 p-8 md:p-2'>
      <Outlet/>
    </div>
    </>
  )
}

export default MainLayout