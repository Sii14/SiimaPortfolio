'use client'; // Required for Framer Motion in Next.js

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react'; // Import useState
import styles from './Header.module.css'; // Importing CSS Module for styles
import Head from 'next/head';

const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CERTIFICATION', href: '/certification' },
    { name: 'CONTACT', href: '/contact' }
];

const Header = () => {
    // State to track if the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu open/close
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu
    };

    return (
        <>
            <Head>
                <title>Siima | Portfolio</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />

            </Head>


            <header
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    zIndex: '10',
                    justifyContent: 'flex-end',
                }}
            >
                <nav>
                    {/* Hamburger Menu for small screens */}
                    <div className={styles.hamburgerMenu} onClick={toggleMenu}> {/* Added onClick handler */}
                        <button>☰</button> {/* Simple hamburger icon */}
                    </div>

                    {/* Navigation Items */}
                    <ul className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}> {/* Conditionally add a class to toggle menu */}
                        {links.map((link, index) => (
                            <motion.li
                                key={link.name}
                                initial={{ y: -50, opacity: 0 }} // Start above
                                animate={{ y: 0, opacity: 1 }} // Drop to position
                                transition={{
                                    duration: 1,
                                    delay: index * 0.2 // Stagger animation from right to left
                                }}
                                className={styles.navItem}
                            >
                                <Link
                                    href={link.href}
                                    className={styles.navLink}
                                    onClick={handleLinkClick} // Close the menu when a link is clicked
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
