import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
const mainLogo = '/images/logos/good_main_logo.jpg';

/**
 * Footer — Responsive footer with micro-interactions,
 * fluid typography (clamp), Nunito font stack, React Router links,
 * staggered scroll-reveal, and animated hover underlines.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, margin: '-60px' });

    const forceScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    /* ── Reusable style tokens ── */
    const sectionTitle = {
        fontFamily: "'Nunito', sans-serif",
        fontSize: 'clamp(0.82rem, 1.1vw, 0.92rem)',
        fontWeight: 700,
        color: '#E2E8F0',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: '18px',
        lineHeight: 1.3,
    };

    const contactTextStyle = {
        fontFamily: "'Nunito', 'Inter', sans-serif",
        color: '#CBD5E1',
        fontSize: 'clamp(0.875rem, 1.1vw, 0.95rem)',
        lineHeight: 1.6,
        letterSpacing: '0.005em',
        margin: 0,
    };

    /* ── Link data ── */
    const programs = [
        { label: 'Pre-School', to: '/pre-school' },
        { label: 'Primary School', to: '/primary-school' },
        { label: 'Pre-University (PUC)', to: '/pre-university' },
    ];

    const quickLinks = [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Admissions', to: '/pre-school#contact' },
    ];

    /* ── Stagger animation variants ── */
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        },
    };

    /**
     * FooterLink — internal link with animated underline on hover.
     */
    const FooterLink = ({ to, children }) => (
        <Link
            className="site-footer-link"
            to={to}
            onClick={() => {
                if (!to.includes('#')) {
                    forceScrollTop();
                }
            }}
            style={{
                fontFamily: "'Nunito', 'Inter', sans-serif",
                color: '#CBD5E1',
                textDecoration: 'none',
                fontSize: 'clamp(0.875rem, 1.1vw, 0.95rem)',
                lineHeight: 1.5,
                letterSpacing: '0.005em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                position: 'relative',
                paddingBottom: '2px',
                transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = '#E2E8F0';
                const underline = e.currentTarget.querySelector('.footer-link-underline');
                if (underline) underline.style.transform = 'scaleX(1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
                const underline = e.currentTarget.querySelector('.footer-link-underline');
                if (underline) underline.style.transform = 'scaleX(0)';
            }}
        >
            {/* Small arrow indicator */}
            <span style={{
                display: 'inline-block',
                fontSize: '0.7em',
                color: '#94A3B8',
                transition: 'transform 0.25s ease, color 0.25s ease',
            }}>›</span>
            {children}
            {/* Animated underline */}
            <span
                className="footer-link-underline"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '14px',
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, #3B82F6, #10B981)',
                    transformOrigin: 'left',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            />
        </Link>
    );

    /**
     * ContactRow — contact item with icon and text/link.
     */
    const ContactRow = ({ icon, children, href }) => (
        <div className="site-footer-contact-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '28px', height: '28px', borderRadius: '8px',
                background: 'rgba(59, 130, 246, 0.08)',
                flexShrink: 0,
            }}>
                {icon}
            </span>
            {href ? (
                <a
                    href={href}
                    style={{
                        ...contactTextStyle,
                        textDecoration: 'none',
                        transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#F1F5F9'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#CBD5E1'; }}
                >
                    {children}
                </a>
            ) : (
                <p style={contactTextStyle}>{children}</p>
            )}
        </div>
    );

    /* ── Shared SVG props ── */
    const iconProps = {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: '#94A3B8',
        style: { width: '15px', height: '15px' },
    };

    return (
        <footer
            ref={footerRef}
            className="site-footer"
            role="contentinfo"
            style={{
                background: 'linear-gradient(180deg, #0F172A 0%, #111827 100%)',
                color: '#F8FAFC',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', top: '-120px', left: '-90px', background: 'radial-gradient(circle, rgba(59,130,246,0.14), transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', bottom: '-140px', right: '-80px', background: 'radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)', pointerEvents: 'none' }} />

            {/* ── Main content ── */}
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 32px) clamp(32px, 4vw, 48px)',
                position: 'relative',
                zIndex: 1
            }}>
                <motion.div
                    className="site-footer-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                        gap: 'clamp(30px, 4vw, 44px)',
                        marginBottom: 'clamp(36px, 4vw, 48px)',
                        alignItems: 'start'
                    }}
                >
                    {/* ── Brand column ── */}
                    <motion.div variants={itemVariants} style={{ maxWidth: '320px' }}>
                        <Link
                            to="/"
                            onClick={forceScrollTop}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '12px',
                                textDecoration: 'none',
                                marginBottom: '18px',
                            }}
                            aria-label="TDK Group of Institutions — Home"
                        >
                            <img
                                src={mainLogo}
                                alt="TDK Group Logo"
                                style={{
                                    height: 'clamp(40px, 5vw, 52px)',
                                    width: 'auto',
                                    borderRadius: '8px',
                                }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                                <span style={{
                                    fontFamily: "'Nunito', sans-serif",
                                    fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                                    fontWeight: 800,
                                    color: '#F8FAFC',
                                    letterSpacing: '-0.01em',
                                }}>
                                    TDK Group of Institutions
                                </span>
                                <span style={{
                                    fontFamily: "'Nunito', sans-serif",
                                    fontSize: 'clamp(0.72rem, 0.9vw, 0.78rem)',
                                    fontWeight: 600,
                                    color: '#60A5FA',
                                    letterSpacing: '0.04em',
                                }}>
                                    Excellence in Education
                                </span>
                            </div>
                        </Link>
                        <p style={{
                            fontFamily: "'Nunito', 'Inter', sans-serif",
                            fontSize: 'clamp(0.875rem, 1.1vw, 0.95rem)',
                            lineHeight: 1.7,
                            color: '#94A3B8',
                            letterSpacing: '0.005em',
                            margin: 0,
                            maxWidth: '340px',
                        }}>
                            Nurturing young minds and helping children bloom into confident learners since 2010.
                        </p>
                    </motion.div>

                    {/* ── Programs column ── */}
                    <motion.div className="site-footer-programs" variants={itemVariants}>
                        <h4 style={sectionTitle}>Our Programs</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {programs.map((item) => (
                                <li key={item.to}>
                                    <FooterLink to={item.to}>{item.label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ── Quick Links column ── */}
                    <motion.div className="site-footer-quicklinks" variants={itemVariants} style={{ paddingLeft: 'clamp(18px, 2.8vw, 44px)' }}>
                        <h4 style={sectionTitle}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {quickLinks.map((item) => (
                                <li key={item.to}>
                                    <FooterLink to={item.to}>{item.label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ── Contact column ── */}
                    <motion.div className="site-footer-contact" variants={itemVariants}>
                        <h4 style={{ ...sectionTitle, textAlign: 'center' }}>Contact</h4>
                        <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <ContactRow icon={
                                <svg {...iconProps}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            }>
                                Below TDK Coaching Academy,<br />
                                Gangamma Gudi Main Road, M.V. Extension,<br />
                                Hosakote Town, Bengaluru Rural - 562114
                            </ContactRow>

                            <ContactRow
                                href="tel:+919606555118"
                                icon={
                                    <svg {...iconProps}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                }
                            >
                                +91 9606555118
                            </ContactRow>

                            <ContactRow
                                href="https://wa.me/919008009830"
                                icon={
                                    <svg {...iconProps}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                }
                            >
                                +91 90080 09830
                            </ContactRow>

                            <ContactRow
                                href="mailto:londonkidshoskote@gmail.com"
                                icon={
                                    <svg {...iconProps}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                }
                            >
                                londonkidshoskote@gmail.com
                            </ContactRow>
                        </address>
                    </motion.div>
                </motion.div>

                {/* ── Bottom bar ── */}
                <motion.div
                    className="site-footer-bottom"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                        paddingTop: 'clamp(20px, 3vw, 28px)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '12px'
                    }}
                >
                    <p style={{
                        fontFamily: "'Nunito', 'Inter', sans-serif",
                        fontSize: 'clamp(0.8rem, 0.95vw, 0.88rem)',
                        color: '#94A3B8',
                        letterSpacing: '0.005em',
                        margin: 0
                    }}>
                        &copy; {currentYear} TDK Group of Institutions. All rights reserved.
                    </p>
                    <p style={{
                        fontFamily: "'Nunito', 'Inter', sans-serif",
                        fontSize: 'clamp(0.8rem, 0.95vw, 0.88rem)',
                        color: '#94A3B8',
                        letterSpacing: '0.005em',
                        margin: 0
                    }}>
                        Powered by{' '}
                        <a
                            href="https://www.magnuscopo.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#60A5FA',
                                textDecoration: 'none',
                                fontWeight: 700,
                                transition: 'color 0.25s ease',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = '#93C5FD'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#60A5FA'; }}
                        >
                            Magnus Copo Technologies
                        </a>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
