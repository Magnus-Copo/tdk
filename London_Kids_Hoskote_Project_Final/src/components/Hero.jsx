/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';

// --- Magnetic Button Component ---
const MagneticButton = ({ children, className, style, onClick, ...props }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        x.set((clientX - center.x) * 0.3); // Magnetic pull strength
        y.set((clientY - center.y) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            className={className}
            style={{ ...style, x: mouseX, y: mouseY }}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </motion.button>
    );
};

MagneticButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};


// --- Ethereal 3D Elements ---
const FloatingOrb = ({ position, color, speed, scale }) => {
    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
            <mesh position={position} scale={scale}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color={color}
                    envMapIntensity={0.8}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.1}
                    roughness={0.2}
                    distort={0.4}
                    speed={2}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
};

FloatingOrb.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    color: PropTypes.string.isRequired,
    speed: PropTypes.number,
    scale: PropTypes.number,
};

const EtherealBackground = () => {
    return (
        <group>
            {/* Ambient Particles */}
            <Sparkles count={150} scale={25} size={4} speed={0.4} opacity={0.5} color="#6366f1" />
            <Sparkles count={100} scale={20} size={6} speed={0.3} opacity={0.3} color="#F59E0B" />

            {/* Floating Knowledge Orbs */}
            <FloatingOrb position={[-6, 4, -5]} color="#a5b4fc" speed={1.5} scale={1.8} />
            <FloatingOrb position={[7, -5, -8]} color="#fcd34d" speed={1.2} scale={2.5} />
            <FloatingOrb position={[-8, -4, -4]} color="#fca5a5" speed={2} scale={1.2} />
            <FloatingOrb position={[8, 5, -6]} color="#6ee7b7" speed={1.8} scale={1.5} />
        </group>
    );
};


