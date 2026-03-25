import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";

//  Full Product Database
export const products = [
  {
    id: 1,
    name: "Pink Puff Flower Keychain",
    price: "₹149",
    image: "/pink puff flower.jpg",
    category: "Keychains",
    description: "A tiny blush of pink for your keys. Soft to the touch and super cute.",
  },
  {
    id: 2,
    name: "Red Puff Flower Keychain",
    price: "₹149",
    image: "/red puff flower.jpg",
    category: "Keychains",
    description: "Bold and bright. This red puff flower makes your backpack or purse stand out instantly.",
  },
  {
    id: 3,
    name: "Yellow Puff Flower Keychain",
    price: "₹149",
    image: "/yellow puff flower.jpg",
    category: "Keychains",
    description: "Carry a little sunshine with you everywhere. A cheerful yellow accessory for your daily commute.",
  },
  {
    id: 4,
    name: "Daisy Keychain",
    price: "₹169",
    image: "/daisy keychain.jpg",
    category: "Keychains",
    description: "Sweet and simple. A classic white daisy that represents innocence and new beginnings.",
  },
  {
    id: 5,
    name: "Coconut Keychain",
    price: "₹179",
    image: "/Coconut keychain.jpg",
    category: "Keychains",
    description: "Go tropical! A fun, quirky coconut slice to give your bag a beachy vibe.",
  },
  {
    id: 6,
    name: "Sunflower Keychain",
    price: "₹189",
    image: "/sunflower keychain.jpg",
    category: "Keychains",
    description: "Brighten your day! A mini sunflower with a dark center and golden petals.",
  },
  {
    id: 7,
    name: "Red Rose Flower",
    price: "₹199",
    image: "/red rose.jpg",
    category: "SingleFlower",
    description: "The classic symbol of romance, crafted to last forever. A perfect single stem to show someone you care.",
  },
  {
    id: 8,
    name: "Red Rose Keychain",
    price: "₹199",
    image: "/red rose keychain.jpg",
    category: "Keychains",
    description: "A miniature romantic classic. Intricately stitched to look like a real rosebud.",
  },
  {
    id: 9,
    name: "Rose Keychain",
    price: "₹199",
    image: "/rose keychain.jpg",
    category: "Keychains",
    description: "Elegant and durable. A subtle floral accent that adds a touch of nature to your keyring.",
  },
  {
    id: 10,
    name: "Deep Red Rose Flower",
    price: "₹219",
    image: "/deep red rose.jpg",
    category: "SingleFlower",
    description: "A rich, velvety crimson rose for a more dramatic and passionate look. Stays beautiful without water.",
  },
  {
    id: 11,
    name: "Yellow Rose Flower",
    price: "₹219",
    image: "/yellow rose.jpg",
    category: "SingleFlower",
    description: "A bright pop of sunshine! Yellow roses symbolize friendship and joy, making this a great gift for a best friend.",
  },
  {
    id: 12,
    name: "Tulip Flower",
    price: "₹229",
    image: "/tulip.jpg",
    category: "SingleFlower",
    description: "Capture the essence of spring with this vibrant tulip. Available in bright colors to cheer up your desk or room.",
  },
  {
    id: 13,
    name: "Lily Flower",
    price: "₹249",
    image: "/lily flower.jpg",
    category: "SingleFlower",
    description: "An elegant, everlasting lily. With its delicate trumpet shape, it adds a touch of sophistication to any vase.",
  },
  {
    id: 14,
    name: "Carnation Flower",
    price: "₹249",
    image: "/carnation flower.jpg",
    category: "SingleFlower",
    description: "Featuring intricate ruffled petals, this crochet carnation offers wonderful texture and charm.",
  },
  {
    id: 15,
    name: "Single Rose Bouquet",
    price: "₹299",
    image: "/single rose.jpg",
    category: "Bouquets",
    description: "Minimalist elegance. A single premium rose wrapped beautifully, ready to be gifted for a special occasion.",
  },
  {
    id: 16,
    name: "Single Tulip Bouquet",
    price: "₹299",
    image: "/single tulip.jpg",
    category: "Bouquets",
    description: "A sweet and understated gesture. This wrapped tulip is perfect for Mother's Day or a thoughtful surprise.",
  },
  {
    id: 17,
    name: "2 Flower Bouquet (Sunflower, Tulip)",
    price: "₹499",
    image: "/double flower bouquet.jpg",
    category: "Bouquets",
    description: "A simple yet striking duo. The sunny yellow and vibrant tulip colors complement each other perfectly.",
  },
  {
    id: 18,
    name: "3 Puff Flower Bouquet",
    price: "₹599",
    image: "/3 flower bouquet.jpg",
    category: "Bouquets",
    description: "Soft, chunky, and adorable. These puff flowers are like little clouds on a stem, bringing a cozy vibe to any space.",
  },
  {
    id: 19,
    name: "3 Flower Bouquet (Sunflower, Daisy, Tulip)",
    price: "₹699",
    image: "/three flower bouquet.jpg",
    category: "Bouquets",
    description: "The perfect trio. Combines the boldness of a sunflower, the innocence of a daisy, and the grace of a tulip.",
  },
  {
    id: 20,
    name: "Crochet Mini Bag",
    price: "₹899",
    image: "/mini bag.jpg",
    category: "Bags",
    description: "A compact and stylish carry-all for your essentials. Hand-stitched with durable cotton yarn, perfect for a casual day out.",
  },
  {
    id: 21,
    name: "6 Puff Flower Bouquet",
    price: "₹999",
    image: "/6 flower bouquet.jpg",
    category: "Bouquets",
    description: "A delightful half-dozen. Perfectly sized for a small vase or as a charming hand-held gift.",
  },
  {
    id: 22,
    name: "9 Puff Flower Bouquet",
    price: "₹1,299",
    image: "/9 flower bouquet (2).jpg",
    category: "Bouquets",
    description: "Maximum cuteness! A large bundle of nine marshmallow-soft puff flowers in pastel shades.",
  },
  {
    id: 23,
    name: "9 Flower Bouquet",
    price: "₹1,499",
    image: "/9 flower bouquet.jpg",
    category: "Bouquets",
    description: "Our grandest arrangement. A lush, full bouquet of 9 handcrafted blooms that makes a stunning centerpiece.",
  },
];

