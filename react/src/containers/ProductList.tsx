//this is parent and logic part will be in this 

import { getProducts } from "../services/ProductServices";
import type { ProductType } from "../types";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
 

function ProductList() {
  const plist = useProducts();


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




