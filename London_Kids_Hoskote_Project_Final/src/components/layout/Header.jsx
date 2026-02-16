import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    // Mobile menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for glassmorphism intensity
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation Links Data
    const navLinks = [
        { name: 'Home', path: '/', type: 'link' },
        { name: 'About Us', path: '/about', type: 'link' },
        { name: 'Pre-School', path: '/pre-school', type: 'link' },
        { name: 'Primary-School', path: '/#primary-school', type: 'anchor' },
        { name: 'Pre-University', path: '/#pre-university', type: 'anchor' },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? 'bg-gradient-to-r from-indigo-50/95 via-purple-50/95 to-teal-50/95 backdrop-blur-md shadow-md border-b border-indigo-200'
                : 'bg-gradient-to-r from-indigo-200 via-purple-100 to-teal-200 shadow-sm'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            {/* Top Gradient Line - Slightly bolder for color pop */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90" />

            <div className="max-w-[95%] mx-auto px-6 h-24 flex items-center justify-between">
                {/* --- LOGO SECTION (PRESERVED) --- */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                    <img src="/src/assets/images/good_main_logo.jpg" alt="London Kids Logo" style={{ height: '64px', width: 'auto', transition: 'all 0.3s ease' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: 'var(--hero-text)', letterSpacing: '-0.01em' }}>
                            TDK
                        </span>
                        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            Group of Institutions
                        </span>
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.type === 'link' ? (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative group font-nunito font-bold text-base transition-colors duration-300 ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-700 hover:text-indigo-600'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.path}
                                className="relative group text-slate-700 font-nunito font-bold text-base hover:text-indigo-600 transition-colors duration-300"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                            </a>
                        )
                    ))}
                </nav>

                {/* --- BUTTON (PRESERVED) --- */}
                <button
                    className="hidden md:block btn-primary hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
                    onClick={() => globalThis.showBookingModal?.()}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '9999px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        // Preserving core styles
                    }}
                >
                    Book a Tour
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {isMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* --- MOBILE MENU --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-indigo-50 shadow-xl overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="flex flex-col p-6 gap-4 bg-gradient-to-b from-white to-indigo-50/30">
                            {navLinks.map((link) => (
                                link.type === 'link' ? (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-slate-800 font-nunito font-bold text-lg py-3 border-b border-indigo-50/50 hover:text-indigo-600 hover:pl-2 transition-all flex items-center justify-between group"
                                    >
                                        {link.name}
                                        <span className="opacity-0 group-hover:opacity-100 text-indigo-400">→</span>
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-slate-800 font-nunito font-bold text-lg py-3 border-b border-indigo-50/50 hover:text-indigo-600 hover:pl-2 transition-all flex items-center justify-between group"
                                    >
                                        {link.name}
                                        <span className="opacity-0 group-hover:opacity-100 text-indigo-400">→</span>
                                    </a>
                                )
                            ))}
                            <button
                                className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-md shadow-indigo-500/20 active:scale-95 transition-transform"
                                onClick={() => { globalThis.showBookingModal?.(); setIsMenuOpen(false); }}
                                style={{ backgroundColor: 'var(--color-primary)' }} // Keep brand color
                            >
                                Book a Tour
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
