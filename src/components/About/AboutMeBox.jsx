import React, { useEffect, useState } from "react";
import MyImage from "../../assets/ben.jpeg";
import { useGeneralSettings } from "../../contexts/GeneralSettingsContextProvider";
import axios from "axios";
function AboutMeBox() {
  
  const {generalSettings} = useGeneralSettings();
  const [languages,setLanguages] = useState([]);
  const [langs,setLangs] = useState([]);
  const [tools,setTools] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "/languages/")
    .then(res => {
      let allLangs = res.data;
      let mytools = allLangs.filter(lang => lang.tool)
      let mylangs = allLangs.filter(lang => !mytools.includes(lang))
      setLanguages(allLangs);
      setTools(mytools)
      setLangs(mylangs)
    })
  },[]);

  // const languages = [
  //   "Javascript",
  //   "Java",
  //   "Python",
  //   "C/C++",
  //   "Assembly 80x86",
  //   "HTML/CSS",
  // ];

  // const tools_and_libs = [
  //   "JS : React,Express",
  //   "Robotic : ROS2,Gazebo",
  //   "Java : Swing,Spring",
  //   "CSS : Tailwind",
  //   "ORM : Hibernate,Prisma",
  //   "Database : Postgresql,Mysql",
  //   "Others:  Git,Trello,Figma",
  // ];
  return (
    <div className="flex flex-col gap-6 text-gray-600 p-0">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="border-2 rounded-full border-blue-400">
          <img
            className="rounded-full"
            src={MyImage}
            alt="Ramazan Ağaslan"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-lg text-gray-700 font-medium">Ramazan Ağaslan</span>
          <span className="text-sm text-gray-900 font-normal">Software Engineer</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-center md:text-start">
        <h2 className="text-2xl text-blue-400">Ben Kimim ?</h2>
        <p className="about-me-text text-md md:text-lg">
          {generalSettings.whoami}
        </p>
      </div>

      <div className="flex flex-col mt-4 ">
        <h2 className="text-2xl text-blue-400 text-center md:text-start">Kullandığım Yazılım Dilleri</h2>
        <div className="flex gap-4 py-2 mt-2 flex-wrap justify-center md:justify-start">
          {langs.map((lang,index) => (
            <a className="text-md md:text-lg" key={index}>{lang.name}</a>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <h2 className="text-2xl text-blue-400 text-center md:text-start">Araçlar ve Kütüphaneler</h2>
        <div className="flex flex-col gap-2 py-2 mt-2 items-center md:items-start">
          {tools.map((item,index) => (
            <a className="text-md md:text-lg" key={index}>{item.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMeBox;
