import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useCart } from '../Context/CartContext';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
    const navigate = useNavigate(); 

    const parsePrice = (priceStr) => {
        return parseInt(priceStr.replace(/[₹,]/g, ''));
    };

    const subtotal = cart.reduce((total, item) => {
        return total + (parsePrice(item.price) * item.quantity);
    }, 0);

    // Shipping is FREE if subtotal is 1000 or more
    const shipping = subtotal >= 1000 ? 0 : 50; 
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-[#F5F2ED] flex flex-col items-center justify-center p-4">
                <span className="text-6xl mb-6 text-stone-300">🧶</span>
                <h2 className="text-3xl font-serif text-stone-800 mb-4">Your basket is empty</h2>
                <p className="text-stone-500 mb-8">It looks like you haven't picked any blooms yet.</p>
                <Link 
                    to="/shopping" 
                    className="bg-stone-800 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-900 transition-all shadow-md"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <main className="bg-[#F5F2ED] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-serif text-stone-800 mb-10">Your Shopping Basket</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/*  Item List */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => {
                            const itemUnitPrice = parsePrice(item.price);
                            const rowTotal = itemUnitPrice * item.quantity;

                            return (
                                <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-stone-100 flex gap-6 items-center">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-stone-100 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={`/${item.image}`} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-bold text-stone-800 font-serif">{item.name}</h3>
                                                <p className="text-sm text-amber-800 font-medium uppercase tracking-wider">{item.category}</p>
                                            </div>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-stone-400 hover:text-red-500 transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-center mt-6">
                                            <div className="flex items-center border border-stone-200 rounded-full bg-[#F5F2ED]/50">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="px-3 py-1 hover:text-amber-800 transition-colors font-bold"
                                                >–</button>
                                                <span className="px-2 font-medium w-8 text-center text-sm">{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-1 hover:text-amber-800 transition-colors font-bold"
                                                >+</button>
                                            </div>
                                            
                                            <div className="text-right">
                                                <p className="font-bold text-stone-900 text-lg">₹{rowTotal.toLocaleString('en-IN')}</p>
                                                {item.quantity > 1 && (
                                                    <p className="text-[10px] text-stone-400 font-medium italic">({item.price} each)</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        
                        <button 
                            onClick={clearCart}
                            className="text-sm text-stone-400 hover:text-stone-600 underline"
                        >
                            Empty entire basket
                        </button>
                    </div>

                    {/*Order Summary Sidebar */}
                    <aside className="bg-white rounded-3xl p-8 shadow-md border border-stone-100 sticky top-28 h-fit">
                        <h2 className="text-2xl font-serif text-stone-800 mb-6">Order Summary</h2>
                        
                        <div className="space-y-4 text-stone-600 mb-8">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="text-stone-900 font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className={shipping === 0 ? "text-green-600 font-bold" : "text-stone-900 font-medium"}>
                                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                                </span>
                            </div>

                            {/* Shipping Tip */}
                            {shipping > 0 && (
                                <p className="text-[11px] text-amber-700 italic bg-amber-50 p-3 rounded-xl border border-amber-100 mt-4">
                                    Add ₹{1000 - subtotal} more for **Free Shipping**! 🌸
                                </p>
                            )}
                        </div>

                        <div className="border-t border-stone-100 pt-6 mb-8 flex justify-between items-end">
                            <span className="text-lg font-serif">Total</span>
                            <span className="text-3xl font-bold text-stone-900 leading-none">₹{total.toLocaleString('en-IN')}</span>
                        </div>

                        <button 
                            className="w-full bg-stone-800 text-white py-4 rounded-full font-bold hover:bg-amber-900 transition-all shadow-lg active:scale-95"
                            onClick={() => navigate('/success')}
                        >
                            Proceed to Checkout
                        </button>
                    </aside>
                </div>
            </div>
        </main>
    );
}