"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex items-center ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="logo group">
                    <span className="logo-text text-xl">THE PILATES PALMS</span>
                    <span className="text-[10px] tracking-[0.6em] font-sans text-taupe font-normal uppercase mt-1">PULSE</span>
                </Link>

                {/* Navigation */}
                <div className="nav-links flex items-center">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/classes" className="nav-link">Classes</Link>
                    <Link href="/pricing" className="nav-link">Pricing</Link>

                    {/* CTA */}
                    <Link href="/book" className="btn btn-primary nav-btn !py-3 !px-8 ml-6">
                        BOOK A SESSION
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className={`md:hidden ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
    );
}
