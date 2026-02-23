import { Route,Routes } from "react-router";
import ProductList from "./containers/ProductList";
import Demo from "./Demo";
import Checkout from "./containers/Checkout";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoutes";
import ProductDetail from "./containers/ProductDetails";


function AppRouter(){
    return (
        
        <Routes>
            <Route path = "/" element={<Demo/>   }/>
             <Route path = "/products" element={<ProductList/>   }/>
              <Route path = "/checkout" 
                     element={
                     <PrivateRoute>
                     <Checkout/>   
                     </PrivateRoute>
                     }
                     />
              <Route path ="*" element={<ErrorPage/>   }/>
              <Route path ="/details/:pid" element ={<ProductDetail/>}/>
        </Routes>
       
    )
}

export default AppRouter;