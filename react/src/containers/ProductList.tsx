//this is parent and logic part will be in this 

import { getProducts } from "../services/ProductServices";
import type { ProductType } from "../types";
import Product from "../components/Product";
import { use, useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { useNavigate } from "react-router";
 

function ProductList() {
  const [search,setSearch] =useState("");
  const plist = useProducts();

  const navigate = useNavigate();


  return (

    <div className="grid grid-cols-4 gap-4">
      <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)}  />
      {plist.map((item) => (
        <Product
          key={item.productId}
          pdata={item}
          btnClick={() => {
            console.log("add item")
            navigate("/cart");
          }}
          

        />
      ))}
      {/* removed incorrect second Product that passed the whole plist array */}

      {/* usually child conatins logic */}
    </div>
  );
}
export default ProductList;




