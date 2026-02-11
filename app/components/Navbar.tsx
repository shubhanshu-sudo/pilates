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
            {/* Backdrop Layer - Behind Navbar */}
            <div
                className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeMobileMenu}
            />

            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out flex items-center ${(isScrolled || !isHomepage || isMobileMenuOpen)
                    ? 'bg-[#F6F2EC] py-4 shadow-[0_2px_15px_rgba(0,0,0,0.08)]'
                    : 'bg-transparent py-6'
                }`}>
                <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8 flex justify-between items-center relative">
                    {/* Logo - Always Visible */}
                    <Link
                        href="/"
                        className="flex flex-col leading-[1.1] no-underline cursor-pointer group relative z-[110]"
                        onClick={closeMobileMenu}
                    >
                        <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${(isScrolled || !isHomepage || isMobileMenuOpen) ? 'text-[#2F2F2F]' : 'text-white'
                            }`}>THE PILATES PALMS</span>
                        <span className={`text-[10px] tracking-[0.6em] font-sans font-normal uppercase mt-1 transition-colors duration-300 ${(isScrolled || !isHomepage || isMobileMenuOpen) ? 'text-[#A89F92]' : 'text-white/90'
                            }`}>PULSE</span>
                    </Link>

                    {/* Navigation Container - Modern Sidebar */}
                    <div className={`
                        fixed top-0 right-0 h-screen w-[300px] bg-[#F6F2EC] shadow-[-20px_0_40px_rgba(0,0,0,0.1)]
                        flex flex-col items-start justify-start pt-[120px] px-10 gap-8 
                        transition-transform duration-[400ms] ease-[cubic-bezier(0.2,1,0.3,1)]
                        z-[105] md:static md:h-auto md:w-auto md:bg-transparent md:shadow-none 
                        md:flex-row md:items-center md:pt-0 md:px-0 md:gap-9 md:translate-x-0
                        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}>
                        <Link
                            href="/"
                            className={`text-[0.9rem] md:text-[0.7rem] tracking-[0.15em] uppercase font-medium transition-colors duration-300 w-full md:w-auto ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F]' : 'md:text-white max-md:text-[#2F2F2F]'
                                }`}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`text-[0.9rem] md:text-[0.7rem] tracking-[0.15em] uppercase font-medium transition-colors duration-300 w-full md:w-auto ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F]' : 'md:text-white max-md:text-[#2F2F2F]'
                                }`}
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                        <Link
                            href="/classes"
                            className={`text-[0.9rem] md:text-[0.7rem] tracking-[0.15em] uppercase font-medium transition-colors duration-300 w-full md:w-auto ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F]' : 'md:text-white max-md:text-[#2F2F2F]'
                                }`}
                            onClick={closeMobileMenu}
                        >
                            Classes
                        </Link>
                        <Link
                            href="/pricing"
                            className={`text-[0.9rem] md:text-[0.7rem] tracking-[0.15em] uppercase font-medium transition-colors duration-300 w-full md:w-auto ${(isScrolled || !isHomepage) ? 'text-[#2F2F2F]' : 'md:text-white max-md:text-[#2F2F2F]'
                                }`}
                            onClick={closeMobileMenu}
                        >
                            Pricing
                        </Link>

                        {/* CTA */}
                        <Link
                            href="/book"
                            className="inline-block py-4 px-8 rounded-xl bg-[#A89F92] text-white font-medium text-[0.75rem] tracking-[0.15em] uppercase transition-all duration-300 w-full md:w-auto text-center md:ml-4 active:scale-[0.98]"
                            onClick={closeMobileMenu}
                        >
                            BOOK A SESSION
                        </Link>
                    </div>

                    {/* Mobile Toggle Button - Guaranteed Visibility */}
                    <button
                        className={`md:hidden p-2 relative z-[110] transition-all duration-300 active:scale-90 ${(isScrolled || !isHomepage || isMobileMenuOpen) ? 'text-[#2F2F2F]' : 'text-white'
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="7" x2="20" y2="7"></line>
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="17" x2="20" y2="17"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
        </>
    );
}
