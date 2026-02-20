import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
type Props={
    // onThemeChange:(theme:string)=>void;
}
function ThemeSwitch({}:Props){
    const {theme,toggleTheme} = useTheme();
    return(
        <button onClick={toggleTheme}>
            {theme === "light"?"dark":"light"}
        </button>
    );

}
export default ThemeSwitch;