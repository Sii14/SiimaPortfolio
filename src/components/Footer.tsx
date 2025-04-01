'use client';

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Get current year

    return (
        <footer style={{ 
            textAlign: "center", 
            padding: "1.5rem", 
            background: "#f1f1f1", 
            overflow: "hidden", 
            fontWeight: "500" 
            
        }}>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ display: "inline-block" }}
            >
                Siima | Samson &copy; {currentYear}
            </motion.p>
        </footer>
    );
}
