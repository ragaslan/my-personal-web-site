import React from "react";
import { Link } from "react-router";

function AdminLanguages() {
  const languages = [
    {
      id: 0,
      name: "Javascript",
    },
    {
      id: 1,
      name: "Java",
    },
    {
      id: 2,
      name: "Python",
    },
    {
      id: 3,
      name: "C/C++",
    },
    {
      id: 4,
      name: "Assembly 80x86",
    },
    {
      id: 5,
      name: "HTML/CSS",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start">
      <div className="flex flex-wrap gap-4">
        {languages.map((language, index) => (
          <div className="flex gap-4 border p-2 items-center justify-between">
            <div className="">{language.name}</div>
            <button className="bg-red-500 text-white p-1 rounded">
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
