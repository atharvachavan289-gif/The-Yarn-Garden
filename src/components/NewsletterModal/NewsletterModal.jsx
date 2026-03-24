import React, { useState, useEffect } from 'react';

export default function NewsletterModal() {
    const [isVisible, setIsVisible] = useState(true);
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        // Show the popup after 4 seconds
        const timer = setTimeout(() => {
            // Only show if they haven't seen it in this session
            const hasSeen = sessionStorage.getItem('hasSeenNewsletter');
            if (!hasSeen) {
                setIsVisible(true);
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenNewsletter', 'true');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
        // After 2 seconds of showing "Success", close the modal
        setTimeout(handleClose, 2500);
    };

    if (!isVisible) return null;

    return (
    // We use "bg-opacity-40" instead of the animate plugin
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-[#F5F2ED] w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl relative border border-stone-200">
            
            <button 
                onClick={handleClose}
                className="absolute top-6 right-6 text-stone-400 hover:text-stone-800 transition-colors z-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="p-10 md:p-14 text-center">
                {!isSubscribed ? (
                    <>
                        <span className="text-amber-800 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
                            Exclusive Invitation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
                            Get <span className="italic text-amber-900">10% Off</span> your first bouquet
                        </h2>
                        <p className="text-stone-600 mb-8 text-sm leading-relaxed">
                            Join our garden list to receive secret flower drops and a special discount.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input 
                                type="email" 
                                required
                                placeholder="your@email.com" 
                                className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:border-amber-800 transition-all text-center"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button 
                                type="submit"
                                className="w-full bg-stone-800 text-white py-4 rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-md active:scale-95"
                            >
                                Claim My Discount
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="py-10">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                            ✓
                        </div>
                        <h2 className="text-2xl font-serif text-stone-800 mb-2">Check your inbox!</h2>
                        <p className="text-stone-500">Your discount code is blooming.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
);
}