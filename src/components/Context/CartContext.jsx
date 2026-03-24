// createContext : It creates the storage box
// useState : To keep travk of the data i.ellist of the products
// useContext : Tool to let other files access te storage
import { createContext, useState, useContext, useEffect } from "react";

// Created the actual Context (Empty box)
const CartContext = createContext();

// "Provider" component (whole App data will sit inside this wrapper)
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("yarnGardenCart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    // Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("yarnGardenCart", JSON.stringify(cart));
    }, [cart]);

    const [toast, setToast] = useState(null); // New state for toast

    const showNotification = (message) => {
        setToast(message);
        // Automatically hide the toast after 3 seconds
        setTimeout(() => {
            setToast(null);
        }, 3000);
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) } 
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: product.quantity || 1 }];
        });
        showNotification(`${product.name} added to basket! 🧶`);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            updateQuantity, // Don't forget to export these!
            clearCart,
            toast
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

