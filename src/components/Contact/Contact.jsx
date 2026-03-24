import React from 'react';

export default function Contact() {
    return (
        <main className="bg-[#F5F2ED] min-h-screen py-20 px-6">
            <div className="max-w-5xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="text-amber-800 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                        Let’s start a <span className="italic text-amber-900">conversation</span>
                    </h1>
                    <p className="text-stone-600 max-w-xl mx-auto leading-relaxed">
                        Have a question about an order, or looking for a custom-colored bouquet for a special someone? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Side: Contact Info */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100 space-y-10">
                        <div>
                            <h2 className="text-2xl font-serif text-stone-800 mb-8">Contact Information</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-amber-800 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">Our Studio</p>
                                        <p className="text-stone-700 font-medium">Navi Mumbai, Maharashtra, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-amber-800 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-stone-700 font-medium">hello@theyarngarden.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Special Custom Order Note */}
                        <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100">
                            <h3 className="text-amber-900 font-bold text-sm uppercase tracking-wider mb-2">Custom Requests 🧶</h3>
                            <p className="text-sm text-amber-800/80 leading-relaxed">
                                Want a specific color combination for a 9-puff bouquet? Mention the colors in the message box, and Shravani will get back to you with a quote!
                            </p>
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-stone-500 uppercase ml-2">Your Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your name"
                                    className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-800/10 focus:border-amber-800 transition-all text-stone-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-stone-500 uppercase ml-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="+91"
                                    className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-800/10 focus:border-amber-800 transition-all text-stone-800"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-stone-500 uppercase ml-2">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="shravani@example.com"
                                className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-800/10 focus:border-amber-800 transition-all text-stone-800"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-stone-500 uppercase ml-2">How can we help?</label>
                            <textarea 
                                rows="5"
                                placeholder="Tell us about your custom bouquet ideas..."
                                className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-800/10 focus:border-amber-800 transition-all text-stone-800"
                            ></textarea>
                        </div>

                        <button className="w-full bg-stone-800 text-white py-5 rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-lg active:scale-95 text-lg">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </main>
    );
}