const Hero = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: (custom) => custom * 20 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.6 }
        }
    };

    const handleScroll = () => {
        const programsSection = document.getElementById('programs');
        if (programsSection) {
            programsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleBooking = () => {
        globalThis.showBookingModal?.();
    };

    const scrollToTop = () => {
        if (globalThis.scrollTo) {
            globalThis.scrollTo({ top: globalThis.innerHeight, behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="section--hero" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Background Gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, #f8fafc 0%, #e2e8f0 100%)', zIndex: -2 }}></div>

            {/* 3D Canvas */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
                    <ambientLight intensity={0.8} />
                    <spotLight position={[10, 20, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow color="#ffffff" />
                    <pointLight position={[-10, -10, -5]} intensity={0.8} color="#6366f1" />
                    <Suspense fallback={null}>
                        <EtherealBackground />
                        <Environment preset="studio" />
                    </Suspense>
                </Canvas>
            </div>

            {/* --- CONTENT --- */}
            <motion.div
                className="hero-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ position: 'relative', width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 24px', zIndex: 10 }}
            >
                {/* Founder Images - Floating Left & Right */}
                <motion.div
                    custom={-1}
                    variants={imageVariants}
                    style={{ position: 'absolute', top: '20px', left: '20px', width: '280px', maxWidth: '18vw', zIndex: 1 }}
                    className="hidden lg:block"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                        <TiltCard src="/src/assets/images/founder_person1.png" alt="Founder President" label="Founder President" />
                    </motion.div>
                </motion.div>

                <motion.div
                    custom={1}
                    variants={imageVariants}
                    style={{ position: 'absolute', top: '20px', right: '20px', width: '280px', maxWidth: '18vw', zIndex: 1 }}
                    className="hidden lg:block"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    >
                        <TiltCard src="/src/assets/images/founder_person2.png" alt="Founder Secretary" label="Founder Secretary" />
                    </motion.div>
                </motion.div>

                {/* Center Content */}
                <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>

                    {/* Kannada Text - Premium Animated Gradient */}
                    <motion.h1
                        variants={itemVariants}
                        className="hero-plasma-text"
                        style={{
                            fontFamily: "'Noto Sans Kannada', sans-serif",
                            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                            lineHeight: 1.6,
                            fontWeight: 800,
                            margin: '0 auto 32px',
                        }}
                    >
                        ಶ್ರೀಮತಿ ಶ್ರೀ ಕಮಲಾ & ತಿಮ್ಮಪ್ಪ <br className="hidden md:block" /> ಎಜುಕೇಷನಲ್ ಆ್ಯಂಡ್ ಚಾರಿಟೇಬಲ್ ಟ್ರಸ್ಟ್ (ರಿ)

                    </motion.h1>
                    <style>{`
                        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;700;800&display=swap');

                        .hero-plasma-text {
                            background: linear-gradient(120deg, #020617 0%, #3b82f6 25%, #14b8a6 50%, #8b5cf6 75%, #020617 100%);
                            background-size: 200% auto;
                            -webkit-background-clip: text;
                            background-clip: text;
                            -webkit-text-fill-color: transparent;
                            color: transparent;
                            animation: plasma-flow 4s linear infinite !important;
                            display: inline-block;
                            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
                        }
                        @keyframes plasma-flow {
                            0% { background-position: 0% center; }
                            100% { background-position: -200% center; }
                        }
                        @keyframes prestige-gradient {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }
                    `}</style>

                    {/* The London Kids Inspired Container - Attempt 4 */}
                    <motion.div
                        variants={itemVariants}
                        onMouseMove={(e) => {
                            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - left) / width;
                            const y = (e.clientY - top) / height;
                            e.currentTarget.style.setProperty('--mouse-x', `${x * 100}%`);
                            e.currentTarget.style.setProperty('--mouse-y', `${y * 100}%`);
                        }}
                        style={{
                            position: 'relative',
                            padding: '32px 24px', // Minimized padding for a super-compact profile
                            borderRadius: '40px',
                            overflow: 'hidden',
                            isolation: 'isolate',
                            '--mouse-x': '50%',
                            '--mouse-y': '50%',
                            '--glow-opacity': 0,
                            '--anim-duration': '40s',
                            backgroundColor: 'rgba(226, 232, 240, 0.45)', // Harmonious Slate Silk
                            boxShadow: '0 20px 40px -10px rgba(0, 33, 71, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.3)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.setProperty('--glow-opacity', '0.6')}
                        onMouseLeave={(e) => e.currentTarget.style.setProperty('--glow-opacity', '0')}
                        whileHover={{ scale: 1.01, boxShadow: '0 30px 60px -12px rgba(0, 33, 71, 0.08)' }}
                    >
                        {/* Layer 1: Bottom Layer - Harmonious Slate Gradient */}
                        <div className="layer-live-colors" style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: -2,
                            background: 'linear-gradient(135deg, rgba(248, 250, 252, 1) 0%, rgba(226, 232, 240, 1) 30%, rgba(212, 175, 55, 0.08) 50%, rgba(226, 232, 240, 1) 70%, rgba(248, 250, 252, 1) 100%)',
                            backgroundSize: '400% 400%',
                            animation: 'prestige-gradient var(--anim-duration) ease infinite',
                        }} />

                        {/* Interactive Champagne Glow Follow */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: -1,
                            background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
                            opacity: 'var(--glow-opacity)',
                            transition: 'opacity 0.6s ease',
                            pointerEvents: 'none'
                        }} />

                        {/* Layer 2: Middle Layer - Slate Silk Glass */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: -1,
                            background: 'rgba(226, 232, 240, 0.15)',
                            backdropFilter: 'blur(32px) saturate(150%)',
                            WebkitBackdropFilter: 'blur(32px) saturate(150%)',
                            border: '1.2px solid rgba(212, 175, 55, 0.3)', // Silk Gold Border
                        }} />

                        {/* Content Layer */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            {/* Ornaments */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px', opacity: 1 }}>
                                <StarIcon color="#B8860B" size={24} />
                                <span style={{ height: '2px', width: '60px', background: 'linear-gradient(90deg, transparent, #B8860B, transparent)', borderRadius: '2px' }}></span>
                                <StarIcon color="#B8860B" size={24} />
                            </div>

                            {/* Main Title - TDK (Solar Authority on Slate) */}
                            <h1 style={{
                                fontFamily: "'Montserrat', sans-serif", // Modern Geometric (Sans-Serif)
                                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                                fontWeight: 900, // Black Weight
                                letterSpacing: '-0.02em', // Tight structural tracking
                                margin: '0 0 8px',
                                lineHeight: 0.9,
                                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 40%, #B45309 100%)', // Liquid Gold
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))'
                            }}>
                                TDK
                            </h1>

                            <p style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                                fontWeight: 600, // Semi-Bold
                                letterSpacing: '0.3em', // Airy Spacing
                                textTransform: 'uppercase',
                                marginTop: '12px',
                                color: '#002147', // Deep Institutional Navy
                                textShadow: 'none',
                            }}>
                                Group of Institutions
                            </p>

                            {/* Excellence Badge - Refined Green on Slate */}
                            <div style={{ marginTop: '24px' }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '10px 28px',
                                    background: 'rgba(6, 78, 59, 0.05)',
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '999px',
                                    border: '1.5px solid rgba(6, 78, 59, 0.25)',
                                    color: '#064e3b',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.04em',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.03)',
                                }}>
                                    🏆 Excellence in Education Since 2010
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Buttons (Restored Original Style with Acceleration Logic) */}
                    <motion.div
                        variants={itemVariants}
                        style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '48px', position: 'relative', zIndex: 50 }}
                        onHoverStart={(e) => {
                            const container = e.target.closest('.hero-container').querySelector('.layer-live-colors');
                            if (container) container.parentElement.style.setProperty('--anim-duration', '12s');
                        }}
                        onHoverEnd={(e) => {
                            const container = e.target.closest('.hero-container').querySelector('.layer-live-colors');
                            if (container) container.parentElement.style.setProperty('--anim-duration', '60s');
                        }}
                    >
                        <MagneticButton
                            onClick={handleBooking}
                            style={{
                                fontSize: '1.2rem',
                                padding: '16px 40px',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                                color: 'white',
                                border: 'none',
                                fontWeight: 700,
                                boxShadow: '0 10px 25px -5px rgba(67, 56, 202, 0.4)',
                                cursor: 'pointer',
                                letterSpacing: '0.02em',
                                offset: 10
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book a Tour
                        </MagneticButton>

                        <MagneticButton
                            onClick={handleScroll}
                            style={{
                                fontSize: '1.2rem',
                                padding: '16px 40px',
                                borderRadius: '20px',
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(8px)',
                                color: '#1e293b',
                                border: '1px solid rgba(255, 255, 255, 0.6)',
                                fontWeight: 700,
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                letterSpacing: '0.02em'
                            }}
                            whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.8)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Programs
                        </MagneticButton>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Arrow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', zIndex: 20 }}
                onClick={scrollToTop}
            >
                <div style={{ background: 'white', padding: '12px', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </motion.div>

        </section >
    );
};

// --- Helper Components ---
const StarIcon = ({ color, size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);
StarIcon.propTypes = { color: PropTypes.string, size: PropTypes.number };

const TiltCard = ({ src, alt, label }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ perspective: 1000, rotateX, rotateY, cursor: 'grab' }}
            whileHover={{ scale: 1.05 }}
        >
            <img src={src} alt={alt}
                style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.4)', border: '4px solid rgba(255,255,255,0.6)' }}
                onError={(e) => e.target.style.display = 'none'}
            />
            <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '10px 24px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', whiteSpace: 'nowrap', fontWeight: '800', color: '#1e3a8a', fontSize: '0.85rem', border: '1px solid #e2e8f0' }}>
                {label}
            </div>
        </motion.div>
    );
};
TiltCard.propTypes = { src: PropTypes.string.isRequired, alt: PropTypes.string, label: PropTypes.string.isRequired };

export default Hero;

