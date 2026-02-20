import { useContext, type PropsWithChildren } from "react";
import '../index.css';
import { ThemeContext, useTheme } from "../context/ThemeContext";
function Cards({children}:PropsWithChildren){
    const {color} = useTheme();
    return <div className="card" style={{color}}>{children}</div>;
}
export default Cards;