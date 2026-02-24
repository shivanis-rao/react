//this is parent and logic part will be in this 

// import { getProducts } from "../services/ProductServices";
// import type { ProductType } from "../types";
import Product from "../components/Product";
import { useEffect, useMemo, useState } from "react";
import useProducts from "../hooks/useProducts";
import { useNavigate, useSearchParams } from "react-router";
 

function ProductList() {
 
  const [search,setSearch] =useState("");
  const [queryParams,setQueryParams] = useSearchParams();
  useEffect(()=>{
    if(queryParams.has("q")){
      setSearch(queryParams.get("q") ||"");
    }
  },[queryParams]);
  const plist = useProducts();
   const filterList = useMemo(
    ()=>
      plist.filter(i=>
        i.productName.toLowerCase().startsWith(search.trim().toLowerCase()),
      ),
    [search,plist]
  );


  const navigate = useNavigate();


  return (

    <div className="grid grid-cols-4 gap-4">
      <input type="search" value={search} 
      onChange={(e)=>{
        // setSearch(e.target.value);
        setQueryParams({q:e.target.value});

      }}  />
      {filterList.map((item) => (
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




