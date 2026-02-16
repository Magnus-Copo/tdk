import React from 'react';

const FeatureCard = ({ title, description, icon, gradient, bg, className = '' }) => {
    return (
        <div className={`card-hover ${className}`} style={{ background: bg, padding: '32px', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: gradient, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-neutral-900)' }}>{title}</h3>
            <p style={{ color: 'var(--color-neutral-700)', lineHeight: 1.5 }}>{description}</p>
        </div>
    );
};

export default FeatureCard;
