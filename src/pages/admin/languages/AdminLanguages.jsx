import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../../contexts/AuthContextProvider";

function AdminLanguages() {
  const [languages,setLanguages] = useState([])
  
  const [tools,setTools] = useState([])
  const [langs,setLangs] = useState([])

  const base_url = import.meta.env.VITE_API_URL;
  const {token} = useAuth();

  useEffect(() => {
    axios.get(base_url + "/languages/")
    .then(response => {
      let allLangs = [...response.data];
      
      let tools = allLangs.filter(lang => lang.tool)
      let langs = allLangs.filter(lang => !tools.includes(lang))

      setLanguages(response.data)
      setTools(tools)
      setLangs(langs)
    })
    .catch(err => console.log(err))
  },[])

  let deleteLang = (id) => {
    axios.delete(base_url + "/languages/" + id,{
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then((response) => {
      let langsAfterRemove = languages.filter(lang => lang.id != id)
      let toolList = langsAfterRemove.filter(lang => lang.tool)
      let langList = langsAfterRemove.filter(lang => !toolList.includes(lang))
      setLangs(langList)
      setTools(toolList)
      setLanguages(langsAfterRemove)
    })
    .catch(err => console.log(err))
    

  }

  return (
    <div className="flex flex-col w-full items-start gap-4">
      <h2>Languages (Only Languages Name)</h2>
      <div className="flex flex-wrap gap-4">
       
        {langs.map((language, index) => (
          <div className="flex gap-4 border p-2 items-center justify-between" key={index}>
            <div className="">{language.name}</div>
            <button 
              onClick={() => deleteLang(language.id)}
              className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </div>
        ))}

      </div>
      <h2>Languages (Languages with tools)</h2>
      <div className="flex flex-wrap gap-4">
       
        {tools.map((language, index) => (
          <div className="flex gap-4 border p-2 items-center justify-between" key={index}>
            <div className="">{language.name}</div>
            <button 
              onClick={() => deleteLang(language.id)}
              className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </div>
        ))}

      </div>

      <Link
        to={"./add"}
        type="submit"
        className="flex bg-green-600 text-white py-2 px-8 rounded-md mt-4 self-start justify-start items-center"
      >
        Add Language
      </Link>
    </div>
  );
}

export default AdminLanguages;
