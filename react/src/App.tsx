// import Demo from "./Demo";
// import Checkout from "./containers/Checkout";
// import ProductList from "./containers/ProductList";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitch from "./components/ThemeSwitch";
// import { useState } from "react";
import { CurrencyProvider } from "./context/CurrencyContext";
import Currency from "./components/Currency";
import AppRouter from "./Routes";

import { BrowserRouter } from "react-router";
import Menu from "./components/Menu";
function App() {
  // const [theme,setTheme] = useState("light");
  return (
    <div>
      {/* <Demo/> */}
      <BrowserRouter>
      <CurrencyProvider>
         <ThemeProvider>
          
          <Menu/>
          
          <Currency/>
          <ThemeSwitch/>
          <AppRouter/>
          {/* <Checkout /> */}
          </ThemeProvider>
        </CurrencyProvider>

     
      </BrowserRouter>
    </div>
  );
}

export default App;
