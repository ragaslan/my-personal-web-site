import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  
  const pages = [
    {
        "id" : 0,
        "name" : "Anasayfa",
        "name_en" : "Home",
        "url" : "/"
    },
    {
        "id" : 2,
        "name" : "Blog",
        "name_en" : "Blog",
        "url" : "/blog"
    },
    {
        "id" : 3,
        "name" : "İletişim",
        "name_en" : "Contact",
        "url" : "/contact"
    },
    {
        "id" : 4,
        "name" : "Projeler",
        "name_en" : "Projects",
        "url" : "/projects"
    },

  ]

  return (
    <div className='container m-auto max-w-[960px] flex gap-4 my-8 px-8 py-2 md:p-2 justify-center md:justify-start flex-wrap'>
        {pages.map((page,index)=> <Link key={index} className='text-lg' to={page.url}>{page.name}</Link>)}
    </div>
  )
}

export default Navbar