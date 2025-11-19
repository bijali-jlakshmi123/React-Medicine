import React from 'react';
import './ProductGrid.css';
import { Check } from 'lucide-react'; // Using lucide-react for the checkmark icon

// Mock data based on Screenshot (112).jpg and Screenshot (113).jpg
const products = [
  {
    name: "SIBO Breath Test (Glucose)",
    image: "https://placehold.co/200x120/e0eaf3/002b66?text=Kit+Image",
    price: "£299.00",
    oldPrice: null,
    features: ["36 Hour Result", "Detailed Report"]
  },
  {
    name: "SIBO + IMO Breath Test (Glucose)",
    image: "https://placehold.co/200x120/e0eaf3/002b66?text=Kit+Image",
    price: "£299.00",
    oldPrice: null,
    features: ["36 Hour Result", "Detailed Report"]
  },
  {
    name: "SIBO + IMO Breath Test (Lactulose)",
    image: "https://placehold.co/200x120/e0eaf3/002b66?text=Kit+Image",
    price: "£249.00",
    oldPrice: "£299.00", // Discounted price
    features: ["36 Hour Result", "Detailed Report"]
  },
  {
    name: "IMO Breath Test (Glucose)",
    image: "https://placehold.co/200x120/e0eaf3/002b66?text=Kit+Image",
    price: "£199.00",
    oldPrice: "£299.00",
    features: ["36 Hour Result", "Detailed Report"]
  },
  {
    name: "IMO Breath Test (Lactulose)",
    image: "https://placehold.co/200x120/e0eaf3/002b66?text=Kit+Image",
    price: "£199.00",
    oldPrice: "£299.00",
    features: ["36 Hour Result", "Detailed Report"]
  },
  {
    name: "SIBO Breath Test (Lactulose)",
    image: "https://placehold.co/200x120/e0eaf3/002b66?text=Kit+Image",
    price: "£199.00",
    oldPrice: "£299.00",
    features: ["36 Hour Result", "Detailed Report"]
  },
  {
    name: "Lactose Intolerance Breath Test",
    image: "https://placehold.co/200x120/e0eaf3/002b66?text=Kit+Image",
    price: "£225.00",
    oldPrice: "£249.00", // Adjusted from screenshot (113) for consistency
    features: ["36 Hour Result", "Detailed Report"]
  },
  {
    name: "H. pylori Breath Test",
    image: "https://placehold.co/200x120/e0eaf3/002b66?text=Kit+Image",
    price: "£125.00",
    oldPrice: "£249.00",
    features: ["3 - 7 Days Result", "Detailed Report"]
  }
];

function ProductCard({ product }) {
  // Logic to handle different feature labels (e.g., 3-7 Days Result)
  const isQuickResult = product.features.includes("36 Hour Result");

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      
      <h3 className="product-name">{product.name}</h3>

      {/* Features/Badges */}
      <div className="product-features">
        {product.features.map((feature, index) => (
          <span key={index} className={`feature-item ${isQuickResult ? 'quick-result' : ''}`}>
            <Check size={16} className="feature-icon" />
            {feature}
          </span>
        ))}
      </div>
      
      {/* Price Block */}
      <div className="price-block">
        {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
        <span className="current-price">{product.price}</span>
      </div>

      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}