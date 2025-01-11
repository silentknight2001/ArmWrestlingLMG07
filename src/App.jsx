import Navbar from  "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css"
import Slider from "./components/Slider/Slider";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ContactUs from "./components/ContactUs/ContactUs";
import FeaturedCategories from "./components/FeaturedCategories/FeaturedCategories";
import Footer from "./components/Footer/Footer";
import ProductSection from "./components/product/Productsection";

function App() {
  return (
    <>
  
      <Navbar/>
      <Slider/>
      <Home/>
      <FeaturedCategories/>
      <ProductSection/>
      <ProductCategories/>
      <ContactUs/>
      <Footer/>
    
 
    </>
  );
}

export default App;
