
import React from "react";
import "./ProductSection.css";

const products = [
  {
    id: 1,
    name: "Adjustable Bench – FID3 – With Removable Foot Catch",
    price: "₹27,990",
    originalPrice: "₹37,319",
    gstPrice: "₹23,720",
    stock: true,
    discount: "-25%",
    isNew: true,
    image: "image1_url", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Wheel Set for Vertical Plate Tree L72",
    price: "₹4,248",
    originalPrice: "₹4,248",
    gstPrice: "₹3,600",
    stock: true,
    discount: null,
    isNew: false,
    image: "image2_url",
  },
  {
    id: 3,
    name: "Adjustable Aluminium Jump Rope – Contour Handle",
    price: "₹810",
    originalPrice: "₹1,157",
    gstPrice: "₹686",
    stock: true,
    discount: "-30%",
    isNew: true,
    image: "image3_url",
  },
  {
    id: 4,
    name: "Adjustable Aluminium Jump Rope – Self Lock – Silver",
    price: "₹960",
    originalPrice: "₹1,374",
    gstPrice: "₹814",
    stock: true,
    discount: "-30%",
    isNew: false,
    image: "image4_url",
  },
];

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="breadcrumb">
        <a href="#home">Home</a> / <a href="#products">Products</a>
      </div>
      <h2 className="section-title">Products</h2>
      <div className="product-grid">


        {products.map((product) => (
          <div key={product.id} className="product-card">

            
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.discount && <span className="product-discount">{product.discount}</span>}
              {product.isNew && <span className="product-new">NEW</span>}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-pricing">
                <span className="original-price">{product.originalPrice}</span>
                <span className="current-price">{product.price}</span>
                <div className="gst-price">18% Ex GST Price: <strong>{product.gstPrice}</strong></div>
              </div>
              <div className={`stock-status ${product.stock ? "in-stock" : "out-of-stock"}`}>
                {product.stock ? "✔ In stock" : "✖ Out of stock"}
              </div>
              <button className="add-to-basket">ADD TO BASKET</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
