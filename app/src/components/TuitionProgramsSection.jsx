import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { TUITION_PROGRAMS } from '../data/primarySchoolData';

/**
 * TuitionProgramsSection — Filterable bento-style tuition program cards.
 * Filter by board type (All / CBSE / ICSE / Karnataka State).
 * Uses framer-motion AnimatePresence for smooth filter transitions.
 */
const TuitionProgramsSection = () => {
    const [activeBoard, setActiveBoard] = useState('All');
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

    const boards = ['All', 'CBSE', 'ICSE', 'Karnataka State'];

    const filtered =
        activeBoard === 'All'
            ? TUITION_PROGRAMS
            : TUITION_PROGRAMS.filter((p) => p.boards.includes(activeBoard));

    return (
        <>
            <style>{`
                .tp-card {
                    position: relative;
                    background: rgba(255,255,255,0.85);
                    backdrop-filter: blur(14px);
                    border-radius: 20px;
                    padding: 32px 28px;
                    border: 1.5px solid rgba(226,232,240,0.7);
                    overflow: hidden;
                    cursor: default;
                    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
                }
                .tp-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 16px 48px rgba(0,0,0,0.08);
                }
                .tp-card .tp-accent-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    border-radius: 20px 20px 0 0;
                }
                .tp-subject-chip {
                    font-family: 'Nunito', sans-serif;
                    font-size: 0.82rem;
                    font-weight: 600;
                    padding: 5px 14px;
                    border-radius: 9999px;
                    border: 1px solid #E2E8F0;
                    background: #F8FAFC;
                    color: #475569;
                    letter-spacing: 0.02em;
                }
                .tp-board-badge {
                    font-family: 'Nunito', sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    padding: 4px 12px;
                    border-radius: 6px;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                }
                @media (max-width: 768px) {
                    .tp-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            <section
                id="tuition-programs"
                ref={sectionRef}
                style={{
                    padding: 'clamp(70px, 10vw, 120px) clamp(16px, 4vw, 32px) clamp(40px, 6vw, 76px)',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 40%, #F8FAFC 60%, #FFFFFF 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
            >
                {/* Background dots pattern */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                        opacity: 0.25,
                        pointerEvents: 'none',
                    }}
                />

                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    {/* ── Heading ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 48px)' }}
                    >
                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontFamily: "'Nunito', sans-serif",
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: '#3B82F6',
                                padding: '6px 14px',
                                borderRadius: '9999px',
                                background: '#EFF6FF',
                                border: '1px solid #DBEAFE',
                                marginBottom: '16px',
                            }}
                        >
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6' }} />
                            Our Programs
                        </span>

                        <h2
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
                                fontWeight: 800,
                                lineHeight: 1.15,
                                letterSpacing: '-0.02em',
                                color: '#0F172A',
                                margin: '16px 0 12px',
                            }}
                        >
                            Expert Tuitions for{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #1E40AF, #3B82F6, #10B981)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Every Grade
                            </span>
                        </h2>
                        <p
                            style={{
                                fontFamily: "'Nunito', 'Inter', sans-serif",
                                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                                lineHeight: 1.7,
                                color: '#475569',
                                maxWidth: '560px',
                                margin: '0 auto',
                            }}
                        >
                            Structured, board-aligned coaching from Grades 1 through 10 — designed to build
                            deep understanding and exam-ready confidence.
                        </p>
                    </motion.div>

                    {/* ── Cards Grid ── */}
                    <motion.div
                        className="tp-grid"
                        layout
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '24px',
                        }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((program) => (
                                <motion.div
                                    key={program.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.92, y: -10 }}
                                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                    className="tp-card"
                                    style={{ borderColor: `${program.accentColor}18` }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = `${program.accentColor}40`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = `${program.accentColor}18`;
                                    }}
                                >
                                    <div className="tp-accent-bar" style={{ background: `linear-gradient(90deg, ${program.accentColor}, ${program.accentColor}88)` }} />

                                    {/* Icon + Title */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                                        <div
                                            style={{
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '14px',
                                                background: program.accentBg,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: program.accentColor,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {program.icon}
                                        </div>
                                        <div>
                                            <h3
                                                style={{
                                                    fontFamily: "'Nunito', sans-serif",
                                                    fontSize: '1.15rem',
                                                    fontWeight: 800,
                                                    color: '#0F172A',
                                                    margin: 0,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {program.title}
                                            </h3>
                                            <span
                                                style={{
                                                    fontFamily: "'Nunito', sans-serif",
                                                    fontSize: '0.88rem',
                                                    fontWeight: 600,
                                                    color: program.accentColor,
                                                }}
                                            >
                                                {program.grades}
                                            </span>
                                        </div>
                                    </div>

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
                                        {program.description}
                                    </p>

                                    {/* Board badges */}
                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                                        {program.boards.map((board) => (
                                            <span
                                                key={board}
                                                className="tp-board-badge"
                                                style={{
                                                    background: board === 'CBSE' ? '#EFF6FF' : board === 'ICSE' ? '#F5F3FF' : '#ECFDF5',
                                                    color: board === 'CBSE' ? '#1E40AF' : board === 'ICSE' ? '#6D28D9' : '#047857',
                                                }}
                                            >
                                                {board}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Subject chips */}
                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                        {program.subjects.map((sub) => (
                                            <span key={sub} className="tp-subject-chip">
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default TuitionProgramsSection;
