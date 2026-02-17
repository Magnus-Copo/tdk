import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const mainLogo = '/images/logos/good_main_logo.jpg';

const Header = () => {
    // Mobile menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const forceScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    // Handle scroll effect for glassmorphism intensity
    useEffect(() => {
        let animationFrameId = null;
        let ticking = false;
        let previousScrolled = window.scrollY > 20;

        setScrolled(previousScrolled);

        const updateScrolledState = () => {
            const nextScrolled = window.scrollY > 20;
            if (nextScrolled !== previousScrolled) {
                previousScrolled = nextScrolled;
                setScrolled(nextScrolled);
            }
            ticking = false;
        };

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            animationFrameId = window.requestAnimationFrame(updateScrolledState);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    // Navigation Links Data
    const navLinks = [
        { name: 'Home', path: '/', type: 'link' },
        { name: 'About Us', path: '/about', type: 'link' },
        { name: 'Pre-School', path: '/pre-school', type: 'link' },
        { name: 'Primary-School', path: '/primary-school', type: 'link' },
        { name: 'Pre-University', path: '/pre-university', type: 'link' },
        { name: 'Contact', path: '/contact', type: 'link' },
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

            <div className="max-w-[95%] mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">
                {/* --- LOGO SECTION (PRESERVED) --- */}
                <Link to="/" onClick={forceScrollTop} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 16px)', textDecoration: 'none' }}>
                    <img src={mainLogo} alt="London Kids Logo" fetchPriority="high" style={{ height: 'clamp(48px, 10vw, 64px)', width: 'auto', transition: 'all 0.3s ease' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.4rem)', fontWeight: 800, color: 'var(--hero-text)', letterSpacing: '-0.01em' }}>
                            TDK
                        </span>
                        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 'clamp(0.65rem, 1.8vw, 0.85rem)', fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            Group of Institutions
                        </span>
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.filter(link => link.name !== 'Contact').map((link) => (
                        link.type === 'link' ? (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={forceScrollTop}
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

                    {/* Contact Us Button - Desktop Only */}
                    <Link
                        to="/contact"
                        onClick={forceScrollTop}
                        className="btn-primary hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
                        style={{
                            padding: 'clamp(10px, 1.5vw, 12px) clamp(18px, 3vw, 24px)',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '9999px',
                            fontWeight: 700,
                            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-700 hover:text-indigo-600 transition-colors active:scale-95 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    style={{ minWidth: '44px', minHeight: '44px' }}
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
                        className="md:hidden absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-indigo-50 shadow-xl overflow-hidden max-h-[calc(100vh-96px)] overflow-y-auto"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="flex flex-col p-4 sm:p-6 gap-3 bg-gradient-to-b from-white to-indigo-50/30">
                            {navLinks.filter(link => link.name !== 'Contact').map((link) => (
                                link.type === 'link' ? (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            forceScrollTop();
                                        }}
                                        className={`font-nunito font-bold text-base sm:text-lg py-3 px-4 rounded-lg border-l-4 transition-all flex items-center justify-between group ${
                                            location.pathname === link.path
                                                ? 'bg-indigo-600 text-white border-indigo-800 shadow-md'
                                                : 'text-slate-800 border-transparent hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-50/50'
                                        }`}
                                    >
                                        {link.name}
                                        <span className={`transition-opacity ${
                                            location.pathname === link.path 
                                                ? 'opacity-100 text-white' 
                                                : 'opacity-0 group-hover:opacity-100 text-indigo-400'
                                        }`}>
                                            {location.pathname === link.path ? '●' : '→'}
                                        </span>
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`font-nunito font-bold text-base sm:text-lg py-3 px-4 rounded-lg border-l-4 transition-all flex items-center justify-between group ${
                                            location.pathname === link.path
                                                ? 'bg-indigo-600 text-white border-indigo-800 shadow-md'
                                                : 'text-slate-800 border-transparent hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-50/50'
                                        }`}
                                    >
                                        {link.name}
                                        <span className={`transition-opacity ${
                                            location.pathname === link.path 
                                                ? 'opacity-100 text-white' 
                                                : 'opacity-0 group-hover:opacity-100 text-indigo-400'
                                        }`}>
                                            {location.pathname === link.path ? '●' : '→'}
                                        </span>
                                    </a>
                                )
                            ))}
                            <Link
                                to="/contact"
                                className={`w-full mt-3 py-3.5 rounded-xl font-bold shadow-md transition-all text-base text-center ${
                                    location.pathname === '/contact'
                                        ? 'bg-indigo-800 text-white shadow-indigo-800/30'
                                        : 'bg-indigo-600 text-white shadow-indigo-500/20 active:scale-95'
                                }`}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    forceScrollTop();
                                }}
                                style={{ minHeight: '48px', display: 'block', textDecoration: 'none' }}
                            >
                                Contact Us {location.pathname === '/contact' && '●'}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
