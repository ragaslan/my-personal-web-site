import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { useNavigate } from "react-router";

function AddLanguage() {
  const [language, setLanguage] = useState("");
  const [isTool,setIsTool] = useState(false);

  const { token } = useAuth();
  const navigate = useNavigate();

  let handleChange = (e) => {
    setLanguage(e.target.value);
  };

  let handleSelect = (e) => {
    let choice = Boolean(e.target.value);
    if(choice){
      setIsTool(true)
    }else{
      setIsTool(false)
    }
  }

  let createLanguage = (e) => {
    e.preventDefault();
    axios
      .post(
        import.meta.env.VITE_API_URL + "/languages/",
        {
          name: language,
          isTool: isTool,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => navigate("/admin/languages/"))
      .catch((err) => console.log(err));
    //console.log(language);
  };

  return (
    <div>
      <form>
        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="new-language">Add New Language</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="new-language"
            onChange={(e) => handleChange(e)}
            value={language}
            id="new-language"
          />
        </div>
        <div className="input-group flex flex-col max-w-[400px] gap-2 mt-2">
          <label htmlFor="new-language">Type Choice</label>
          <select 

            className="border-2 border-gray-600 h-10 rounded-md p-2"
            onChange={handleSelect}
          >
            <optgroup>
              <option value={false}>Language</option>
              <option value={true}>Tool</option>
            </optgroup>
          </select>
        </div>
        <button
          onClick={createLanguage}
          className="bg-green-600 text-white px-6 py-2 mt-4 rounded"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddLanguage;
