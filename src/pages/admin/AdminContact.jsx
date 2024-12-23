import React from "react";

function AdminContact() {
  return (
    <div className="">
      <form className="flex flex-col gap-4">
        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="email"
            id="email"
          />
        </div>

        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="github">Github</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="github"
            id="github"
          />
        </div>
        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="linkedin"
            id="linkedin"
          />
        </div>
        <div className="input-group flex flex-col max-w-[400px] gap-2">
          <label htmlFor="youtube">Youtube</label>
          <input
            className="border-2 border-gray-600 h-10 rounded-md p-2"
            type="text"
            name="youtube"
            id="youtube"
          />
        </div>
        <button
          type="submit"
          className="flex bg-blue-400 text-white py-2 px-8 rounded-md mt-4 self-start justify-start items-center"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AdminContact;
