import{ createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
export const ThemeContext = createContext({
    theme:"light",
    setTheme:(t:string)=>{}
});
export function ThemeProvider({children}:PropsWithChildren){
    const [theme,setTheme] = useState("light");
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
export function useTheme(){
    const { theme,setTheme}=useContext(ThemeContext);
    const color = theme === "light" ? "#333" : "#fff";
    const toggleTheme =()=>{
        const newTheme=(theme === "light" ? "dark" : "light");
        setTheme(newTheme);
        
    };
    useEffect(()=>{
        document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
    },[theme]);
    return {theme,color,toggleTheme};
}
