import React from "react";
import { Link } from "react-router";

function ProjectIntro({ data }) {



  return (
    <Link to={`/projects/${data.id}`} className="flex flex-col gap-2 border-2 p-2 py-4 border-blue-400 rounded cursor-pointer hover:scale-105 hover:bg-blue-400 hover:text-white transition-all">
      <a className="font-bold text-xl">{data.name}</a>
      <p>{data.introText}</p>
    </Link>
  );
}

export default ProjectIntro;
