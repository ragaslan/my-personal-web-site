import { createContext, useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { useAuth } from "./AuthContextProvider";


const GeneralSettingsContext = createContext();


function GeneralSettingsContextProvider({children}){
    const [generalSettings,setGeneralSettings] = useState({});
    const base_url = import.meta.env.VITE_API_URL

    useEffect(() => {
        axios.get(base_url + "/settings/")
        .then(res => {
            setGeneralSettings(res.data)
            console.log("renderr!")
        })
        .catch(err => console.log(err))
    },[]);

    const contextValue = useMemo(
        () => ({
            generalSettings,
            setGeneralSettings
        })
    )

    
    return (
        <GeneralSettingsContext.Provider value={contextValue}>
            {children}
        </GeneralSettingsContext.Provider>
    )

}

export const useGeneralSettings = () => {
    return useContext(GeneralSettingsContext);
}

export default GeneralSettingsContextProvider