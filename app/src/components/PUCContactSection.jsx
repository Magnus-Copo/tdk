import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PUCFloatingInput = ({
    name,
    label,
    type = 'text',
    focusedField,
    errors,
    formData,
    handleChange,
    setFocusedField,
}) => {
    const isFocused = focusedField === name;
    const hasError = !!errors[name];

    return (
        <div style={{ position: 'relative', marginBottom: '20px' }}>
            <input
                className="puc-float-input"
                id={`puc-${name}`}
                type={type}
                name={name}
                value={formData[name]}
                onChange={(e) => handleChange(name, e.target.value)}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField(null)}
                inputMode={type === 'tel' ? 'numeric' : undefined}
                maxLength={type === 'tel' ? 10 : undefined}
                autoComplete={name === 'phoneNumber' ? 'tel' : name === 'parentName' || name === 'studentName' ? 'name' : undefined}
                style={{
                    width: '100%',
                    padding: '30px 16px 12px',
                    fontFamily: "'Nunito', 'Inter', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: '#1E293B',
                    background: isFocused ? 'rgba(255,255,255,0.95)' : 'rgba(248,250,252,0.8)',
                    border: `1.5px solid ${hasError ? '#EF4444' : isFocused ? '#6366F1' : 'rgba(148,163,184,0.25)'}`,
                    borderRadius: '14px',
                    outline: 'none',
                    transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                    boxSizing: 'border-box',
                }}
            />
            <label
                className="puc-float-label"
                htmlFor={`puc-${name}`}
                style={{
                    position: 'absolute',
                    left: '16px',
                    top: '6px',
                    fontSize: '0.7rem',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    color: hasError ? '#EF4444' : isFocused ? '#6366F1' : '#78869B',
                    transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                    pointerEvents: 'none',
                    zIndex: 1,
                    backgroundColor: '#FFFFFF',
                    paddingLeft: '4px',
                    paddingRight: '4px',
                }}
            >
                {label}
            </label>
            <AnimatePresence>
                {hasError && (
                    <motion.p
                        initial={{ opacity: 0, y: -4, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 500, margin: '4px 0 0 4px' }}
                    >
                        {errors[name]}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

/**
 * PUCContactSection — Contact form for PUC tuition enquiries.
 * Adapted from PrimaryContactSection with PUC-specific fields:
 * - Stream dropdown (Science / Commerce / Arts)
 * - PUC Year (1st / 2nd)
 * Same glassmorphic card, floating-label, and validation patterns.
 */
const PUCContactSection = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        phoneNumber: '',
        studentName: '',
        stream: '',
        pucYear: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [focusedField, setFocusedField] = useState(null);
    const formCardRef = useRef(null);

    const fullNameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)+$/;

    const validateField = (name, value) => {
        const trimmed = String(value || '').trim();

        switch (name) {
            case 'parentName':
                if (!trimmed) return 'Parent name is required';
                if (!fullNameRegex.test(trimmed)) return 'Enter full name (first and last name)';
                return '';
            case 'phoneNumber':
                if (!trimmed) return 'Phone number is required';
                if (!/^[6-9]\d{9}$/.test(trimmed) || /^(\d)\1{9}$/.test(trimmed)) return 'Please enter a valid 10-digit phone number';
                return '';
            case 'studentName':
                if (!trimmed) return 'Student name is required';
                if (!fullNameRegex.test(trimmed)) return 'Enter full name (first and last name)';
                return '';
            case 'stream':
                if (!trimmed) return 'Please select a stream';
                return '';
            case 'pucYear':
                if (!trimmed) return 'Please select PUC year';
                return '';
            default:
                return '';
        }
    };

    /** @returns {boolean} */
    const validate = () => {
        const newErrors = {};
        ['parentName', 'phoneNumber', 'studentName', 'stream', 'pucYear'].forEach((fieldName) => {
            const error = validateField(fieldName, formData[fieldName]);
            if (error) newErrors[fieldName] = error;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /** @param {React.FormEvent} e */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 1800));
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ parentName: '', phoneNumber: '', studentName: '', stream: '', pucYear: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 4000);
    };

    const handleChange = (name, value) => {
        const nextValue = name === 'phoneNumber' ? value.replace(/\D/g, '').slice(0, 10) : value;
        setFormData((p) => ({ ...p, [name]: nextValue }));
        setErrors((p) => ({ ...p, [name]: validateField(name, nextValue) }));
    };

    /* ── Contact info items ── */
    const contactItems = [
        {
            title: 'Call Us',
            detail: '+91 9606555118',
            sub: 'Mon – Sat: 9:00 AM – 4:00 PM',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '22px', height: '22px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
        },
        {
            title: 'Email Us',
            detail: 'londonkidshoskote@gmail.com',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '22px', height: '22px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
        },
        {
            title: 'Visit Us',
            detail: 'Below TDK Coaching Academy, Gangamma Gudi Main Road, M.V. Extension, Hosakote Town, Bengaluru Rural - 562114',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '22px', height: '22px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .puc-float-label {
                        top: -9px !important;
                        font-size: 0.62rem !important;
                    }
                    .puc-float-input {
                        padding-top: 20px !important;
                        padding-bottom: 12px !important;
                        font-size: 1rem !important;
                    }
                    .puc-visit-card {
                        padding-left: 12px !important;
                    }
                    .puc-visit-heading {
                        margin-left: -12px;
                    }
                    .puc-select-field {
                        padding-top: 34px !important;
                        padding-bottom: 12px !important;
                        font-size: 1rem !important;
                    }
                    .puc-select-label {
                        top: 5px !important;
                        font-size: 0.64rem !important;
                    }
                }
            `}</style>
            <section
            style={{
                padding: 'clamp(42px, 6vw, 72px) clamp(20px, 5vw, 80px) clamp(70px, 10vw, 120px)',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 40%, #E0E7FF 60%, #DBEAFE 100%)',
                position: 'relative',
            }}
            >
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: "'Nunito', sans-serif",
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: '#6366F1',
                            background: 'rgba(99,102,241,0.08)',
                            padding: '6px 16px',
                            borderRadius: '9999px',
                            marginBottom: '16px',
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>✉️</span>
                        Get In Touch
                    </motion.div>

                    <h2
                        style={{
                            fontFamily: "'Nunito', sans-serif",
                            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                            fontWeight: 900,
                            color: '#0F172A',
                            margin: '0 0 12px',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.15,
                        }}
                    >
                        Start Your{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #6366F1, #3B82F6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            PUC Journey
                        </span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Nunito', 'Inter', sans-serif",
                            fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)',
                            lineHeight: 1.7,
                            color: '#475569',
                            maxWidth: '560px',
                            margin: '0 auto',
                        }}
                    >
                        Have questions about our PUC coaching? Fill in the form below and
                        we&apos;ll get back to you within 24 hours.
                    </p>
                </motion.div>

                {/* Two-column layout */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                        gap: 'clamp(24px, 4vw, 40px)',
                        alignItems: 'start',
                    }}
                >
                    {/* Left — Contact info cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                    >
                        {contactItems.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className={item.title === 'Visit Us' ? 'puc-visit-card' : ''}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                                whileHover={{ y: -3, boxShadow: '0 10px 28px rgba(99,102,241,0.1)' }}
                                style={{
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'flex-start',
                                    background: 'rgba(255,255,255,0.92)',
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                    borderRadius: '18px',
                                    padding: '22px 20px',
                                    border: '1px solid rgba(99,102,241,0.08)',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <div
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'rgba(99,102,241,0.08)',
                                        color: '#6366F1',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h4
                                        className={item.title === 'Visit Us' ? 'puc-visit-heading' : ''}
                                        style={{
                                            fontFamily: "'Nunito', sans-serif",
                                            fontSize: '0.95rem',
                                            fontWeight: 700,
                                            color: '#1E293B',
                                            margin: '0 0 3px',
                                        }}
                                    >
                                        {item.title}
                                    </h4>
                                    <p
                                        style={{
                                            fontFamily: "'Nunito', 'Inter', sans-serif",
                                            color: '#334155',
                                            fontSize: '0.95rem',
                                            margin: 0,
                                            lineHeight: 1.65,
                                        }}
                                    >
                                        {item.detail}
                                    </p>
                                    {item.sub && (
                                        <p
                                            style={{
                                                fontFamily: "'Nunito', 'Inter', sans-serif",
                                                color: '#64748B',
                                                fontSize: '0.85rem',
                                                margin: '3px 0 0 0',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.sub}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Trust badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginTop: '8px',
                                paddingLeft: '4px',
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10B981" style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0, fontWeight: 500 }}>
                                Your information is safe with us. We respond within 24 hours.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right — Form card */}
                    <motion.div
                        ref={formCardRef}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        style={{
                            background: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            borderRadius: '24px',
                            padding: 'clamp(28px, 4vw, 40px)',
                            border: '1px solid rgba(99,102,241,0.08)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <h3
                                style={{
                                    fontFamily: "'Nunito', sans-serif",
                                    fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                                    fontWeight: 900,
                                    color: '#0F172A',
                                    margin: 0,
                                }}
                            >
                                Enquire About PUC Coaching
                            </h3>
                        </div>
                        <p
                            style={{
                                fontFamily: "'Nunito', 'Inter', sans-serif",
                                color: '#64748B',
                                fontSize: '0.92rem',
                                marginBottom: '28px',
                                marginTop: '0',
                            }}
                        >
                            Fill in the details below and we&apos;ll get back to you shortly.
                        </p>

                        <AnimatePresence mode="wait">
                            {submitStatus === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    style={{
                                        textAlign: 'center',
                                        padding: '40px 20px',
                                        background: 'rgba(236, 253, 245, 0.5)',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(167,243,208,0.4)',
                                    }}
                                >
                                    <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#065F46', marginBottom: '6px' }}>
                                        Thank You!
                                    </h4>
                                    <p style={{ color: '#047857', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                                        Your enquiry has been sent successfully. We will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        style={{
                                            padding: '10px 24px',
                                            borderRadius: '10px',
                                            border: '1.5px solid #A7F3D0',
                                            background: '#FFFFFF',
                                            color: '#059669',
                                            fontWeight: 700,
                                            fontSize: '0.92rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s ease',
                                        }}
                                    >
                                        Send Another Enquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    noValidate
                                >
                                    <PUCFloatingInput name="parentName" label="Parent / Guardian Name *" focusedField={focusedField} errors={errors} formData={formData} handleChange={handleChange} setFocusedField={setFocusedField} />
                                    <PUCFloatingInput name="phoneNumber" label="Phone Number *" type="tel" focusedField={focusedField} errors={errors} formData={formData} handleChange={handleChange} setFocusedField={setFocusedField} />
                                    <PUCFloatingInput name="studentName" label="Student Name *" focusedField={focusedField} errors={errors} formData={formData} handleChange={handleChange} setFocusedField={setFocusedField} />

                                    {/* Stream dropdown */}
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <select
                                            id="puc-stream"
                                            name="stream"
                                            className="puc-select-field puc-float-input"
                                            value={formData.stream}
                                            onChange={(e) => handleChange('stream', e.target.value)}
                                            onFocus={() => setFocusedField('stream')}
                                            onBlur={() => setFocusedField(null)}
                                            style={{
                                                width: '100%',
                                                padding: '30px 40px 12px 16px',
                                                fontFamily: "'Nunito', 'Inter', sans-serif",
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                lineHeight: 1.4,
                                                color: formData.stream ? '#1E293B' : '#94A3B8',
                                                background: focusedField === 'stream' ? 'rgba(255,255,255,0.95)' : 'rgba(248,250,252,0.8)',
                                                border: `1.5px solid ${errors.stream ? '#EF4444' : focusedField === 'stream' ? '#6366F1' : 'rgba(148,163,184,0.25)'}`,
                                                borderRadius: '14px',
                                                outline: 'none',
                                                appearance: 'none',
                                                cursor: 'pointer',
                                                transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                                                boxSizing: 'border-box',
                                            }}
                                        >
                                            <option value="">Select Stream</option>
                                            <option value="Science (PCMB)">Science (PCMB)</option>
                                            <option value="Science (PCMC)">Science (PCMC)</option>
                                            <option value="Commerce">Commerce</option>
                                            <option value="Arts">Arts</option>
                                        </select>
                                        <label
                                            htmlFor="puc-stream"
                                            className="puc-select-label puc-float-label"
                                            style={{
                                                position: 'absolute',
                                                left: '16px',
                                                top: '6px',
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                color: errors.stream ? '#EF4444' : focusedField === 'stream' ? '#6366F1' : '#78869B',
                                                transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                                                pointerEvents: 'none',
                                                zIndex: 1,
                                                backgroundColor: '#FFFFFF',
                                                paddingLeft: '4px',
                                                paddingRight: '4px',
                                            }}
                                        >
                                            Stream *
                                        </label>
                                        {/* Dropdown arrow */}
                                        <svg
                                            style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                        <AnimatePresence>
                                            {errors.stream && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -4, height: 0 }}
                                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                    exit={{ opacity: 0, y: -4, height: 0 }}
                                                    style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 500, margin: '4px 0 0 4px' }}
                                                >
                                                    {errors.stream}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* PUC Year dropdown */}
                                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                                        <select
                                            id="puc-year"
                                            name="pucYear"
                                            className="puc-select-field puc-float-input"
                                            value={formData.pucYear}
                                            onChange={(e) => handleChange('pucYear', e.target.value)}
                                            onFocus={() => setFocusedField('pucYear')}
                                            onBlur={() => setFocusedField(null)}
                                            style={{
                                                width: '100%',
                                                padding: '30px 40px 12px 16px',
                                                fontFamily: "'Nunito', 'Inter', sans-serif",
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                lineHeight: 1.4,
                                                color: formData.pucYear ? '#1E293B' : '#94A3B8',
                                                background: focusedField === 'pucYear' ? 'rgba(255,255,255,0.95)' : 'rgba(248,250,252,0.8)',
                                                border: `1.5px solid ${errors.pucYear ? '#EF4444' : focusedField === 'pucYear' ? '#6366F1' : 'rgba(148,163,184,0.25)'}`,
                                                borderRadius: '14px',
                                                outline: 'none',
                                                appearance: 'none',
                                                cursor: 'pointer',
                                                transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                                                boxSizing: 'border-box',
                                            }}
                                        >
                                            <option value="">Select Year</option>
                                            <option value="1st PUC">1st PUC</option>
                                            <option value="2nd PUC">2nd PUC</option>
                                        </select>
                                        <label
                                            htmlFor="puc-year"
                                            className="puc-select-label puc-float-label"
                                            style={{
                                                position: 'absolute',
                                                left: '16px',
                                                top: '6px',
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                color: errors.pucYear ? '#EF4444' : focusedField === 'pucYear' ? '#6366F1' : '#78869B',
                                                transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                                                pointerEvents: 'none',
                                                zIndex: 1,
                                                backgroundColor: '#FFFFFF',
                                                paddingLeft: '4px',
                                                paddingRight: '4px',
                                            }}
                                        >
                                            PUC Year *
                                        </label>
                                        <svg
                                            style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                        <AnimatePresence>
                                            {errors.pucYear && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -4, height: 0 }}
                                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                    exit={{ opacity: 0, y: -4, height: 0 }}
                                                    style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 500, margin: '4px 0 0 4px' }}
                                                >
                                                    {errors.pucYear}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                            {/* Message textarea */}
                                            <div style={{ position: 'relative', marginBottom: '24px' }}>
                                                <textarea
                                                    className="puc-float-input"
                                                    id="puc-message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={(e) => handleChange('message', e.target.value)}
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField(null)}
                                                    rows={3}
                                                    style={{
                                                        width: '100%',
                                                        padding: '30px 16px 12px',
                                                        fontFamily: "'Nunito', 'Inter', sans-serif",
                                                        fontSize: '1rem',
                                                        fontWeight: 600,
                                                        lineHeight: 1.4,
                                                        color: '#1E293B',
                                                        background: focusedField === 'message' ? 'rgba(255,255,255,0.95)' : 'rgba(248,250,252,0.8)',
                                                        border: `1.5px solid ${focusedField === 'message' ? '#6366F1' : 'rgba(148,163,184,0.25)'}`,
                                                        borderRadius: '14px',
                                                        outline: 'none',
                                                        resize: 'vertical',
                                                        minHeight: '80px',
                                                        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                                                        boxSizing: 'border-box',
                                                    }}
                                                />
                                                <label
                                                    className="puc-float-label"
                                                    htmlFor="puc-message"
                                                    style={{
                                                        position: 'absolute',
                                                        left: '16px',
                                                        top: '6px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 600,
                                                        color: focusedField === 'message' ? '#6366F1' : '#78869B',
                                                        transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                                                        pointerEvents: 'none',
                                                    }}
                                                >
                                                    Message (Optional)
                                                </label>
                                            </div>

                                            {/* Submit button */}
                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                style={{
                                                    width: '100%',
                                                    padding: '14px',
                                                    fontFamily: "'Nunito', sans-serif",
                                                    fontSize: '0.95rem',
                                                    fontWeight: 700,
                                                    color: '#FFFFFF',
                                                    background: isSubmitting
                                                        ? 'linear-gradient(135deg, #94A3B8, #CBD5E1)'
                                                        : 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)',
                                                    border: 'none',
                                                    borderRadius: '14px',
                                                    cursor: isSubmitting ? 'wait' : 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: isSubmitting ? 'none' : '0 4px 16px rgba(99,102,241,0.3)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                }}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                            style={{
                                                                width: '18px',
                                                                height: '18px',
                                                                border: '2px solid rgba(255,255,255,0.3)',
                                                                borderTopColor: '#FFFFFF',
                                                                borderRadius: '50%',
                                                            }}
                                                        />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Enquiry
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="5" y1="12" x2="19" y2="12" />
                                                            <polyline points="12 5 19 12 12 19" />
                                                        </svg>
                                                    </>
                                                )}
                                            </motion.button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                    </section>
                </>
            );
        };

export default PUCContactSection;
