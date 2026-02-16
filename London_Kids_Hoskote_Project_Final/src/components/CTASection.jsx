import React from 'react';

const CTASection = () => {
    return (
        <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #F0F4FF, #E8F5E9)' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }} className="reveal">
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px', color: 'var(--color-neutral-900)' }}>Ready to See Us in Action?</h2>
                <p style={{ color: 'var(--color-neutral-700)', marginBottom: '32px', fontSize: '1.125rem' }}>Schedule a tour and experience the TDK Group of Institutions difference. We'd love to show you around!</p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-primary" onClick={() => (typeof globalThis !== 'undefined' && globalThis.window && globalThis.window.showBookingModal?.())}>Book a Tour</button>
                    <a href="tel:5551234567" className="btn-secondary">Call Us</a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
