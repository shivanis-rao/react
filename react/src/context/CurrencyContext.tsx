import { createContext, type PropsWithChildren, useState, useContext, use, useEffect } from "react";

export const CurrencyContext = createContext({
    currency:"USD",
    setCurrency:(c:string)=>{}
});
export function CurrencyProvider({children}:PropsWithChildren){
    const [currency,setCurrency] = useState("USD");
    return(
        <CurrencyContext.Provider value={{currency,setCurrency}}>
            {children}
        </CurrencyContext.Provider>
    );
   
}

export function useCurrency(){
    
    const {currency,setCurrency} = useContext(CurrencyContext);

    const update=(code:string)=>{
        localStorage.setItem("currency",code);
        setCurrency(code);
    }

     useEffect(()=>{
        if(localStorage.getItem("currency")){
            setCurrency(localStorage.getItem("currency") as string);
        }
    },[]);
    return {currency,update};
}
