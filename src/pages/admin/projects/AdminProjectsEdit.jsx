import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useAuth } from "../../../contexts/AuthContextProvider";

function AdminProjectsEdit() {
  const [projectData, setProjectData] = useState({
    name: "",
    introduction: "",
    githubLink: "",
    content: "",
  });
  const [isUpdated,setIsUptaded] = useState(false)

  const location = useLocation();
  const base_url = import.meta.env.VITE_API_URL;
  const {token} = useAuth();
  let {projectId} = useParams();

  useEffect(() => {
    if (location.state != null && location.state.data) {
      setProjectData(location.state.data);
    }
  }, []);

  const handleUpdate = (e) => {
    axios
    .put(base_url + `/projects/${projectId}`,projectData,{
        headers : {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => {
        setIsUptaded(true);
    })
    .catch(err => console.log(err))
  }

  const handleContent = (e) => {
    setProjectData({ ...projectData, content: e.target.value });
  };
  const handleLink = (e) => {
    setProjectData({ ...projectData, githubLink: e.target.value });
  };
  const handleIntroduction = (e) => {
    setProjectData({ ...projectData, introduction: e.target.value });
  };
  const handleName = (e) => {
    setProjectData({ ...projectData, name: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Update Project </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            className="h-10 border rounded pl-2"
            type="text"
            name="title"
            id="title"
            placeholder="Project Name"
            value={projectData.name}
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
            value={projectData.githubLink}
            onChange={handleLink}
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
            value={projectData.introduction}
            onChange={handleIntroduction}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="content">Project Content</label>
          <textarea
            className="border resize-none h-[200px] rounded p-2"
            name="content"
            id="content"
            value={projectData.content}
            onChange={handleContent}
          ></textarea>
        </div>
        <button
          onClick={handleUpdate}
          className="bg-yellow-400 text-white py-2"
        >
          Update
        </button>
        {isUpdated ? <a className="text-green-400">Successful !</a> : null}
      </div>
    </div>
  );
}

export default AdminProjectsEdit;
