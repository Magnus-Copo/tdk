import React from 'react';
import PropTypes from 'prop-types';
const founder1 = '/images/founder_person1.png';
const founder2 = '/images/founder_person2.png';

const Hero = () => {
    const handleScroll = () => {
        const programsSection = document.getElementById('programs');
        if (programsSection) {
            programsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="section--hero" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 'clamp(108px, 16vh, 132px)', paddingBottom: 'clamp(40px, 8vh, 60px)', boxShadow: 'inset 0 -1px 0 rgba(148, 163, 184, 0.15)' }}>

            {/* Background Gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, #EEF2FF 0%, #F8FAFC 50%, #E2E8F0 100%)', zIndex: -2 }}></div>

            {/* --- CONTENT --- */}
            <div
                className="hero-container"
                style={{ position: 'relative', width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 24px', zIndex: 10 }}
            >
                {/* Founder Images - Static Left & Right */}
                <div
                    style={{ position: 'absolute', top: '20px', left: '20px', width: '280px', maxWidth: '18vw', zIndex: 1 }}
                    className="hidden lg:block"
                >
                    <div>
                        <img src={founder1} alt="Founder President"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.4)', border: '4px solid rgba(255,255,255,0.6)' }}
                            onError={(e) => e.target.style.display = 'none'}
                        />
                    </div>
                </div>

                <div
                    style={{ position: 'absolute', top: '20px', right: '20px', width: '280px', maxWidth: '18vw', zIndex: 1 }}
                    className="hidden lg:block"
                >
                    <div>
                        <img src={founder2} alt="Founder Secretary"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.4)', border: '4px solid rgba(255,255,255,0.6)' }}
                            onError={(e) => e.target.style.display = 'none'}
                        />
                    </div>
                </div>

                {/* Center Content */}
                <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>

                    {/* Kannada Text - Static 2 Lines */}
                    <h1
                        className="hero-kannada-title"
                        style={{
                            fontFamily: "'Noto Sans Kannada', sans-serif",
                            fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)',
                            lineHeight: 1.4,
                            fontWeight: 800,
                            margin: '0 auto 32px',
                            maxWidth: '100%',
                            textAlign: 'center',
                            padding: '0 clamp(12px, 3vw, 24px)',
                            color: '#020617'
                        }}
                    >
                        <span className="hero-kannada-line" style={{ whiteSpace: 'nowrap' }}>ಶ್ರೀಮತಿ ಶ್ರೀ ಕಮಲಾ & ತಿಮ್ಮಪ್ಪ ಎಜುಕೇಷನಲ್</span>
                        <br />
                        <span className="hero-kannada-line" style={{ whiteSpace: 'nowrap' }}>ಆ್ಯಂಡ್ ಚಾರಿಟೇಬಲ್ ಟ್ರಸ್ಟ್ (ರಿ)</span>
                    </h1>

                    {/* The London Kids Inspired Container - Simplified */}
                    <div
                        style={{
                            position: 'relative',
                            padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3vw, 24px)',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            backgroundColor: 'rgba(226, 232, 240, 0.45)',
                            boxShadow: '0 20px 40px -10px rgba(0, 33, 71, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.3)',
                            border: '1.2px solid rgba(212, 175, 55, 0.3)',
                        }}
                    >

                        {/* Content Layer */}
                        <div>
                            {/* Ornaments */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px', opacity: 1 }}>
                                <StarIcon color="#B8860B" size={24} />
                                <span style={{ height: '2px', width: '60px', background: 'linear-gradient(90deg, transparent, #B8860B, transparent)', borderRadius: '2px' }}></span>
                                <StarIcon color="#B8860B" size={24} />
                            </div>

                            {/* Main Title - TDK (Solar Authority on Slate) */}
                            <h1 style={{
                                fontFamily: "'Montserrat', sans-serif", // Modern Geometric (Sans-Serif)
                                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                                fontWeight: 900, // Black Weight
                                letterSpacing: '-0.02em', // Tight structural tracking
                                margin: '0 0 8px',
                                lineHeight: 0.9,
                                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 40%, #B45309 100%)', // Liquid Gold
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))',
                                textAlign: 'center'
                            }}>
                                TDK
                            </h1>

                            <p style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 'clamp(0.65rem, 1.5vw, 1rem)',
                                fontWeight: 600, // Semi-Bold
                                letterSpacing: 'clamp(0.1em, 0.3em, 0.3em)', // Responsive spacing
                                textTransform: 'uppercase',
                                marginTop: '12px',
                                color: '#002147', // Deep Institutional Navy
                                textShadow: 'none',
                                textAlign: 'center',
                                wordWrap: 'break-word'
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
                    </div>

                    {/* Action Buttons - Simplified */}
                    <div
                        style={{ display: 'flex', gap: 'clamp(12px, 2vw, 24px)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'clamp(24px, 4vw, 48px)', position: 'relative', zIndex: 50 }}
                    >
                        <button
                            onClick={() => globalThis.location.href = '/contact'}
                            style={{
                                fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)',
                                padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                                color: 'white',
                                border: 'none',
                                fontWeight: 700,
                                boxShadow: '0 10px 25px -5px rgba(67, 56, 202, 0.4)',
                                cursor: 'pointer',
                                letterSpacing: '0.02em',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Contact Us
                        </button>

                        <button
                            onClick={handleScroll}
                            style={{
                                fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)',
                                padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)',
                                borderRadius: '20px',
                                background: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(8px)',
                                color: '#1e293b',
                                border: '1px solid rgba(255, 255, 255, 0.6)',
                                fontWeight: 700,
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                letterSpacing: '0.02em',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                            }}
                        >
                            View Programs
                        </button>
                    </div>
                </div>
            </div>

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

export default Hero;

