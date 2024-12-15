
import { Route, Routes, useParams } from 'react-router'
import './App.css'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import AdminLayout from './layouts/AdminLayout'
import AdminHome from './pages/admin/AdminHome'
import AdminContact from './pages/admin/AdminContact'
import AdminLanguages from './pages/admin/languages/AdminLanguages'
import AddLanguage from './pages/admin/languages/AddLanguage'
import AdminWhoami from './pages/admin/AdminWhoami'
import AdminProjects from './pages/admin/projects/AdminProjects'
import AdminBlog from './pages/admin/blog/AdminBlog'
import BlogDetail from './pages/BlogDetail'
import AdminBlogCreate from './pages/admin/blog/AdminBlogCreate'

function App() {
  
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        {/* <Route path='about' element={<About/>}/> */}
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:postUrl' element={<BlogDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Route>
      
      <Route path="admin" element={<AdminLayout/>}>
        <Route index element={<AdminHome/>} />
        <Route path='contact' element={<AdminContact/>} />
        <Route path='languages' element={<AdminLanguages/>} />
        <Route path='languages/add' element={<AddLanguage/>} />
        <Route path='whoami' element={<AdminWhoami/>} />
        <Route path='blog' element={<AdminBlog/>} />
        <Route path='blog/create' element={<AdminBlogCreate/>} />
        <Route path='projects' element={<AdminProjects/>} />
      </Route>

    </Routes>
  )
}

export default App
