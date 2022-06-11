import Intro from "./components/intro/Intro.jsx";
import About from "./components/about/About.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context.js";
import { useContext } from "react";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return ( 
  <div 
    style= {{ 
      backgroundColor:darkMode ? "#222" : "white" ,
      color: darkMode && "white"
      }}
      >
    <Toggle />
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>
  )
};

export default App;