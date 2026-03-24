import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // For now, let's just "mock" a login
        localStorage.setItem('user', JSON.stringify({ name: 'Shravani' }));
        alert("Welcome back to the Garden!");
        navigate('/'); // Go back to home
    };

    return (
        <main className="min-h-screen bg-[#F5F2ED] flex items-center justify-center px-6 py-12">
            <div className="bg-white w-full max-w-md rounded-[3rem] shadow-xl overflow-hidden p-10 md:p-14 border border-stone-100">
                <div className="text-center mb-10">
                    <span className="text-amber-800 font-bold uppercase tracking-widest text-[10px] mb-2 block">Welcome Back</span>
                    <h1 className="text-3xl font-serif text-stone-800">Sign In</h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-400 uppercase ml-2 tracking-tighter">Email Address</label>
                        <input 
                            type="email" 
                            required
                            className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-amber-800 transition-all"
                            placeholder="hello@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-400 uppercase ml-2 tracking-tighter">Password</label>
                        <input 
                            type="password" 
                            required
                            className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-amber-800 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full bg-stone-800 text-white py-5 rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-lg active:scale-95">
                        Enter the Garden
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-stone-500">
                    Don't have an account?{' '}
                    <Link 
                        to="/register" 
                        className="text-amber-800 font-bold hover:underline decoration-amber-800/30 underline-offset-4 transition-all"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </main>
    );
}