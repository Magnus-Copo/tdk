import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { PUC_HERO_STATS, PUC_STREAMS } from '../data/preUniversityData';
import s from '../styles/PUCHero.module.scss';

/**
 * Simplified counter — no animation
 * @param {{ value: string, label: string }} props
 */
const Counter = ({ value, label }) => {
    return (
        <div style={{ textAlign: 'center', minWidth: '100px' }}>
            <div
                style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#475569',
                    marginTop: '4px',
                    letterSpacing: '0.01em',
                    lineHeight: 1.65,
                }}
            >
                <span
                    style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: 900,
                        background: 'linear-gradient(135deg, #6366F1, #3B82F6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.02em',
                    }}
                >
                    {value}
                </span>
                <br />
                {label}
            </div>
        </div>
    );
};

Counter.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

/**
 * PUCHeroSection — Pre-University hero with animated stream cards.
 * Split layout: left text/CTA, right 3 animated stream cards.
 */
const PUCHeroSection = () => {
    const streamIcons = ['iconScience', 'iconCommerce', 'iconArts'];

    return (
        <>
            <style>{`
                .puc-hero-blob {
                    position: absolute;
                    border-radius: 50%;
                    will-change: transform;
                    pointer-events: none;
                }
                .puc-hero-cta-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 32px;
                    border: none;
                    border-radius: 14px;
                    font-family: 'Nunito', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #FFFFFF;
                    background: linear-gradient(135deg, #6366F1 0%, #3B82F6 100%);
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
                    letter-spacing: 0.01em;
                }
                .puc-hero-cta-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px rgba(99, 102, 241, 0.45);
                }
                .puc-hero-cta-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 32px;
                    border: 1.5px solid rgba(99, 102, 241, 0.25);
                    border-radius: 14px;
                    font-family: 'Nunito', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #6366F1;
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(8px);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    letter-spacing: 0.01em;
                }
                .puc-hero-cta-secondary:hover {
                    transform: translateY(-2px);
                    border-color: #6366F1;
                    background: rgba(239, 246, 255, 0.8);
                }
            `}</style>

            <section
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
                    background: 'linear-gradient(165deg, #EEF2FF 0%, #E0E7FF 35%, #DBEAFE 70%, #EFF6FF 100%)',
                    minHeight: '85vh',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: 'inset 0 -1px 0 rgba(99, 102, 241, 0.15)',
                }}
            >
                {/* Background blobs */}
                <div className="puc-hero-blob" style={{ width: '400px', height: '400px', top: '-80px', left: '-120px', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
                <div className="puc-hero-blob" style={{ width: '350px', height: '350px', bottom: '-60px', right: '-100px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />
                <div className="puc-hero-blob" style={{ width: '250px', height: '250px', top: '40%', left: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)' }} />

                <div
                    style={{
                        maxWidth: '1280px',
                        margin: '0 auto',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(40px, 6vw, 80px)',
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Left column — text & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                        style={{ flex: '1 1 min(480px, 100%)', minWidth: 0, zIndex: 2 }}
                    >
                        {/* Pill badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontFamily: "'Nunito', sans-serif",
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: '#6366F1',
                                background: 'rgba(99,102,241,0.08)',
                                padding: '6px 16px',
                                borderRadius: '9999px',
                                marginBottom: '18px',
                            }}
                        >
                            <span style={{ fontSize: '1rem' }}>🎓</span>
                            Pre-University College
                        </motion.div>

                        {/* Headline */}
                        <h1
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                                fontWeight: 900,
                                lineHeight: 1.12,
                                color: '#0F172A',
                                margin: '0 0 16px',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Master Your{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 50%, #A855F7 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                PUC Journey
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            style={{
                                fontFamily: "'Nunito', 'Inter', sans-serif",
                                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                                lineHeight: 1.7,
                                color: '#334155',
                                maxWidth: '520px',
                                margin: '0 0 28px',
                                letterSpacing: '0.005em',
                            }}
                        >
                            Expert coaching for 1st &amp; 2nd PUC across <strong>Science</strong>,{' '}
                            <strong>Commerce</strong>, and <strong>Arts</strong>. Build the academic foundation
                            that opens doors to top universities and career paths.
                        </p>

                        {/* CTAs */}
                        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
                            <button className="puc-hero-cta-primary">
                                Enquire Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                            <button className="puc-hero-cta-secondary">
                                Explore Streams
                            </button>
                        </div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{
                                display: 'flex',
                                gap: '32px',
                                flexWrap: 'wrap',
                                padding: '18px 24px',
                                background: 'rgba(255,255,255,0.7)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: '16px',
                                border: '1px solid rgba(99,102,241,0.08)',
                                maxWidth: 'fit-content',
                            }}
                        >
                            {PUC_HERO_STATS.map((stat) => (
                                <Counter key={stat.label} value={stat.value} label={stat.label} />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right column — animated stream cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        style={{ position: 'relative', flex: '1 1 360px' }}
                    >
                        <div className={s.streamGrid} style={{ marginInline: 'auto', textAlign: 'center' }}>
                            {PUC_STREAMS.map((stream, i) => (
                                <div key={stream.id} className={`${s.streamCard} ${s[`streamCard${i}`]}`}>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                                    >
                                        <div className={`${s.iconWrap} ${s[streamIcons[i]]}`}>
                                            {stream.icon}
                                        </div>
                                        <h4 className={`${s.cardLabel} ${s[`cardLabel${i}`]}`}>{stream.title}</h4>
                                        <p className={`${s.cardTagline} ${(i === 1 || i === 2) ? s.cardTaglineNoJustify : ''}`}>{stream.tagline}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        {/* Floating accent ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute',
                                top: '-25px',
                                right: '-25px',
                                width: '100px',
                                height: '100px',
                                border: '2px dashed rgba(99,102,241,0.12)',
                                borderRadius: '50%',
                                zIndex: -1,
                            }}
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default PUCHeroSection;
