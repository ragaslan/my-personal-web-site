
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
import ProjectDetail from './pages/ProjectDetail'
import AdminProjectsCreate from './pages/admin/projects/AdminProjectsCreate'
import AdminProjectsEdit from './pages/admin/projects/AdminProjectsEdit'
import AdminBlogEdit from './pages/admin/blog/AdminBlogEdit'
import Login from './pages/admin/Login'
import PrivateRoute from './PrivateRoute'

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
        <Route path='/projects/:projectId' element={<ProjectDetail/>}/>
      </Route>
      
      <Route element={<PrivateRoute/>}>
        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<AdminHome/>} />
          <Route path='contact' element={<AdminContact/>} />
          <Route path='languages' element={<AdminLanguages/>} />
          <Route path='languages/add' element={<AddLanguage/>} />
          <Route path='whoami' element={<AdminWhoami/>} />
          <Route path='blog' element={<AdminBlog/>} />
          <Route path='blog/create' element={<AdminBlogCreate/>} />
          <Route path='blog/edit/:postId' element={<AdminBlogEdit/>} />
          <Route path='projects' element={<AdminProjects/>} />
          <Route path='projects/create' element={<AdminProjectsCreate/>} />
          <Route path='projects/edit/:projectId' element={<AdminProjectsEdit/>} />
        </Route>
      </Route>
      

      <Route path="admin/login" element={<Login/>}/>
      
    </Routes>
  )
}

export default App
