import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ContactUs from "./components/ContactUs/ContactUs";
import FeaturedCategories from "./components/FeaturedCategories/FeaturedCategories";


import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <FeaturedCategories />

      <ProductCategories />
      <ContactUs />
    </>
  );
}

export default App;
