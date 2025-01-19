import React from "react";
import img1 from "../../assets/img/img_1.jpeg"
import img2 from "../../assets/img/Arm_Tshirt.jpeg"
import img3 from "../../assets/img/Arm_sleeves.jpeg"
import img4 from "../../assets/img/Arm_sweeters.jpeg"

import "./FeaturedCategories.css";

const FeaturedCategories = () => {
  const categories = [
    { id: 1, name: "Arm Table", placeholder: img1},
    { id: 2, name: "Arm Tshirt", placeholder: img2 },
    { id: 3, name: "Arm sleeves", placeholder: img3},
    { id: 4, name: "Arm sweeters", placeholder: img4},
  ];

  return (
    <section className="featured-categories" id="products">
      <h2>Featured Categories</h2>
      <div className="categories-container">
        {categories.map((category) => (
          <div className="category-item" key={category.id}>
            <div className="image-placeholder">
              <img src={category.placeholder} alt={category.name} />
              </div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
