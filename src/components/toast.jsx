import React from 'react';
import { useCart } from './Context/CartContext';

export default function Toast() {
    const { toast } = useCart();

    if (!toast) return null;

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-stone-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-stone-700">
                <span className="bg-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-[10px]">
                    ✓
                </span>
                <p className="text-sm font-medium tracking-wide">
                    {toast}
                </p>
            </div>
        </div>
    );
}