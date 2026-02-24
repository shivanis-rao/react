import { Route,Routes } from "react-router";
// import ProductList from "./containers/ProductList";
import Demo from "./Demo";
import Checkout from "./containers/Checkout";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoutes";
import ProductDetail from "./containers/ProductDetails";
import { lazy,Suspense } from "react";
import Login from "./containers/Login";

const ProductList = lazy(()=> import("./containers/ProductList"));

function AppRouter(){
    return (
        
        <Routes>
            <Route path = "/" element={<Demo/>   }/>
                <Route path = "/login" element={<Login/>   }/>
             <Route path = "/products" element={
                <Suspense fallback={<h1>Loading...</h1>}><ProductList/>  </Suspense> }/>
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