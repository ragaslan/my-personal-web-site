import React, { useEffect, useState } from "react";
import { useGeneralSettings } from "../../contexts/GeneralSettingsContextProvider";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContextProvider";

function AdminWhoami() {
  
  const {generalSettings,setGeneralSettings} = useGeneralSettings();
  const {token} = useAuth();
  const [whoamiField,setWhoamiField] = useState('')
  const [isSaved,setIsSaved] = useState(false);

  useEffect(() => {
    setWhoamiField(generalSettings.whoami || "")
  },[generalSettings])


  const handleChange = (e) => {
    setWhoamiField(e.target.value)
  }

  let updateWhoami = (e) => {
    e.preventDefault();
    let newSettings = generalSettings;
    newSettings.whoami = whoamiField;
    axios.post(import.meta.env.VITE_API_URL + '/settings/',
      {...newSettings}
      ,{
      headers : {
        "Authorization" : `Bearer ${token}`,
        "Content-Type" : "application/json"
      }
    })
    .then(() => {
      //setGeneralSettings(newSettings)
      setIsSaved(true);
    })
    .catch(err => console.log(err))
  }

  //const whoami_data = "Merhaba, ben Ramazan. Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Web geliştirme, robotik ve yapay zeka alanında araştırmalar ve çalışmalar yapıyorum. İlgimi çeken konuları derinlemesine öğrenmeyi seviyorum ve bu alanda Türkçe kaynaklar üretmeye çalışıyorum."
  return (
    <div className="flex flex-col items-start">
      <textarea
        className="border-2 border-gray-600 p-2 resize-none w-full min-h-[300px]"
        name="whoami"
        id="whoami"
        value={whoamiField}
        onChange={handleChange}
      >
        {whoamiField}
      </textarea>

      <button
        onClick={updateWhoami}
        className="p-2 bg-blue-400 text-white flex text-center mt-2 cursor-pointer rounded"
      >
        Save
      </button>
      {isSaved ? <a className="text-green-400">successful !</a> : null }
     
    </div>
  );
}

export default AdminWhoami;
