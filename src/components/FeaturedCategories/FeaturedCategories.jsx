

import React from "react";
import "./FeaturedCategories.css";

const FeaturedCategories = () => {
  const categories = [
    { id: 1, name: "Dumbbells", placeholder: "Image 1" },
    { id: 2, name: "Barbells", placeholder: "Image 2" },
    { id: 3, name: "Kettlebells", placeholder: "Image 3" },
    { id: 4, name: "Plates", placeholder: "Image 4" },
  ];

  return (
    <section className="featured-categories">
      <h2>Featured Categories</h2>
      <div className="categories-container">
        {categories.map((category) => (
          <div className="category-item" key={category.id}>
            <div className="image-placeholder">{category.placeholder}</div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
