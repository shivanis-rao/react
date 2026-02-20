import type { ProductType } from "../types";
import Cards from "./Cards";
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
    //const data = props.pdata we did aliasing

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
            <img src={data.productImage} alt={data.productName} />
            <h2>{data.productName}</h2>
            <p>{data.productPrice}</p>
            {renderStock()} //this or this 
            
            //we just render
        </Cards>
    )
}
export default Product

//created a seperae component make it {renderstock } component 
