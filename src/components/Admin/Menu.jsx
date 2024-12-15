import React from 'react'
import { Link } from 'react-router'

function Menu({setActivePage}) {
  return (
    <div className='w-[200px] h-screen bg-blue-400 flex flex-col p-4'>
        <a className='text-white my-2 text-xl font-bold'>Settings</a>
        <div className='link-group flex flex-col gap-4 mt-6 text-gray-100'>
            <Link onClick={() => setActivePage("Ben Kimim")} to={"./whoami"}>Ben Kimim</Link>
            <Link onClick={() => setActivePage("İletişim Ayarları")}  to={"./contact"}>İletişim Ayarları</Link>
            <Link onClick={() => setActivePage("Yazılım Dilleri")}  to={"./languages"}>Yazılım Dilleri</Link>
            <Link onClick={() => setActivePage("Blog Yönetimi")}  to={"./blog"}>Blog Yönetimi</Link>
            <Link onClick={() => setActivePage("Projeler Yönetimi")}  to={"./projects"}>Projeler Yönetimi</Link>
            <Link to={"./logout"}>Çıkış Yap</Link>
        </div>
        
    </div>
  )
}

export default Menu