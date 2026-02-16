import React, { useState, useEffect } from 'react';

const BookingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        // Expose function to global window object for compatibility
        globalThis.showBookingModal = () => setIsOpen(true);
        return () => {
            delete globalThis.showBookingModal;
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsOpen(false);
        setShowSuccess(true);
        // Reset form would go here if we were using controlled inputs, 
        // but for now we let the unmounting handle it or just reset state
    };

    const closeSuccess = () => {
        setShowSuccess(false);
    };

    if (!isOpen && !showSuccess) return null;

    return (
        <>
            {/* Booking Form Modal */}
            {isOpen && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="reveal active" style={{ background: 'hsl(var(--card))', borderRadius: '24px', maxWidth: '500px', width: '90%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F7FA' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-neutral-700)">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div style={{ padding: 'clamp(20px, 4vw, 40px)' }}>
                            <h2 style={{ marginBottom: '8px', fontSize: '1.5rem', color: 'var(--color-neutral-900)' }}>Book a Trial Playdate</h2>
                            <p style={{ color: 'var(--color-neutral-700)', marginBottom: '24px' }}>Fill out the form below and we'll contact you to confirm your visit.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                                    <div>
                                        <label htmlFor="parentName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Parent Name *</label>
                                        <input type="text" id="parentName" required style={{ width: '100%', padding: '12px 16px', border: '2px solid #E0E7FF', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                    </div>
                                    <div>
                                        <label htmlFor="childName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Child Name *</label>
                                        <input type="text" id="childName" required style={{ width: '100%', padding: '12px 16px', border: '2px solid #E0E7FF', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                                    <div>
                                        <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Email *</label>
                                        <input type="email" id="email" required style={{ width: '100%', padding: '12px 16px', border: '2px solid #E0E7FF', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Phone *</label>
                                        <input type="tel" id="phone" required style={{ width: '100%', padding: '12px 16px', border: '2px solid #E0E7FF', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <label htmlFor="date" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Preferred Date *</label>
                                    <input type="date" id="date" required style={{ width: '100%', padding: '12px 16px', border: '2px solid #E0E7FF', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                </div>

                                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Book Trial Playdate</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccess && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1001, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="reveal active" style={{ background: 'hsl(var(--card))', borderRadius: '24px', maxWidth: '400px', width: '90%', padding: '40px', textAlign: 'center' }}>
                        <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, var(--color-calm), #22C55E)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                            <svg width="40" height="40" viewBox="0 0 20 20" fill="white">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 style={{ marginBottom: '8px', fontSize: '1.5rem', color: 'var(--color-neutral-900)' }}>Booking Request Sent!</h2>
                        <p style={{ color: 'var(--color-neutral-700)', marginBottom: '24px' }}>Thank you for your interest! We'll contact you within 24 hours to confirm your trial playdate.</p>
                        <button className="btn-primary" onClick={closeSuccess} style={{ width: '100%', justifyContent: 'center' }}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookingModal;
