import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const PreschoolProgramCard = ({ title, age, description, tags, image, color, enrollment, className = '' }) => {
    const ref = useRef(null);

    // Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring Physics for smooth tilt
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Tilt Transforms
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

    // Spotlight Positioning
    const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5; // -0.5 to 0.5
        const yPct = mouseY / height - 0.5; // -0.5 to 0.5
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                perspective: 1200,
                transformStyle: "preserve-3d"
            }}
            className={`relative group h-full ${className}`}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 20px 50px -20px rgba(0,0,0,0.1)',
                }}
                className="relative h-full overflow-visible transition-shadow duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
            >
                {/* --- SPOTLIGHT EFFECT --- */}
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0,
                        borderRadius: '24px',
                        background: `radial-gradient(circle at ${spotlightX.get()} ${spotlightY.get()}, ${color}20, transparent 80%)`, // dynamic color opacity
                        opacity: 0,
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                {/* --- 3D FLOATING IMAGE (Z-Index: 30px) --- */}
                <div
                    style={{
                        height: '220px',
                        position: 'relative',
                        borderRadius: '24px 24px 0 0',
                        overflow: 'hidden',
                        transform: 'translateZ(30px)', // Parallax Depth
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <motion.img
                        src={image}
                        alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.8 }}
                    />
                    {/* Gradient Overlay for Text Contrast */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 60%)' }} />

                    {/* Floating Age Pill (Z-Index: 50px) */}
                    <div style={{ position: 'absolute', top: 16, left: 16, transform: 'translateZ(20px)' }}>
                        <span style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            color: color === 'var(--color-accent)' ? 'black' : color,
                            padding: '6px 14px',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            border: '1px solid white'
                        }}>
                            {age}
                        </span>
                    </div>
                </div>

                {/* --- CONTENT CONTAINER --- */}
                <div style={{ padding: 'clamp(16px, 3vw, 24px)', position: 'relative', transformStyle: 'preserve-3d' }}>

                    {/* Floating Title & Desc (Z-Index: 60px) */}
                    <div style={{ transform: 'translateZ(60px)', marginBottom: '16px' }}>
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                            fontWeight: 800,
                            marginBottom: '12px',
                            color: 'var(--color-neutral-900)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            textAlign: 'center',
                            padding: '0 clamp(8px, 2vw, 16px)'
                        }}>
                            {title}
                        </h3>
                        <p style={{
                            color: 'var(--color-neutral-600)',
                            lineHeight: 1.6,
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                            textAlign: 'left',
                            padding: '0 clamp(8px, 2vw, 16px)'
                        }}>
                            {description}
                        </p>
                    </div>

                    {/* Floating Tags (Z-Index: 80px) */}
                    {tags && (
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                            marginBottom: '24px',
                            transform: 'translateZ(50px)'
                        }}>
                            {tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: color,
                                        background: `${color}10`,
                                        padding: '6px 12px',
                                        borderRadius: '8px',
                                        border: `1px solid ${color}25`,
                                        cursor: 'default'
                                    }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    )}

                    {/* Enrollment Bar (Z-Index: 40px) */}
                    {enrollment && (
                        <div style={{
                            transform: 'translateZ(40px)',
                            background: '#F1F5F9',
                            borderRadius: '12px',
                            padding: '12px',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px', fontWeight: 600 }}>
                                <span style={{ color: '#64748B' }}>Enrollment</span>
                                <span style={{ color: color }}>{enrollment >= 90 ? 'High Demand' : 'Open'}</span>
                            </div>
                            <div style={{ background: '#E2E8F0', borderRadius: '9999px', height: '6px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${enrollment}%` }}
                                    transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                                    style={{
                                        background: `linear-gradient(90deg, ${color}, ${color})`,
                                        height: '100%',
                                        borderRadius: '9999px',
                                        boxShadow: `0 0 10px ${color}60`
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

PreschoolProgramCard.propTypes = {
    title: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    enrollment: PropTypes.number,
    className: PropTypes.string,
};

export default PreschoolProgramCard;
