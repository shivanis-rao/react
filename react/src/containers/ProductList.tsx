//this is parent and logic part will be in this 

import { getProducts } from "../services/ProductServices";
import type { ProductType } from "../types";
import Product from "../components/Product";
import { useEffect, useState } from "react";
 

function ProductList() {
   const [plist,setPlist] = useState<ProductType[]>([]);


 const getData = async () => {
    try {
        const data = await getProducts();
        console.log("success",data);
            // plist.pusha(...data);
            // console.log("plist",plist);
            setPlist(data); 
    }catch(e){
        console.log("error",e);
    }
 };

 useEffect(()=>{
  getData();
 },[]);


  return (

    <div>
      {plist.map((item) => (
        <Product
          key={item.productId}
          pdata={item}
          btnClick={() => console.log("add item")}
        />
      ))}
      {/* removed incorrect second Product that passed the whole plist array */}

      {/* usually child conatins logic */}
    </div>
  );
}
export default ProductList;




