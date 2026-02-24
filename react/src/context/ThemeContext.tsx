import{ createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
export const ThemeContext = createContext({
    theme:"light",
    setTheme:(_t:string)=>{}
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
        localStorage.setItem("theme",newTheme);
        setTheme(newTheme);
        
    };
    useEffect(()=>{
        if(localStorage.getItem("theme")){
            setTheme(localStorage.getItem("theme")as string);
        }
    },[]);
    const bgColor = theme === "light" ? "#fff" : "#333";
    useEffect(()=>{
        document.body.style.backgroundColor = bgColor;
    },[bgColor]);
    return {theme,bgColor,color,toggleTheme};
}
