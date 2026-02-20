import { useState, useRef, type SyntheticEvent, useEffect } from "react";
import Cards from "../components/Cards";
function Checkout(){
    const [name,setname] =useState("");
    const emailRef = useRef<HTMLInputElement>(null);
    const saveData =(ev:SyntheticEvent)=>{
        ev.preventDefault(); //cancels the default behaviour of the even meaning it wont reload again and again

        console.log('form submission logic herre ')// ev will get whatever i passed in e in onSubmit
        console.log("form submission logic here ",name,emailRef.current?.value)
    };
    useEffect(()=>{
        if(emailRef.current){
            emailRef.current.focus();
        }
    },[emailRef]);
    return(
       
        <Cards>
      
            <h1>Checkout</h1>
            <form onSubmit={(e)=> saveData(e)}>
                 
                <input type="text" placeholder="Name" onChange={(e)=>setname(e.target.value)} />
                {/* Uncontrolled :ref  */}
                <input type="email" placeholder="email" ref={emailRef}/>
                <button type="submit">Submit</button>
            </form>
        
        </Cards>
        
    )
}
export default Checkout;