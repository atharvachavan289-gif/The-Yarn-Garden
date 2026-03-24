import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

export default function Success() {
    const { clearCart } = useCart();

    // Clears the cart automatically when they land here
    useEffect(() => {
        clearCart();
    }, []);

    return (
        <main className="min-h-screen bg-[#F5F2ED] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-xl border border-stone-100">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl animate-bounce">
                    🌸
                </div>
                
                <h1 className="text-3xl font-serif text-stone-800 mb-4">Stitched with Love!</h1>
                <p className="text-stone-600 mb-8 leading-relaxed">
                    Thank you for supporting **The Yarn Garden**. We’ve received your order and our hooks are already moving!
                </p>

                <div className="bg-stone-50 rounded-2xl p-4 mb-8 text-left border border-stone-100">
                    <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Order Status</p>
                    <p className="text-sm text-stone-800 font-medium">Being prepared for sprouting...</p>
                </div>

                <Link 
                    to="/shopping" 
                    className="block w-full bg-stone-800 text-white py-4 rounded-full font-bold hover:bg-amber-900 transition-all shadow-lg"
                >
                    Back to the Garden
                </Link>
            </div>
        </main>
    );
}