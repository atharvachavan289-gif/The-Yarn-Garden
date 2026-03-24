import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <main className="bg-[#F5F2ED] min-h-screen">

            <section className="relative py-20 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-amber-800 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-6 leading-tight">
                        Where Stitches Bloom into <span className="italic">Memories</span>
                    </h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                        At The Yarn Garden, we believe that flowers shouldn't have an expiration date. 
                        Every petal and leaf is handcrafted to bring everlasting warmth to your home.
                    </p>
                </div>
            
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl opacity-50"></div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
        <img 
            src="crochet.webp" 
            alt="Crochet process" 
            className="w-full h-auto object-contain" 
        />
    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-stone-800">The Art of the Slow Stitch</h2>
                        <p className="text-stone-600 leading-relaxed italic border-l-4 border-amber-200 pl-6">
                            "In a world of mass production, we choose the rhythmic dance of the hook and yarn. 
                            It takes time, but the most beautiful things always do."
                        </p>
                        <p className="text-stone-600 leading-relaxed">
                            Each bouquet in our shop represents hours of focus and dedication. Unlike real flowers that fade in a week, our crochet blooms are sustainable, hypoallergenic, and stay vibrant forever. Whether it’s a single rose or a grand 9-flower arrangement, we put a piece of our heart into every stitch.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center p-8 bg-orange-50/50 rounded-3xl border border-stone-100 hover:shadow-lg transition-shadow">
                            <span className="text-4xl mb-6 block">🧶</span>
                            <h3 className="text-xl font-serif text-stone-800 mb-3">100% Handcrafted</h3>
                            <p className="text-sm text-stone-500 leading-relaxed">No machines, no shortcuts. Just premium yarn and a passion for craftsmanship.</p>
                        </div>
                        <div className="text-center p-8 bg-orange-50/50 rounded-3xl border border-stone-100 hover:shadow-lg transition-shadow">
                            <span className="text-4xl mb-6 block">🌍</span>
                            <h3 className="text-xl font-serif text-stone-800 mb-3">Eco-Conscious</h3>
                            <p className="text-sm text-stone-500 leading-relaxed">A sustainable alternative to the cut-flower industry. Flowers that never go to waste.</p>
                        </div>
                        <div className="text-center p-8 bg-orange-50/50 rounded-3xl border border-stone-100 hover:shadow-lg transition-shadow">
                            <span className="text-4xl mb-6 block">✨</span>
                            <h3 className="text-xl font-serif text-stone-800 mb-3">Customized Love</h3>
                            <p className="text-sm text-stone-500 leading-relaxed">Personalized bouquets tailored to your favorite colors and memories.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MEET THE MAKER SECTION */}
<section className="py-24 px-6 bg-stone-50/50">
    <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-amber-100 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                    <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-stone-200 rounded-[2rem] overflow-hidden shadow-xl">
                    
                        <img 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
                            alt="Shravani Dalvi" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Owner's Story */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <span className="text-amber-800 font-bold uppercase tracking-widest text-xs">
                    The Artisan Behind the Hook
                </span>
                <h2 className="text-4xl font-serif text-stone-800">Hi, I'm Shravani</h2>
                
                <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
                    <p>
                        Based in the vibrant city of **Navi Mumbai**, I’ve always found beauty in the details. While the world moves at a lightning pace, I find my balance in the slow, rhythmic art of crochet—where a simple string of yarn transforms into something timeless.
                    </p>
                    <p>
                        **The Yarn Garden** was born out of a desire to create "forever blooms"—flowers that never fade and memories that don't wilt. What started as a small hobby has grown into a deep passion for handcrafted storytelling through every stitch.
                    </p>
                    <p>
                        Every bouquet and accessory you see here is made with patience, care, and a lot of love. I hope these handcrafted pieces bring a touch of warmth and a lasting smile to your space, just as they do for me while I'm creating them.
                    </p>
                </div>

                {/* Social Links / Signature */}
                <div className="pt-6">
                    <p className="font-serif italic text-2xl text-stone-800">- Shravani Dalvi</p>
                    <div className="flex justify-center md:justify-start gap-6 mt-6">
                        <a href="#" className="text-stone-400 hover:text-stone-800 transition-colors">Instagram</a>
                        <a href="#" className="text-stone-400 hover:text-stone-800 transition-colors">LinkedIn</a>
                        <a href="#" className="text-stone-400 hover:text-stone-800 transition-colors">Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            {/* Call to Action */}
            <section className="py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto bg-stone-800 rounded-[3rem] p-12 shadow-2xl overflow-hidden relative">
                    <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Ready to pick your forever blooms?</h2>
                    <Link 
                        to="/shopping" 
                        className="inline-block bg-white text-stone-800 px-10 py-4 rounded-full font-bold hover:bg-amber-100 transition-all shadow-md hover:scale-105 relative z-10"
                    >
                        Explore the Garden
                    </Link>
                    {/* Decorative abstract shape */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-800 rounded-full translate-y-1/2 translate-x-1/4 opacity-50"></div>
                </div>
            </section>
        </main>
    );
}