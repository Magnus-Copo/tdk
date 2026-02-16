import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)', background: 'linear-gradient(135deg, #EEF2FF 0%, #DBEAFE 50%, #DCFCE7 100%)', position: 'relative', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px', color: 'var(--color-neutral-900)' }}>Ready to See Us in Action?</h2>
                <p style={{ color: 'var(--color-neutral-700)', marginBottom: '32px', fontSize: '1.125rem' }}>Get in touch with us and experience the TDK Group of Institutions difference. We'd love to hear from you!</p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Contact Us</Link>
                    <a href="tel:5551234567" className="btn-secondary">Call Us</a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
