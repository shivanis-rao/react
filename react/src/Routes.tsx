import { Route,Routes } from "react-router";
import ProductList from "./containers/ProductList";
import Demo from "./Demo";
import Checkout from "./containers/Checkout";


function AppRouter(){
    return (
        
        <Routes>
            <Route path = "/" element={<Demo/>   }/>
             <Route path = "/products" element={<ProductList/>   }/>
              <Route path = "/checkout" element={<Checkout/>   }/>
        </Routes>
       
    )
}

export default AppRouter;