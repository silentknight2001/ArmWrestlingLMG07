import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ContactUs from "./components/ContactUs/ContactUs";


import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      
      <ProductCategories />
      <ContactUs />
    </>
  );
}

export default App;
