import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: 'Bags', slug: 'Bags', icon: '👜', bgColor: 'bg-stone-200' },
  { name: 'Single Flower', slug: 'SingleFlower', icon: '🌷', bgColor: 'bg-amber-100' }, // Match SingleFlower
  { name: 'Bouquets', slug: 'Bouquets', icon: '💐', bgColor: 'bg-[#E5E0D8]' },
  { name: 'Keychains', slug: 'Keychains', icon: '🔑', bgColor: 'bg-stone-300' }
];

export default function Home() {
    return (
        <main className="bg-[#F5F2ED]">
            {/* Hero section */}
    <div 
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('CoverPage4.jpg')" }} 
    >
      {/* Optional: A subtle overlay to make text readable if the background is too bright */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>

      {/* The Content locked in the center */}
      <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-4 tracking-wide">
          Handcrafted with Love.
        </h1>
        <p className="text-lg md:text-xl text-stone-700 mb-8 font-medium">
          Cozy crochet bouquets, bags, and keychains made just for you.
        </p>
        
        <Link 
            to="/shopping" 
            className="bg-[#C05621] hover:bg-[#9C4221] text-white px-10 py-3 rounded-full text-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-block text-center"
        >
            Shop the Collection
        </Link>
      </div>
    </div>

        {/* Category section */}

    <section className="bg-[#F5F2ED] py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-800 mb-4 italic">Shop by Category</h2>
          <div className="h-1 w-20 bg-amber-800/30 mx-auto rounded-full"></div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={`/shopping?category=${category.slug}`} 
              className="group flex flex-col items-center"
            >
              {/* Image Container */}
              <div className={`w-full aspect-square ${category.bgColor} rounded-3xl overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2`}>
                
                {/* Placeholder for actual product images */}
                <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>

                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300"></div>
                
                {/* "Shop Now" label that appears on hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-white/90 backdrop-blur-sm text-stone-800 text-[10px] uppercase tracking-widest px-4 py-2 rounded-full font-bold">
                    View All
                  </span>
                </div>
              </div>

              {/* Category Name */}
              <h3 className="mt-6 text-lg font-medium text-stone-700 group-hover:text-amber-800 transition-colors tracking-wide">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );

    </main>
    );
}   