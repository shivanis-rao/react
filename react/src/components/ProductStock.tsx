type Props ={stocks:number;click:()=>void};

function ProductStock({stocks,click}:Props){
    if(stocks>0){
        return <button onClick={()=>click()}>Add to cart</button>
    }
    return <p>Out of stock</p>
}
export default ProductStock