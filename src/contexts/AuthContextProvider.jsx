import axios from "axios";
import React, { createContext, useContext, useState,useEffect, useMemo} from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [token,setToken] = useState(localStorage.getItem("token"));
  let navigate = useNavigate();
  
  const loginAction = (username, password) => {
    axios
      .post(
        import.meta.env.VITE_API_URL + "/auth/login",
        {
          "username" : username,
          "password" : password
        },
      )
      .then((response) => {
        let responseData = response.data
        let token = responseData.data
        setToken(token)
        localStorage.setItem("token",token)
        //console.log(responseData)
        navigate("/admin");
      })
      .catch((err) => {
        // todo : show error alerts in app
        console.log(err.response)
      });
  };

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null);
    navigate("/login");
  };

  useEffect(() => {
    if(token){
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token",token);
    }else{
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  },[token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      loginAction,
      logout
    }),
    [token]
  );

  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
