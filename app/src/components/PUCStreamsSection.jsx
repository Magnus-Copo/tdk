import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { PUC_STREAMS } from '../data/preUniversityData';
import styles from '../styles/PUCStreams.module.scss';

/**
 * PUCStreamsSection — Stream cards (Science / Commerce / Arts)
 * with PUC year filter pills, bento grid, and expandable subject lists.
 */
const PUCStreamsSection = () => {
    const sectionRef = React.useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
    const [expandedCard, setExpandedCard] = React.useState(null);

    return (
        <section ref={sectionRef} className={styles.streamsSection}>
            <div className={styles.patternOverlay} />

            <div className={styles.streamsContainer}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    {/* Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 }}
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
                            marginBottom: '16px',
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>📚</span>
                        Academic Streams
                    </motion.div>

                    <h2
                        style={{
                            fontFamily: "'Nunito', sans-serif",
                            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                            fontWeight: 900,
                            color: '#0F172A',
                            margin: '0 0 12px',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.15,
                        }}
                    >
                        Choose Your{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #6366F1, #3B82F6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Stream
                        </span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Nunito', 'Inter', sans-serif",
                            fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)',
                            lineHeight: 1.7,
                            color: '#475569',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        Expert tuition for 1st &amp; 2nd PUC across all three Karnataka State Board streams.
                        Every subject, every chapter, every concept covered.
                    </p>
                </motion.div>

                {/* Stream cards grid */}
                <div className={styles.streamsGrid}>
                    {PUC_STREAMS.map((stream, i) => (
                        <motion.div
                            key={stream.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.3 + i * 0.12,
                                duration: 0.6,
                                type: 'spring',
                                stiffness: 100,
                                damping: 14,
                            }}
                            className={styles.streamCard}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                const y = ((e.clientY - rect.top) / rect.height) * 100;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                            }}
                        >
                            {/* Gradient accent bar */}
                            <div
                                className={styles.accentBar}
                                style={{
                                    background: `linear-gradient(90deg, ${stream.gradientFrom}, ${stream.gradientTo})`,
                                }}
                            />

                            {/* Icon */}
                            <div
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: stream.accentBg,
                                    color: stream.accentColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '18px',
                                }}
                            >
                                {stream.icon}
                            </div>

                            {/* Title & tagline */}
                            <h3
                                style={{
                                    fontFamily: "'Nunito', sans-serif",
                                    fontSize: '1.35rem',
                                    fontWeight: 900,
                                    color: '#0F172A',
                                    margin: '0 0 4px',
                                    lineHeight: 1.2,
                                }}
                            >
                                {stream.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "'Nunito', sans-serif",
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: stream.accentColor,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    margin: '0 0 14px',
                                }}
                            >
                                {stream.tagline}
                            </p>

                            {/* Description */}
                            <p
                                style={{
                                    fontFamily: "'Nunito', 'Inter', sans-serif",
                                    fontSize: '0.92rem',
                                    lineHeight: 1.7,
                                    color: '#334155',
                                    margin: '0 0 18px',
                                }}
                            >
                                {stream.description}
                            </p>

                            {/* Career path tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                                {stream.careerPaths.map((path) => (
                                    <span
                                        key={path}
                                        style={{
                                            fontFamily: "'Nunito', sans-serif",
                                            fontSize: '0.82rem',
                                            fontWeight: 600,
                                            padding: '4px 12px',
                                            borderRadius: '8px',
                                            background: `${stream.accentColor}0D`,
                                            color: stream.accentColor,
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {path}
                                    </span>
                                ))}
                            </div>

                            {/* Expand subjects toggle */}
                            <button
                                onClick={() => setExpandedCard(expandedCard === stream.id ? null : stream.id)}
                                style={{
                                    fontFamily: "'Nunito', sans-serif",
                                    fontSize: '0.88rem',
                                    fontWeight: 700,
                                    color: stream.accentColor,
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '6px 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'opacity 0.2s ease',
                                }}
                            >
                                {expandedCard === stream.id ? 'Hide Subjects' : 'View Subjects'}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{
                                        transform: expandedCard === stream.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {/* Expandable subject list */}
                            <AnimatePresence>
                                {expandedCard === stream.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '8px',
                                                paddingTop: '14px',
                                                borderTop: '1px solid rgba(148,163,184,0.15)',
                                                marginTop: '10px',
                                            }}
                                        >
                                            {stream.subjects.map((subject) => (
                                                <span
                                                    key={subject}
                                                    style={{
                                                        fontFamily: "'Nunito', sans-serif",
                                                        fontSize: '0.82rem',
                                                        fontWeight: 600,
                                                        padding: '5px 14px',
                                                        borderRadius: '9999px',
                                                        background: stream.accentBg,
                                                        color: '#334155',
                                                    }}
                                                >
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PUCStreamsSection;
