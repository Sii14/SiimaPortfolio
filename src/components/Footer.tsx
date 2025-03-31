'use client';

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "1rem", background: "#f1f1f1", overflow: "hidden" }}>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ display: "inline-block" }}
            >
                <motion.span
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ display: "inline-block" }}
                >
                    Code With Siima.
                </motion.span>{" "}
                <motion.span
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ display: "inline-block" }}
                >
                    All rights reserved.
                </motion.span>
            </motion.p>
        </footer>
    );
}
