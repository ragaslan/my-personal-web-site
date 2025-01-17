import React, { useEffect, useState } from "react";
import { useGeneralSettings } from "../../contexts/GeneralSettingsContextProvider";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContextProvider";

function AdminContact() {
  
  let base_url = import.meta.env.VITE_API_URL;
  
  let {token} = useAuth();

  const {generalSettings,setGeneralSettings} = useGeneralSettings();
  
  const [email,setEmail] = useState("")
  const [linkedin,setLinkedin] = useState("")
  const [github,setGithub] = useState("")
  const [youtube,setYoutube] = useState("")
  const [postObj,setPostObj] = useState({})
  const [isSaved,setIsSaved] = useState(false)
  
  useEffect(() => {
    setPostObj(generalSettings)
    setEmail(generalSettings.email ?? "")
    setLinkedin(generalSettings.linkedin ?? "")
    setGithub(generalSettings.github ?? "")
    setYoutube(generalSettings.youtube ?? "")
  },[generalSettings])




  let save = (e) => {
    e.preventDefault();
    let newObj = {...postObj}
    
    newObj.email = email;
    newObj.github = github;
    newObj.youtube = youtube;
    newObj.linkedin = linkedin;

    // save this data in db
    axios.post(base_url + "/settings/",{...newObj},{
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => {
      //console.log(res)
      setGeneralSettings(newObj)
      setIsSaved(true)
    })
    .catch(err => console.log(err))

    
    
  }

  let handleEmail = (e) => {
    setEmail(e.target.value)
  }
  let handleLinkedin = (e) => {
    setLinkedin(e.target.value)
  }
  let handleGithub = (e) => {
    setGithub(e.target.value)
  }
  let handleYoutube = (e) => {
    setYoutube(e.target.value)
  }

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="github">Github</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="github"
            id="github"
            value={github}
            onChange={handleGithub}
          />
        </div>
        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="linkedin"
            id="linkedin"
            value={linkedin}
            onChange={handleLinkedin}
          />
        </div>
        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="youtube">Youtube</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="youtube"
            id="youtube"
            value={youtube}
            onChange={handleYoutube}
          />
        </div>
        <button
          onClick={save}
          className="flex bg-blue-400 text-white py-2 px-8 rounded-md mt-4 self-start justify-start items-center"
        >
          Save
        </button>
        {isSaved ? <a className="text-green-400">successful !</a> : null}
      </div>
    </div>
  );
}

export default AdminContact;
