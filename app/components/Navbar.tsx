"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Check if we're on homepage
    const isHomepage = pathname === '/';

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
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex items-center ${(isScrolled || !isHomepage)
                ? 'bg-[rgba(246,242,236,0.95)] backdrop-blur-xl py-4 shadow-[0_2px_15px_rgba(0,0,0,0.08)] md:py-4'
                : 'bg-transparent py-6 md:py-6'
                }`}>
                <div className="max-w-[1200px] w-full mx-auto px-8 lg:px-8 md:px-6 sm:px-5 flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex flex-col leading-[1.1] no-underline cursor-pointer group"
                        onClick={closeMobileMenu}
                    >
                        <span className={`text-[clamp(1rem,2vw,1.25rem)] font-semibold transition-colors duration-500 ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F]' : 'text-white'
                            }`}>THE PILATES PALMS</span>
                        <span className={`text-[clamp(0.55rem,1vw,0.65rem)] tracking-[0.6em] font-sans font-normal uppercase mt-1 transition-colors duration-500 ${(isScrolled || !isHomepage) ? 'text-[#A89F92] opacity-80' : 'text-white opacity-90'
                            }`}>PULSE</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`
                        hidden md:flex items-center gap-9
                        max-md:fixed max-md:top-0 max-md:w-[280px] max-md:h-screen 
                        max-md:bg-[#F6F2EC] max-md:flex-col max-md:justify-start 
                        max-md:pt-[100px] max-md:px-10 max-md:pb-10 max-md:gap-8 
                        max-md:shadow-[-5px_0_20px_rgba(0,0,0,0.1)] max-md:z-[100]
                        max-md:transition-all max-md:duration-[400ms] max-md:ease-[cubic-bezier(0.165,0.84,0.44,1)]
                        ${isMobileMenuOpen ? 'max-md:right-0' : 'max-md:-right-full'}
                    `}>
                        <Link
                            href="/"
                            className={`text-[0.7rem] md:text-[0.7rem] max-md:text-[0.9rem] tracking-[0.15em] uppercase font-medium transition-colors duration-300 relative pb-1 max-md:w-full max-md:text-left max-md:py-3 nav-link ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F] hover:text-[#A89F92]' : 'text-white hover:text-white/80 max-md:text-[#2F2F2F]'
                                }`}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`text-[0.7rem] md:text-[0.7rem] max-md:text-[0.9rem] tracking-[0.15em] uppercase font-medium transition-colors duration-300 relative pb-1 max-md:w-full max-md:text-left max-md:py-3 nav-link ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F] hover:text-[#A89F92]' : 'text-white hover:text-white/80 max-md:text-[#2F2F2F]'
                                }`}
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                        <Link
                            href="/classes"
                            className={`text-[0.7rem] md:text-[0.7rem] max-md:text-[0.9rem] tracking-[0.15em] uppercase font-medium transition-colors duration-300 relative pb-1 max-md:w-full max-md:text-left max-md:py-3 nav-link ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F] hover:text-[#A89F92]' : 'text-white hover:text-white/80 max-md:text-[#2F2F2F]'
                                }`}
                            onClick={closeMobileMenu}
                        >
                            Classes
                        </Link>
                        <Link
                            href="/pricing"
                            className={`text-[0.7rem] md:text-[0.7rem] max-md:text-[0.9rem] tracking-[0.15em] uppercase font-medium transition-colors duration-300 relative pb-1 max-md:w-full max-md:text-left max-md:py-3 nav-link ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F] hover:text-[#A89F92]' : 'text-white hover:text-white/80 max-md:text-[#2F2F2F]'
                                }`}
                            onClick={closeMobileMenu}
                        >
                            Pricing
                        </Link>

                        {/* CTA */}
                        <Link
                            href="/book"
                            className="inline-block py-3 px-8 md:py-3 md:px-8 rounded-lg bg-[#A89F92] text-white font-medium text-[0.7rem] tracking-[0.1em] uppercase transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-[#928a7e] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] active:translate-y-0 active:scale-[0.98] ml-6 max-md:ml-0 max-md:w-full max-md:mt-4 max-md:text-center"
                            onClick={closeMobileMenu}
                        >
                            BOOK A SESSION
                        </Link>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        className={`hidden max-md:block bg-transparent border-none cursor-pointer p-2 z-[101] transition-all duration-300 hover:opacity-70 ${isScrolled ? 'text-[#2F2F2F]' : 'text-white'
                            }`}
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
                    className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[99] animate-[fadeIn_0.3s_ease]"
                    onClick={closeMobileMenu}
                ></div>
            )}
        </>
    );
}
