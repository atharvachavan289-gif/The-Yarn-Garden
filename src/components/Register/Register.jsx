import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Mock Registration: Save to localStorage
        const newUser = { name: formData.name, email: formData.email };
        localStorage.setItem('user', JSON.stringify(newUser));
        
        alert(`Welcome to the Garden, ${formData.name}!`);
        navigate('/'); // Redirect to home as a "logged in" user
    };

    return (
        <main className="min-h-screen bg-[#F5F2ED] flex items-center justify-center px-6 py-12">
            <div className="bg-white w-full max-w-md rounded-[3rem] shadow-xl overflow-hidden p-10 md:p-14 border border-stone-100">
                <div className="text-center mb-10">
                    <span className="text-amber-800 font-bold uppercase tracking-widest text-[10px] mb-2 block">Join the Community</span>
                    <h1 className="text-3xl font-serif text-stone-800">Create Account</h1>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-stone-400 uppercase ml-2 tracking-tighter">Full Name</label>
                        <input 
                            name="name"
                            type="text" 
                            required
                            className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-amber-800 transition-all"
                            placeholder="Your Name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-stone-400 uppercase ml-2 tracking-tighter">Email</label>
                        <input 
                            name="email"
                            type="email" 
                            required
                            className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-amber-800 transition-all"
                            placeholder="hello@example.com"
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-stone-400 uppercase ml-2 tracking-tighter">Password</label>
                            <input 
                                name="password"
                                type="password" 
                                required
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-amber-800 transition-all"
                                placeholder="••••••••"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-stone-400 uppercase ml-2 tracking-tighter">Confirm Password</label>
                            <input 
                                name="confirmPassword"
                                type="password" 
                                required
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-amber-800 transition-all"
                                placeholder="••••••••"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button className="w-full bg-stone-800 text-white py-5 mt-4 rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-lg active:scale-95">
                        Grow My Account
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-stone-500">
                    Already a member? <Link to="/login" className="text-amber-800 font-bold hover:underline">Log in</Link>
                </div>
            </div>
        </main>
    );
}