import React, { useState, useEffect } from 'react';

const BookingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        email: '',
        phone: '',
        preferredDate: '',
    });
    const [errors, setErrors] = useState({});

    const fullNameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)+$/;
    const gmailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@gmail\.com$/i;

    const resetForm = () => {
        setFormData({
            parentName: '',
            childName: '',
            email: '',
            phone: '',
            preferredDate: '',
        });
        setErrors({});
        setIsSubmitting(false);
    };

    const validateField = (name, value) => {
        const trimmed = value.trim();
        const today = new Date().toISOString().split('T')[0];

        switch (name) {
            case 'parentName':
            case 'childName':
                if (!trimmed) return 'This field is required';
                if (!fullNameRegex.test(trimmed)) return 'Enter full name (first and last name)';
                return '';
            case 'email':
                if (!trimmed) return 'Email is required';
                if (!gmailRegex.test(trimmed)) return 'Use a valid Gmail (must start with a letter and end with @gmail.com)';
                return '';
            case 'phone': {
                if (!trimmed) return 'Phone number is required';
                const digitsOnly = trimmed.replace(/\D/g, '');
                if (!/^[6-9]\d{9}$/.test(digitsOnly) || /^(\d)\1{9}$/.test(digitsOnly)) return 'Enter a valid 10-digit phone number';
                return '';
            }
            case 'preferredDate':
                if (!trimmed) return 'Preferred date is required';
                if (trimmed < today) return 'Date cannot be in the past';
                return '';
            default:
                return '';
        }
    };

    const validateForm = () => {
        const nextErrors = {};
        Object.entries(formData).forEach(([name, value]) => {
            const error = validateField(name, value);
            if (error) nextErrors[name] = error;
        });
        return nextErrors;
    };

    useEffect(() => {
        // Expose function to global window object for compatibility
        globalThis.showBookingModal = () => {
            setFormData({
                parentName: '',
                childName: '',
                email: '',
                phone: '',
                preferredDate: '',
            });
            setErrors({});
            setIsSubmitting(false);
            setIsOpen(true);
        };
        return () => {
            delete globalThis.showBookingModal;
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nextValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
        setFormData((prev) => ({ ...prev, [name]: nextValue }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, nextValue) }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsOpen(false);
            setShowSuccess(true);
            resetForm();
        }, 900);
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

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                                    <div>
                                        <label htmlFor="parentName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Parent Name *</label>
                                        <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} onBlur={handleBlur} required aria-invalid={!!errors.parentName} style={{ width: '100%', padding: '12px 16px', border: `2px solid ${errors.parentName ? '#EF4444' : '#E0E7FF'}`, borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                        {errors.parentName && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.parentName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="childName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Child Name *</label>
                                        <input type="text" id="childName" name="childName" value={formData.childName} onChange={handleChange} onBlur={handleBlur} required aria-invalid={!!errors.childName} style={{ width: '100%', padding: '12px 16px', border: `2px solid ${errors.childName ? '#EF4444' : '#E0E7FF'}`, borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                        {errors.childName && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.childName}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                                    <div>
                                        <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Email *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required autoComplete="email" aria-invalid={!!errors.email} style={{ width: '100%', padding: '12px 16px', border: `2px solid ${errors.email ? '#EF4444' : '#E0E7FF'}`, borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                        {errors.email && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Phone *</label>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} required autoComplete="tel" inputMode="numeric" maxLength={10} aria-invalid={!!errors.phone} style={{ width: '100%', padding: '12px 16px', border: `2px solid ${errors.phone ? '#EF4444' : '#E0E7FF'}`, borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                        {errors.phone && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.phone}</p>}
                                    </div>
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <label htmlFor="date" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-neutral-900)' }}>Preferred Date *</label>
                                    <input type="date" id="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} onBlur={handleBlur} min={new Date().toISOString().split('T')[0]} required aria-invalid={!!errors.preferredDate} style={{ width: '100%', padding: '12px 16px', border: `2px solid ${errors.preferredDate ? '#EF4444' : '#E0E7FF'}`, borderRadius: '10px', fontSize: '1rem', outline: 'none' }} />
                                    {errors.preferredDate && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.preferredDate}</p>}
                                </div>

                                <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}>{isSubmitting ? 'Submitting...' : 'Book Trial Playdate'}</button>
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
