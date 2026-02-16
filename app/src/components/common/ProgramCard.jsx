import React from 'react';
import PropTypes from 'prop-types';

const ProgramCard = ({ title, age, description, tags, image, color, enrollment, className = '' }) => {
    return (
        <div
            className={`relative group h-full ${className}`}
        >
            <div
                style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 20px 50px -20px rgba(0,0,0,0.1)',
                }}
                className="relative h-full overflow-visible transition-shadow duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
            >

                {/* --- IMAGE --- */}
                <div
                    style={{
                        height: '220px',
                        position: 'relative',
                        borderRadius: '24px 24px 0 0',
                        overflow: 'hidden'
                    }}
                >
                    <img
                        src={image}
                        alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                        className="group-hover:scale-105"
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
                <div style={{ padding: 'clamp(16px, 3vw, 32px)', position: 'relative', transformStyle: 'preserve-3d' }}>

                    {/* Floating Title & Desc (Z-Index: 60px) */}
                    <div style={{ transform: 'translateZ(60px)', marginBottom: '20px' }}>
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 3vw, 1.85rem)',
                            fontWeight: 800,
                            marginBottom: '10px',
                            color: 'var(--color-neutral-900)',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            textAlign: 'center',
                            padding: '0 clamp(8px, 2vw, 16px)'
                        }}>
                            {title}
                        </h3>
                        <p style={{
                            color: 'var(--color-neutral-600)',
                            lineHeight: 1.75,
                            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                            fontWeight: 500,
                            opacity: 0.95,
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
                                <span
                                    key={index}
                                    style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: color,
                                        background: `${color}10`,
                                        padding: '6px 12px',
                                        borderRadius: '8px',
                                        border: `1px solid ${color}25`,
                                        cursor: 'default',
                                        transition: 'transform 0.2s ease'
                                    }}
                                    className="hover:scale-105"
                                >
                                    {tag}
                                </span>
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
                                <div
                                    style={{
                                        background: `linear-gradient(90deg, ${color}, ${color})`,
                                        height: '100%',
                                        borderRadius: '9999px',
                                        boxShadow: `0 0 10px ${color}60`,
                                        width: `${enrollment}%`,
                                        transition: 'width 1s ease'
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

ProgramCard.propTypes = {
    title: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    enrollment: PropTypes.number,
    className: PropTypes.string,
};

export default ProgramCard;
