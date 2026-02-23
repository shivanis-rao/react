import { useEffect } from "react";
import { useParams } from "react-router";
function ProductDetail(){
    const params = useParams();
    useEffect(() =>{

    },[params.pid]);
    return (
        <div>
            <h1>Product Details</h1>
            <h1>PID: {params.pid}</h1>
        </div>
    );

}
export default ProductDetail;

