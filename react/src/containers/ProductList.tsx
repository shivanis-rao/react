//this is parent and logic part will be in this 

// import { getProducts } from "../services/ProductServices";
// import type { ProductType } from "../types";
import Product from "../components/Product";
import { useEffect, useMemo, useState } from "react";
import useProducts from "../hooks/useProducts";
import { useNavigate, useSearchParams } from "react-router";
import { addItem } from "../store/slices/CartSlice";
 

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


  function dispatch(arg0: { payload: any; type: "cart/addItem"; }) {
    throw new Error("Function not implemented.");
  }

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
            dispatch(addItem(item));
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




