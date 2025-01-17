import React, { useState } from "react";
import {useAuth} from "../../../contexts/AuthContextProvider"
import axios from "axios";
import { useNavigate } from "react-router";
function AdminProjectsCreate() {
  const [createForm, setCreateForm] = useState({
    name: "",
    introduction: "",
    content: "",
    githubLink: "",
  });

  const base_url = import.meta.env.VITE_API_URL
  const {token} = useAuth();
  let navigate = useNavigate();

  const createProject = (e) => {
    axios.post(base_url + "/projects/",createForm,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    }).then(res => navigate("/admin/projects"))
    .catch(err => console.log(err));
  }

  const handleName = (e) => {
    setCreateForm({...createForm,name:e.target.value})
  }
  const handleIntroduction = (e) => {
    setCreateForm({...createForm,introduction:e.target.value})
  }
  const handleContent = (e) => {
    setCreateForm({...createForm,content:e.target.value})
  }
  const handleGithub = (e) => {
    setCreateForm({...createForm,githubLink:e.target.value})
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Create Project </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            className="h-10 border rounded pl-2"
            type="text"
            name="title"
            id="title"
            placeholder="Project Name"
            value={createForm.name}
            onChange={handleName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="link">Github Link</label>
          <input
            className="h-10 border rounded pl-2"
            type="text"
            name="link"
            id="link"
            placeholder="Project Link"
            value={createForm.githubLink}
            onChange={handleGithub}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="introduction">Introduction Text</label>
          <input
            className="h-10 border rounded pl-2"
            type="text"
            name="introduction"
            id="introduction"
            placeholder="Project Introduction Text"
            value={createForm.introduction}
            onChange={handleIntroduction}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="content">Project Content</label>
          <textarea
            className="border resize-none h-[200px] rounded p-2"
            name="content"
            id="content"
            value={createForm.content}
            onChange={handleContent}
          ></textarea>
        </div>
        <button onClick={createProject} className="bg-green-400 text-white py-2">Create</button>
      </div>
    </div>
  );
}

export default AdminProjectsCreate;
