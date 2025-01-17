import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  const loginAction = async (e) => {
    e.preventDefault();
    await auth.loginAction(username,password);
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form className="border-2 border-blue-500 min-h-[300px] p-8 flex flex-col gap-4 justify-center rounded">
        <div className="flex flex-col w-[300px] gap-2">
          <label htmlFor="username">Username</label>
          <input
            className="border-2 border-blue-500 rounded h-10 p-2"
            type="text"
            placeholder="username"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-[300px] gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="border-2 border-blue-500 rounded h-10 p-2"
            type="password"
            placeholder="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button 
          onClick={loginAction}
          className="bg-blue-500 py-2 rounded text-white hover:scale-105 transition-all">
            Login
        </button>
      </form>
    </div>
  );
}

export default Login;
