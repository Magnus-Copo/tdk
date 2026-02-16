import React from 'react';
import PropTypes from 'prop-types';
import { HERO_STATS } from '../data/preschoolData';
const heroIllustration = '/images/hero-illustration.jpg';


const Counter = ({ value, label }) => {
    return (
        <div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--color-neutral-900)' }}>
                {value}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#90A4AE' }}>{label}</div>
        </div>
    );
};

Counter.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const PreSchoolHero = () => {
    return (
        <section id="hero" style={{ padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 24px) clamp(40px, 6vw, 80px)', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FFF7ED 0%, #FFFBEB 50%, #FFFFFF 100%)', boxShadow: 'inset 0 -1px 0 rgba(251, 146, 60, 0.15)' }}>

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(24px, 4vw, 60px)', alignItems: 'center', textAlign: 'left' }}>
                    <div className="reveal active">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'hsl(var(--card))', padding: '8px 16px', borderRadius: '9999px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: '24px' }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-calm)"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-neutral-700)' }}>Licensed & Accredited Since 2010</span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px' }}>
                            Where Little Minds <span style={{ fontWeight: 800, color: '#06B6D4' }}>Bloom & Grow</span>
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



                        <div style={{ display: 'flex', gap: 'clamp(16px, 4vw, 48px)', marginTop: 'clamp(24px, 4vw, 48px)', flexWrap: 'wrap' }}>
                            {HERO_STATS.map((stat) => (
                                <Counter key={stat.label} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                    </div>

                    <div className="reveal active delay-200" style={{ position: 'relative' }}>
                        <div
                            style={{
                                borderRadius: '24px',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src={heroIllustration}
                                alt="Children playing and learning at preschool"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                style={{ width: '100%', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreSchoolHero;
