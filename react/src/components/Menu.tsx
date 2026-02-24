import { Link } from "react-router";

function Menu(){
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/products">Products</Link>     {/* page reload because anchorag whenever we navigate in the website it will rload and hen 
                                                              get the data to avoid that we used Link*/}

            </li>
            <li>
                <Link to="/checkout">Checkout</Link>
            </li>
                <li>
                <Link to="/details">Details</Link>
            </li>
            {/* <li><Link to="/login">Login</Link></li> */}
            
        </ul>
    )
}
export default Menu;