const categories = ["All", "Bags", "SingleFlower", "Bouquets", "Keychains"];

function Shopping() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    
    //  Initialize Cart Hook
    const { addToCart } = useCart();

    //  Sync state with URL Category
    useEffect(() => {
        window.scrollTo(0, 0);
        const categoryFromUrl = searchParams.get('category');
        
        if (categoryFromUrl && categories.includes(categoryFromUrl)) {
            setSelectedCategory(categoryFromUrl);
        } else {
            setSelectedCategory("All");
        }
    }, [searchParams]);

    //  Filtering Logic (Search + Category)
    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="w-full min-h-screen bg-orange-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header & Search */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-stone-800 mb-4 font-serif">
                        Our Collections
                    </h1>
                    <p className="text-lg text-stone-600 mb-8">
                        Handcrafted with love, just for you.
                    </p>

                    {/* Search Input */}
                    <div className="relative max-w-md mx-auto mb-8">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search by name or description..."
                            className="block w-full pl-11 pr-4 py-3 bg-white border border-stone-200 rounded-2xl text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800/30 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setSearchParams({ category });
                                }}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                                ${selectedCategory === category
                                    ? "bg-stone-800 text-white shadow-md transform scale-105"
                                    : "bg-white text-stone-600 hover:bg-stone-200 border border-stone-100"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/*  Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-stone-100 flex flex-col">
                            
                            {/* Top part: Image and Info (Link to detail) */}
                            <Link to={`/product/${product.id}`} className="flex-grow cursor-pointer">
                                <div className="relative h-72 w-full overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-800">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-stone-800 mb-1 font-serif group-hover:text-amber-800 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-xl font-medium text-amber-900">{product.price}</p>
                                </div>
                            </Link>

                            {/* Bottom part: Action Button */}
                            <div className="px-6 pb-6 pt-0 flex gap-2">
                                <Link 
                                    to={`/product/${product.id}`}
                                    className="flex-grow py-2.5 rounded-xl border border-stone-200 text-stone-600 text-xs font-semibold hover:bg-stone-50 transition-colors text-center"
                                >
                                    Details
                                </Link>

                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        addToCart({ ...product, quantity: 1 });
                                    }}
                                    className="px-4 py-2.5 rounded-xl bg-stone-800 text-white hover:bg-amber-900 transition-all active:scale-90 flex items-center justify-center shadow-md"
                                    title="Quick Add to Cart"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/*  Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-2xl text-stone-400 font-serif italic">"No blooms found matching your search..."</p>
                        <button 
                            onClick={() => {setSearchTerm(""); setSelectedCategory("All"); setSearchParams({});}} 
                            className="mt-4 text-amber-800 font-medium hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shopping;