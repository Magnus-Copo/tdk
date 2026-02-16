import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { HERO_STATS } from '../data/primarySchoolData';
import s from '../styles/PrimarySchoolHero.module.scss';

/**
 * Simplified counter for hero stats — no animation
 * @param {{ value: string, label: string }} props
 */
const Counter = ({ value, label }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div
                style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {value}
            </div>
            <div
                style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#475569',
                    marginTop: '4px',
                    letterSpacing: '0.02em',
                }}
            >
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
 * PrimarySchoolHero — Full-width hero with animated gradient blobs,
 * dual-column layout, counter stats, and CTA buttons.
 */
const PrimarySchoolHero = () => {
    return (
        <>
            <style>{`
                .ps-hero-blob {
                    position: absolute;
                    border-radius: 50%;
                    will-change: transform;
                    pointer-events: none;
                }
                .ps-hero-cta-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 32px;
                    border-radius: 12px;
                    border: none;
                    font-family: 'Nunito', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #FFFFFF;
                    background: linear-gradient(135deg, #1E40AF, #3B82F6);
                    cursor: pointer;
                    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.35);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    text-decoration: none;
                }
                .ps-hero-cta-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.45);
                }
                .ps-hero-cta-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 32px;
                    border-radius: 12px;
                    border: 1.5px solid #CBD5E1;
                    font-family: 'Nunito', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #334155;
                    background: rgba(255,255,255,0.7);
                    backdrop-filter: blur(8px);
                    cursor: pointer;
                    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
                    text-decoration: none;
                }
                .ps-hero-cta-secondary:hover {
                    transform: translateY(-2px);
                    border-color: #3B82F6;
                    background: rgba(239, 246, 255, 0.8);
                }
                @media (max-width: 768px) {
                    .ps-hero-stats-row {
                        gap: 24px !important;
                    }
                }
            `}</style>

            <section
                id="primary-hero"
                style={{
                    padding: '80px 24px 80px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(180deg, #EFF6FF 0%, #DBEAFE 40%, #FFFFFF 100%)',
                    boxShadow: 'inset 0 -1px 0 rgba(59, 130, 246, 0.15)',
                }}
            >
                {/* ── Content ── */}
                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                            gap: 'clamp(24px, 4vw, 60px)',
                            alignItems: 'center',
                            textAlign: 'left',
                        }}
                    >
                        {/* Left column */}
                        <div>
                            {/* Badge */}
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(255,255,255,0.85)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '8px 18px',
                                    borderRadius: '9999px',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                                    border: '1px solid rgba(59,130,246,0.12)',
                                    marginBottom: '24px',
                                }}
                            >
                                <span
                                    style={{
                                        width: '7px',
                                        height: '7px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #3B82F6, #10B981)',
                                    }}
                                />
                                <span
                                    style={{
                                        fontFamily: "'Nunito', sans-serif",
                                        fontSize: '0.88rem',
                                        fontWeight: 700,
                                        color: '#475569',
                                        letterSpacing: '0.04em',
                                    }}
                                >
                                    CBSE · ICSE · Karnataka State Board
                                </span>
                            </div>

                            {/* Headline */}
                            <h1
                                style={{
                                    fontFamily: "'Nunito', sans-serif",
                                    fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                                    lineHeight: 1.12,
                                    fontWeight: 800,
                                    letterSpacing: '-0.025em',
                                    color: '#0F172A',
                                    marginBottom: '24px',
                                }}
                            >
                                Academic Excellence{' '}
                                <span
                                    style={{
                                        background: 'linear-gradient(135deg, #1E40AF, #3B82F6, #10B981)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    Starts Here
                                </span>
                            </h1>

                            {/* Sub-heading */}
                            <p
                                style={{
                                    fontFamily: "'Nunito', 'Inter', sans-serif",
                                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                                    lineHeight: 1.7,
                                    color: '#334155',
                                    marginBottom: '36px',
                                    maxWidth: '520px',
                                }}
                            >
                                Expert-led tuitions for Grades 1 through 10 across CBSE, ICSE, and Karnataka
                                State Boards. We build conceptual clarity, exam confidence, and a lifelong love
                                for learning.
                            </p>

                            {/* CTAs */}
                            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                                <a href="#primary-contact" className="ps-hero-cta-primary">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                    Enquire Now
                                </a>
                                <a href="#tuition-programs" className="ps-hero-cta-secondary">
                                    View Programs
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                                    </svg>
                                </a>
                            </div>

                            {/* Stats row */}
                            <div
                                className="ps-hero-stats-row"
                                style={{
                                    display: 'flex',
                                    gap: 'clamp(16px, 4vw, 40px)',
                                    marginTop: 'clamp(24px, 4vw, 52px)',
                                    paddingTop: '28px',
                                    borderTop: '1px solid rgba(148,163,184,0.18)',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {HERO_STATS.map((stat) => (
                                    <Counter key={stat.label} value={stat.value} label={stat.label} />
                                ))}
                            </div>
                        </div>

                        {/* Right column — animated board cards with SCSS module */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                            style={{ position: 'relative' }}
                        >
                            <div className={s.boardGrid} style={{ marginInline: 'auto', textAlign: 'center' }}>
                                {/* ── CBSE — Graduation Cap ── */}
                                <div className={`${s.boardCard} ${s.boardCard0}`}>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                                    >
                                        <div className={`${s.iconWrap} ${s.iconCbse}`}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                                <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                                            </svg>
                                        </div>
                                        <h4 className={`${s.cardLabel} ${s.cardLabel0}`}>CBSE</h4>
                                        <p className={s.cardSub}>Expert Coaching</p>
                                    </motion.div>
                                </div>

                                {/* ── ICSE — Atom / Science ── */}
                                <div className={`${s.boardCard} ${s.boardCard1}`}>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.52, duration: 0.5 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                                    >
                                        <div className={`${s.iconWrap} ${s.iconIcse}`}>
                                            <span className={s.atomOrbit} />
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="2" />
                                                <ellipse cx="12" cy="12" rx="10" ry="4" />
                                                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                                                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                                            </svg>
                                        </div>
                                        <h4 className={`${s.cardLabel} ${s.cardLabel1}`}>ICSE</h4>
                                        <p className={s.cardSub}>Expert Coaching</p>
                                    </motion.div>
                                </div>

                                {/* ── State Board — Landmark / Temple ── */}
                                <div className={`${s.boardCard} ${s.boardCard2}`}>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.64, duration: 0.5 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                                    >
                                        <div className={`${s.iconWrap} ${s.iconState}`}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 21h18" />
                                                <path d="M5 21V7l7-4 7 4v14" />
                                                <path d="M9 21v-6h6v6" />
                                                <path d="M10 10h4" />
                                            </svg>
                                        </div>
                                        <h4 className={`${s.cardLabel} ${s.cardLabel2}`}>State Board</h4>
                                        <p className={s.cardSub}>Expert Coaching</p>
                                    </motion.div>
                                </div>

                                {/* ── Grade 10 — Trophy + Sparkles ── */}
                                <div className={`${s.boardCard} ${s.boardCard3}`}>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.76, duration: 0.5 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                                    >
                                        <div className={`${s.iconWrap} ${s.iconTrophy}`}>
                                            <span className={s.sparkle} />
                                            <span className={s.sparkle} />
                                            <span className={s.sparkle} />
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
                                                <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
                                                <path d="M4 22h16" />
                                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                                <path d="M18 2H6v7a6 6 0 0012 0V2z" />
                                            </svg>
                                        </div>
                                        <h4 className={`${s.cardLabel} ${s.cardLabel3}`}>Grade 10</h4>
                                        <p className={s.cardSub}>Board Exam Mastery</p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating accent ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    width: '120px',
                                    height: '120px',
                                    border: '2px dashed rgba(59,130,246,0.15)',
                                    borderRadius: '50%',
                                    zIndex: -1,
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrimarySchoolHero;
