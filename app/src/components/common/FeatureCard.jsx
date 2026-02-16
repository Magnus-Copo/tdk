import React from 'react';

const FeatureCard = ({ title, description, icon, gradient, bg, className = '' }) => {
    return (
        <div className={`card-hover ${className}`} style={{ background: bg, padding: 'clamp(20px, 3vw, 32px)', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: gradient, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                {icon}
            </div>
            <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', marginBottom: '12px', color: 'var(--color-neutral-900)', textAlign: 'center', padding: '0 clamp(8px, 2vw, 12px)' }}>{title}</h3>
            <p style={{ color: 'var(--color-neutral-700)', lineHeight: 1.5, fontSize: 'clamp(0.9rem, 2vw, 1rem)', textAlign: 'center', padding: '0 clamp(8px, 2vw, 12px)' }}>{description}</p>
        </div>
    );
};

export default FeatureCard;
