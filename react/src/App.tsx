import Demo from "./Demo";
import Checkout from "./containers/Checkout";
import ProductList from "./containers/ProductList";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitch from "./components/ThemeSwitch";
import { useState } from "react";
import { CurrencyProvider } from "./context/CurrencyContext";
import Currency from "./components/Currency";
function App() {
  // const [theme,setTheme] = useState("light");
  return (
    <div>
      {/* <Demo/> */}
      <ThemeProvider>
        <CurrencyProvider>
          <Currency/>
          <ThemeSwitch/>
          <Checkout />
          <ProductList />
        </CurrencyProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
