
import React from "react";
import "./ProductCategories.css";

const ProductCategories = () => {
  return (
    <div className="product-categories">
      <div className="categories-section">
        <h3>PRODUCT CATEGORIES</h3>
        <ul>
          <li>New Gears</li>
          <li>Barbells</li>
          <li>Plates</li>
          <li>Dumbbells</li>
          <li>Racks</li>
          <li>Platforms & Mats</li>
          <li>Benches</li>
          <li>Equipment Packages</li>
        </ul>
      </div>
      <div className="categories-section">
        <h3>PRODUCT CATEGORIES</h3>
        <ul>
          <li>Offers</li>
          <li>CrossFit Equipment</li>
          <li>Rigs</li>
          <li>Kettlebells</li>
          <li>Accessories</li>
          <li>Apparel</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategories;
