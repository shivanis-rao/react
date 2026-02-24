import { useState, useEffect, useCallback } from "react";
import { getProducts } from "../services/ProductServices";
import type { ProductType } from "../types";

export default function useProducts() {
     const [plist,setPlist] = useState<ProductType[]>([]);


 const getData = useCallback(async () => {
    try {
        const {data} = await getProducts();
        console.log("success",data);
            // plist.pusha(...data);
            // console.log("plist",plist);
            setPlist(data); 
    }catch(e){
        console.log("error",e);
    }
 },[]);

 useEffect(()=>{
  getData();
 },[]);
 return plist;
}