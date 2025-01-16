import React from "react";
import img1 from "../../assets/img/img_1.jpeg"
import img2 from "../../assets/img/img_2.jpeg"
import img3 from "../../assets/img/img_3.jpeg"
import img4 from "../../assets/img/img_4.jpeg"

import "./FeaturedCategories.css";

const FeaturedCategories = () => {
  const categories = [
    { id: 1, name: "Dumbbells", placeholder: img1},
    { id: 2, name: "Barbells", placeholder: img2 },
    { id: 3, name: "Kettlebells", placeholder: img3},
    { id: 4, name: "Plates", placeholder: img4},
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
