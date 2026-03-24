import React from "react";  
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Toast from "./components/toast.jsx";

function Layout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
            <Toast/>
        </>
    );
}

export default Layout;