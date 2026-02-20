import Demo from "./Demo";
import Checkout from "./containers/Checkout";
import ProductList from "./containers/ProductList";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitch from "./components/ThemeSwitch";
import { useState } from "react";
function App() {
  // const [theme,setTheme] = useState("light");
  return (
    <div>
      {/* <Demo/> */}
      <ThemeProvider>
        <ThemeSwitch/>
        <Checkout />
        <ProductList />
      </ThemeProvider>
    </div>
  );
}

export default App;
