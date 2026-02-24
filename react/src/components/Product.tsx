import { Link, useNavigate } from "react-router";
import { useCurrency } from "../context/CurrencyContext";
import type { ProductType } from "../types";
import Cards from "./Cards";
import { useSelector } from "react-redux";

import type { RootState } from "../store" 
type Props ={
    
    pdata?:ProductType;// ? is for making the data optional 
    //parent to child communication
    btnClick:()=> void;
}


// function ProductStock({stock,click}:{stock:number;click:()=>void}){
//     if(stock>0){
//         return <button onClick={()=>click()}>Add to cart</button>
//     }
//     return 

// }
function Product({pdata:data,btnClick}:Props){
    // const { currency}= useCurrency();
    const currency = useSelector((state:RootState)=> state.currency)
    //const data = props.pdata we did aliasing
   const navigate = useNavigate();
    // return early if no data to avoid "possibly undefined" errors
    if (!data) return null;

    //we can use seperate function for conditional render 
    const renderStock=()=>{
        if(data.productStock>0){
            return <button onClick={()=>btnClick()}>Add to cart</button>
        }
        return null;
    }
     
    return(
       <Cards>
        <Link to={"/details/" + data.productId}>
         <img src={data.productImage} alt={data.productName} />
         </Link>
           
            <h2>{data.productName}</h2>
            <p>{data.productPrice} {currency}</p>
            
            {renderStock()} //this or this 
            
            //we just render
        </Cards>
    )
}
export default Product

//created a seperae component make it {renderstock } component 
