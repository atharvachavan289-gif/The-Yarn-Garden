// src/components/ProductDetail/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../Shopping/Shopping.jsx"; // Importing products data
import {useCart} from "../../components/Context/CartContext.jsx";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams(); // Gets the ID from the URL (e.g., "1")
  
  // "Destructuring" the hook , this line opens the context and takes only "addToCart" tool.
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1); // Track how many they want to buy

  // Find the specific product that matches the ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-20">Product not found!</div>;
  }

  const handleAddToCart = () => {
    // We pass the product and the selected quantity
    addToCart({ ...product, quantity:quantity });
    alert(`${quantity} ${product.name}(s) added to your cart! 🧶`);
  };
  
  return (
    <main className="bg-[#F5F2ED] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Back link */}
      <Link to="/shopping" className="inline-flex items-center text-stone-500 hover:text-amber-800 transition-colors mb-8 group font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
         Back to Collection
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Image */}
        <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-sm border border-stone-200">
          <img 
            src={`/${product.image}`}
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-amber-800 text-white px-6 py-2 rounded-full shadow-lg text-xs font-bold uppercase tracking-widest">
              Handcrafted with Love
            </div>
          </div>

        {/* Right: Details */}
        <div className="flex flex-col pt-4">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-[0.2em] mb-3">
            {product.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-3xl font-medium text-stone-900 mb-8">
              {product.price}
            </p>
            
            <div className="h-px w-full bg-stone-200 mb-8"></div>
            
            <p className="text-stone-600 leading-relaxed mb-10 text-lg">
              {product.description}
            </p>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center border border-stone-300 rounded-full bg-white shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 text-stone-400 hover:text-amber-800 transition-colors text-xl"
                >–</button>
                <span className="px-4 py-3 font-semibold text-stone-800 w-12 text-center select-none">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 text-stone-400 hover:text-amber-800 transition-colors text-xl"
                >+</button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-stone-800 text-white hover:bg-amber-900 px-10 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-xl active:scale-95"
              >
                Add to Cart
              </button>
            </div>

            {/* Shop Gurantee Section */}
            <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-3 text-sm text-stone-500">
                <span className="text-xl">🌿</span>
                <span>Eco-Friendly Cotton Yarn</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-500">
                <span className="text-xl">✨</span>
                <span>Everlasting Beauty</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-500">
                <span className="text-xl">🧶</span>
                <span>Hand-stitched in Navi Mumbai</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-500">
                <span className="text-xl">🚚</span>
                <span>Plastic-Free Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;

        