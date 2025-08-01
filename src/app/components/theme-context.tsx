"use client"
import { Theme } from "@radix-ui/themes";
import { createContext, useState } from "react";
 const ThContext=createContext();

export default function ThemeContext ({children}){
   const [isDark,setIsDark]=useState(true);
    return(
        <ThContext.Provider value={{isDark,setIsDark}}>
        <Theme appearance="dark">
            {children}
        </Theme>
        </ThContext.Provider>
    )

}