"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex items-center ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
                <div className="container flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="logo group" onClick={closeMobileMenu}>
                        <span className="logo-text">THE PILATES PALMS</span>
                        <span className="text-[10px] tracking-[0.6em] font-sans text-taupe font-normal uppercase mt-1">PULSE</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <Link href="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
                        <Link href="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
                        <Link href="/classes" className="nav-link" onClick={closeMobileMenu}>Classes</Link>
                        <Link href="/pricing" className="nav-link" onClick={closeMobileMenu}>Pricing</Link>

                        {/* CTA */}
                        <Link href="/book" className="btn btn-primary nav-btn !py-3 !px-8 ml-6" onClick={closeMobileMenu}>
                            BOOK A SESSION
                        </Link>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        className={`hamburger-menu ${isScrolled ? 'text-dark-charcoal' : 'text-white'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-menu-backdrop"
                    onClick={closeMobileMenu}
                ></div>
            )}
        </>
    );
}
