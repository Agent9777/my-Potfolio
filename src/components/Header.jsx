import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/About" },
        { name: "Projects", path: "/Projects" },
        { name: "Skills", path: "/Skills" },
        { name: "Contact", path: "/Contacts" },
    ];

    return (
        <motion.header
            className="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <h1 className="logo">MyPortfolio</h1>
            <nav className="nav">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className="nav-button"
                        onClick={() => navigate(item.path)}
                    >
                        {item.name}
                    </button>
                ))}
            </nav>
        </motion.header>
    );

}