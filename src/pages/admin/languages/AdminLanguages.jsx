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
    <div className="">
      <form className="flex flex-col gap-4">
        {languages.map((language,index) => (
          <div className="input-group flex flex-col max-w-[400px] gap-2">
            <label htmlFor={"language-" + index}>{"Language " + index}</label>
            <input
              className="border-2 border-gray-600 h-10 rounded-md p-2"
              type="text"
              name={"language-" + index}
              id={"language-" + index}
              value={language.name}
            />
          </div>
        ))}

        <div className="flex gap-4">
          <Link
            to={"./add"}
            type="submit"
            className="flex bg-green-600 text-white py-2 px-8 rounded-md mt-4 self-start justify-start items-center"
          >
            Dil Ekle
          </Link>

          <button
            type="submit"
            className="flex bg-blue-600 text-white py-2 px-8 rounded-md mt-4 self-start justify-start items-center"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLanguages;
