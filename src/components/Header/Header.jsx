import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useAuth } from '../Context/AuthContext';

export default function Header() {
    const { user, logout} = useAuth();
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Function to close menu when a link is clicked
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-[#F5F2ED] backdrop-blur-md border-b border-stone-200 text-stone-700">
            <nav className="px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    
                    {/* Mobile Menu Button (Hamburger) */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                    
                    {/* Logo */}
                    <Link to="/" onClick={closeMenu} className="flex items-center overflow-hidden">
                        <img
                            src="/logo.png"
                            className="h-20 md:h-24 w-auto object-contain scale-150 origin-left transition-transform"
                            alt="The Yarn Garden Logo"
                        />
                    </Link>

                    {/* Right Side Actions (Cart & Login) */}
                    <div className="flex items-center gap-4 lg:order-2">
                        {user ? (
                            <div className="hidden lg:flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold uppercase text-xs">
                                        {user.name[0]}
                                    </div>
                                    <span className="text-sm font-medium">Hi, {user.name}</span>
                                </div>
                                <button 
                                    onClick={logout}
                                    className="text-[10px] uppercase tracking-tighter font-bold text-stone-400 hover:text-amber-800 transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/loginpage"
                                onClick={closeMenu}
                                className="text-stone-600 hover:text-amber-700 font-medium text-sm px-2 py-2 flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                <span className="hidden sm:block">Log in</span>
                            </Link>
                        )}

                        <Link 
                            to="/cart" 
                            onClick={closeMenu}
                            className="relative flex items-center bg-stone-800 text-white px-5 py-2.5 rounded-full hover:bg-amber-900 transition-all shadow-md active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                            </svg>
                            <span className="text-sm font-bold">Cart</span>
                            {totalItems > 0 && (
                                <div className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F5F2ED]">
                                    {totalItems}
                                </div>
                            )}
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/about" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-amber-700' : 'text-stone-600'} hover:text-amber-700 lg:p-0`}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-amber-700' : 'text-stone-600'} hover:text-amber-700 lg:p-0`}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shopping" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-amber-700' : 'text-stone-600'} hover:text-amber-700 lg:p-0`}>
                                    Shop
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Menu Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-stone-200 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 bg-[#F5F2ED]">
                        <NavLink to="/about" onClick={closeMenu} className="text-stone-700 font-medium px-2 py-1 hover:bg-stone-100 rounded-md">About</NavLink>
                        <NavLink to="/contact" onClick={closeMenu} className="text-stone-700 font-medium px-2 py-1 hover:bg-stone-100 rounded-md">Contact</NavLink>
                        <NavLink to="/shopping" onClick={closeMenu} className="text-stone-700 font-medium px-2 py-1 hover:bg-stone-100 rounded-md">Shop</NavLink>
                        {user ? (
                            <div className="flex items-center gap-2 text-stone-700 font-medium text-sm">
                                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold">
                                    {user.name[0]} 
                                </div>
                                <span className="hidden md:block">Hi, {user.name}</span>
                            </div>
                                ) : (
                            <Link to="/loginpage" className="text-stone-600 hover:text-amber-700 text-sm font-semibold">
                               Log in
                            </Link>
                                )}
                    </div>
                )}
            </nav>
        </header>
    );
}