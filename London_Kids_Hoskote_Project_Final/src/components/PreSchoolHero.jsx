import React from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { HERO_STATS } from '../data/preschoolData';


const Counter = ({ value, label }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);

    // Parse numeric part and suffix
    const numericValue = parseInt(value.replace(/\D/g, ''), 10);
    const suffix = value.replace(/[0-9]/g, '');

    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    React.useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, { duration: 2.5, ease: "circOut" });
            return () => controls.stop();
        }
    }, [isInView, numericValue, count]);

    return (
        <div ref={ref}>
            <motion.div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--color-neutral-900)' }}>
                {rounded}
            </motion.div>
            <div style={{ fontSize: '0.875rem', color: '#90A4AE' }}>{label}</div>
        </div>
    );
};

const PreSchoolHero = () => {
    return (
        <section id="hero" style={{ padding: '80px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FAFBFF, #FFFFFF)' }}>
            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, 50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 1.1, 1],
                    backgroundColor: [
                        "rgba(6, 182, 212, 0.3)",  // Cyan-500
                        "rgba(59, 130, 246, 0.3)", // Blue-500
                        "rgba(147, 51, 234, 0.3)", // Purple-600
                        "rgba(6, 182, 212, 0.3)"   // Back to Cyan
                    ]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: 0,
                    willChange: 'transform'
                }}
            />
            <motion.div
                animate={{
                    x: [0, -80, -40, 0],
                    y: [0, 60, -30, 0],
                    scale: [1, 1.3, 1.1, 1],
                    backgroundColor: [
                        "rgba(251, 146, 60, 0.3)", // Orange-400 (Coral-ish)
                        "rgba(252, 211, 77, 0.3)", // Amber-300
                        "rgba(244, 63, 94, 0.3)",  // Rose-500
                        "rgba(251, 146, 60, 0.3)"  // Back to Orange
                    ]
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '-10%',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    zIndex: 0,
                    willChange: 'transform'
                }}
            />
            <motion.div
                animate={{
                    x: [0, 60, -20, 0],
                    y: [0, 40, 80, 0],
                    scale: [1, 1.2, 1.05, 1],
                    backgroundColor: [
                        "rgba(236, 72, 153, 0.3)", // Pink-500
                        "rgba(192, 38, 211, 0.3)", // Fuchsia-600
                        "rgba(139, 92, 246, 0.3)", // Violet-500
                        "rgba(236, 72, 153, 0.3)"  // Back to Pink
                    ]
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 0,
                    willChange: 'transform'
                }}
            />
            <motion.div
                animate={{
                    x: [0, -40, 20, 0],
                    y: [0, -50, 20, 0],
                    scale: [1, 1.15, 1],
                    backgroundColor: [
                        "rgba(132, 204, 22, 0.3)", // Lime-500
                        "rgba(16, 185, 129, 0.3)", // Emerald-500
                        "rgba(20, 184, 166, 0.3)", // Teal-500
                        "rgba(132, 204, 22, 0.3)"  // Back to Lime
                    ]
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    width: '450px',
                    height: '450px',
                    borderRadius: '50%',
                    filter: 'blur(70px)',
                    zIndex: 0,
                    willChange: 'transform'
                }}
            />

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', textAlign: 'left' }}>
                    <div className="reveal active">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'hsl(var(--card))', padding: '8px 16px', borderRadius: '9999px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: '24px' }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-calm)"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-neutral-700)' }}>Licensed & Accredited Since 2010</span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px' }}>
                            Where Little Minds <span className="gradient-text" style={{ fontWeight: 800 }}>Bloom & Grow</span>
                        </h1>

                        <p style={{ fontSize: '1.125rem', color: 'var(--color-neutral-700)', marginBottom: '32px', maxWidth: '500px' }}>
                            A warm, nurturing preschool environment where children ages 2-5 discover the joy of learning through play, exploration, and creativity.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <button className="btn-primary" onClick={() => (typeof globalThis !== 'undefined' && globalThis.window && globalThis.window.showBookingModal?.())}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: '8px' }}><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                                Book Trial Playdate
                            </button>
                            <a href="#programs" className="btn-secondary">Virtual Tour</a>
                        </div>



                        <div style={{ display: 'flex', gap: '48px', marginTop: '48px' }}>
                            {HERO_STATS.map((stat) => (
                                <Counter key={stat.label} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                    </div>

                    <div className="reveal active delay-200" style={{ position: 'relative' }}>
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                borderRadius: '24px',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                                overflow: 'hidden',
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden',
                                willChange: 'transform'
                            }}
                        >
                            <img
                                src="/src/assets/images/hero-illustration.jpg"
                                alt="Children playing and learning at preschool"
                                style={{ width: '100%', display: 'block' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreSchoolHero;
