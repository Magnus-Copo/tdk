import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreschoolFormField = ({
    label,
    name,
    type = 'text',
    required = true,
    focusedField,
    errors,
    formData,
    handleChange,
    setFocusedField,
}) => {
    const isFocused = focusedField === name;
    const hasError = errors[name];

    return (
        <div style={{ position: 'relative' }}>
            <label
                className="preschool-float-label"
                htmlFor={`contact-${name}`}
                style={{
                    position: 'absolute',
                    left: '16px',
                    top: '6px',
                    fontSize: '0.68rem',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    color: hasError ? '#EF4444' : isFocused ? '#3B82F6' : '#94A3B8',
                    letterSpacing: '0.03em',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                    zIndex: 1,
                    backgroundColor: '#FFFFFF',
                    paddingLeft: '4px',
                    paddingRight: '4px',
                }}
            >
                {label} {required && <span style={{ color: '#EF4444' }}>*</span>}
            </label>
            <input
                className="preschool-float-input"
                id={`contact-${name}`}
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField(null)}
                inputMode={type === 'tel' ? 'numeric' : undefined}
                maxLength={type === 'tel' ? 10 : undefined}
                autoComplete={name === 'phoneNumber' ? 'tel' : name === 'email' ? 'email' : name === 'parentName' || name === 'childName' ? 'name' : undefined}
                style={{
                    width: '100%',
                    padding: '30px 16px 12px',
                    borderRadius: '12px',
                    border: `1.5px solid ${hasError ? '#FCA5A5' : isFocused ? '#3B82F6' : '#E2E8F0'}`,
                    background: isFocused ? '#FFFFFF' : '#F8FAFC',
                    fontSize: '1rem',
                    fontFamily: "'Nunito', 'Inter', sans-serif",
                    lineHeight: 1.4,
                    color: '#1E293B',
                    letterSpacing: '0.005em',
                    outline: 'none',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isFocused
                        ? '0 0 0 3px rgba(59,130,246,0.08), 0 4px 12px rgba(59,130,246,0.06)'
                        : hasError
                            ? '0 0 0 3px rgba(239,68,68,0.06)'
                            : '0 1px 2px rgba(0,0,0,0.04)',
                }}
            />
            <AnimatePresence>
                {hasError && (
                    <motion.p
                        initial={{ opacity: 0, y: -4, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        style={{ fontSize: '0.75rem', color: '#EF4444', fontWeight: 500, margin: '4px 0 0 4px' }}
                    >
                        {errors[name]}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

/**
 * PreschoolContactSection — Light, airy contact section with
 * micro-level UI/UX polish: subtle parallax, staggered reveals,
 * interactive hover states, focus glow, and refined typography.
 */
const PreschoolContactSection = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        phoneNumber: '',
        email: '',
        childName: '',
        childAge: '',
        program: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [focusedField, setFocusedField] = useState(null);
    const formCardRef = useRef(null);

    const fullNameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)+$/;
    const emailRegex = /^[a-z][a-z0-9._%+-]*@[a-z][a-z-]*(\.[a-z][a-z-]*)+$/i;

    const validateField = (name, value) => {
        const trimmed = String(value || '').trim();

        switch (name) {
            case 'parentName':
                if (!trimmed) return "Parent's name is required";
                if (!fullNameRegex.test(trimmed)) return 'Enter full name (first and last name)';
                return '';
            case 'phoneNumber': {
                if (!trimmed) return 'Phone number is required';
                if (!/^[6-9]\d{9}$/.test(trimmed) || /^(\d)\1{9}$/.test(trimmed)) {
                    return 'Please enter a valid 10-digit phone number';
                }
                return '';
            }
            case 'email':
                if (!trimmed) return 'Email address is required';
                if (!emailRegex.test(trimmed)) {
                    return 'Use a valid email (must start with a letter and domain after @ cannot start with a number)';
                }
                return '';
            case 'childName':
                if (!trimmed) return "Child's name is required";
                if (!fullNameRegex.test(trimmed)) return 'Enter full name (first and last name)';
                return '';
            case 'childAge':
                if (!trimmed) return "Child's age is required";
                return '';
            case 'program':
                if (!trimmed) return 'Please select a program';
                return '';
            default:
                return '';
        }
    };

    const validate = () => {
        const newErrors = {};
        ['parentName', 'phoneNumber', 'email', 'childName', 'childAge', 'program'].forEach((fieldName) => {
            const error = validateField(fieldName, formData[fieldName]);
            if (error) newErrors[fieldName] = error;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nextValue = name === 'phoneNumber' ? value.replace(/\D/g, '').slice(0, 10) : value;
        setFormData(prev => ({ ...prev, [name]: nextValue }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, nextValue) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        if (validate()) {
            setTimeout(() => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                setFormData({ parentName: '', phoneNumber: '', email: '', childName: '', childAge: '', program: '', message: '' });
            }, 1500);
        } else {
            setIsSubmitting(false);
        }
    };

    /* ─── Contact info items ─── */
    const contactItems = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            title: 'Visit Us',
            detail: 'Below TDK Coaching Academy, Gangamma Gudi Main Road, M.V. Extension, Hosakote Town, Bengaluru Rural - 562114',
            accent: '#3B82F6',
            accentBg: '#EFF6FF',
            accentRing: 'rgba(59,130,246,0.12)',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            title: 'Call Us',
            detail: '+91 9606555118',
            sub: 'Mon – Sat: 9:00 AM – 4:00 PM',
            accent: '#10B981',
            accentBg: '#ECFDF5',
            accentRing: 'rgba(16,185,129,0.12)',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
            title: 'Email Us',
            detail: 'londonkidshoskote@gmail.com',
            accent: '#8B5CF6',
            accentBg: '#F5F3FF',
            accentRing: 'rgba(139,92,246,0.12)',
        },
    ];

    return (
        <>
            <style>{`
                @keyframes contact-soft-float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(15px, -20px) rotate(2deg); }
                }
                @keyframes contact-soft-float-2 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(-20px, 15px) rotate(-3deg); }
                }
                @keyframes contact-btn-shimmer {
                    0%, 60% { transform: translateX(-100%) skewX(-15deg); }
                    80% { transform: translateX(250%) skewX(-15deg); }
                    100% { transform: translateX(250%) skewX(-15deg); }
                }
                @keyframes contact-check-draw {
                    0% { stroke-dashoffset: 24; }
                    100% { stroke-dashoffset: 0; }
                }
                .contact-card-info {
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                                box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                                border-color 0.3s ease;
                }
                .contact-card-info:hover {
                    transform: translateY(-2px);
                }
                @media (max-width: 768px) {
                    .preschool-float-label {
                        top: -9px !important;
                        font-size: 0.62rem !important;
                    }
                    .preschool-float-input {
                        padding-top: 20px !important;
                        padding-bottom: 12px !important;
                        font-size: 1rem !important;
                    }
                    .preschool-visit-card {
                        padding-left: 12px !important;
                    }
                    .preschool-visit-heading {
                        margin-left: -12px;
                    }
                    .preschool-program-select {
                        padding-top: 34px !important;
                        padding-bottom: 12px !important;
                        font-size: 1rem !important;
                    }
                    .preschool-program-label {
                        top: 5px !important;
                        font-size: 0.64rem !important;
                    }
                }
            `}</style>

            <section
                id="contact"
                className="relative overflow-hidden"
                style={{
                    padding: 'clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FEF3F2 30%, #DCFCE7 70%, #DBEAFE 100%)',
                    position: 'relative',
                }}
            >
                {/* ─── Soft decorative shapes ─── */}
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute', top: '-80px', right: '-60px',
                        width: '400px', height: '400px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
                        animation: 'contact-soft-float 25s ease-in-out infinite',
                        pointerEvents: 'none',
                    }}
                />
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute', bottom: '-100px', left: '-50px',
                        width: '500px', height: '500px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
                        animation: 'contact-soft-float-2 30s ease-in-out infinite',
                        pointerEvents: 'none',
                    }}
                />

                <div className="max-w-[1280px] mx-auto px-2 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

                    {/* ═══════ Left Column ═══════ */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* Pill badge */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                fontSize: '0.78rem', fontWeight: 700,
                                fontFamily: "'Nunito', sans-serif",
                                textTransform: 'uppercase', letterSpacing: '0.12em',
                                color: '#3B82F6',
                                padding: '6px 14px',
                                borderRadius: '9999px',
                                background: '#EFF6FF',
                                border: '1px solid #DBEAFE',
                                marginBottom: '20px',
                            }}
                        >
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', display: 'inline-block' }} />
                            Get in Touch
                        </motion.span>

                        <h2
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                                lineHeight: 1.12,
                                letterSpacing: '-0.02em',
                                color: '#0F172A',
                                margin: '0 0 16px 0',
                                fontWeight: 800,
                            }}
                        >
                            Begin Your Child&apos;s{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #3B82F6, #10B981)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Journey
                            </span>
                        </h2>
                        <p style={{
                            fontFamily: "'Nunito', 'Inter', sans-serif",
                            color: '#64748B', fontSize: '1.02rem', lineHeight: 1.75,
                            letterSpacing: '0.005em',
                            maxWidth: '480px', marginBottom: '40px',
                        }}>
                            We are thrilled that you are considering London Kids School for your little one. Reach out to schedule a visit or learn more.
                        </p>

                        {/* Contact Info Cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {contactItems.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className={`contact-card-info ${item.title === 'Visit Us' ? 'preschool-visit-card' : ''}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: [0.4, 0, 0.2, 1] }}
                                    style={{
                                        display: 'flex', alignItems: 'flex-start', gap: '14px',
                                        padding: '18px 20px',
                                        borderRadius: '16px',
                                        background: '#FFFFFF',
                                        border: '1px solid #F1F5F9',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)',
                                        cursor: 'default',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = item.accent;
                                        e.currentTarget.style.boxShadow = `0 4px 20px ${item.accentRing}, 0 1px 3px rgba(0,0,0,0.04)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#F1F5F9';
                                        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)';
                                    }}
                                >
                                    {/* Icon circle */}
                                    <div
                                        style={{
                                            width: '42px', height: '42px', borderRadius: '12px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            background: item.accentBg,
                                            color: item.accent,
                                            flexShrink: 0,
                                            transition: 'transform 0.3s ease',
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4
                                            className={item.title === 'Visit Us' ? 'preschool-visit-heading' : ''}
                                            style={{
                                            fontFamily: "'Nunito', sans-serif",
                                            fontSize: '0.95rem', fontWeight: 700, color: '#1E293B',
                                            letterSpacing: '0.01em',
                                            margin: '0 0 2px 0',
                                        }}>
                                            {item.title}
                                        </h4>
                                        <p style={{ fontFamily: "'Nunito', 'Inter', sans-serif", color: '#475569', fontSize: '0.88rem', margin: 0, lineHeight: 1.6, letterSpacing: '0.005em' }}>
                                            {item.detail}
                                        </p>
                                        {item.sub && (
                                            <p style={{ fontFamily: "'Nunito', 'Inter', sans-serif", color: '#94A3B8', fontSize: '0.78rem', margin: '3px 0 0 0', fontWeight: 500, letterSpacing: '0.01em' }}>
                                                {item.sub}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Micro-detail: trust badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                marginTop: '28px', paddingTop: '20px',
                                borderTop: '1px solid #F1F5F9',
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10B981" style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0, fontWeight: 500 }}>
                                Your information is safe with us. We respond within 24 hours.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* ═══════ Right Column: Form Card ═══════ */}
                    <motion.div
                        ref={formCardRef}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            position: 'relative',
                            borderRadius: '24px',
                            padding: 'clamp(20px, 3vw, 36px)',
                            background: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.02), 0 12px 40px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.01)',
                        }}
                    >
                        {/* Subtle top accent bar */}
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute', top: 0, left: '32px', right: '32px',
                                height: '3px', borderRadius: '0 0 4px 4px',
                                background: 'linear-gradient(90deg, #3B82F6, #10B981, #8B5CF6)',
                            }}
                        />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '10px',
                                background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3B82F6" style={{ width: '18px', height: '18px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.01em' }}>
                                Send an Inquiry
                            </h3>
                        </div>
                        <p style={{ fontFamily: "'Nunito', 'Inter', sans-serif", color: '#94A3B8', fontSize: '0.88rem', marginBottom: '28px', marginTop: '0', letterSpacing: '0.005em' }}>
                            Fill in the details below and we&apos;ll get back to you shortly.
                        </p>

                        <AnimatePresence mode='wait'>
                            {submitStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    style={{
                                        background: 'linear-gradient(135deg, #ECFDF5, #F0FDF4)',
                                        border: '1px solid #A7F3D0',
                                        borderRadius: '16px',
                                        padding: '40px 24px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <div style={{
                                        width: '64px', height: '64px', borderRadius: '50%',
                                        background: '#D1FAE5',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 16px', color: '#059669',
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: '32px', height: '32px' }}>
                                            <path
                                                strokeLinecap="round" strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                                style={{
                                                    strokeDasharray: 24,
                                                    strokeDashoffset: 0,
                                                    animation: 'contact-check-draw 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                            />
                                        </svg>
                                    </div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#065F46', marginBottom: '6px' }}>
                                        Thank You!
                                    </h4>
                                    <p style={{ color: '#047857', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>
                                        Your inquiry has been sent successfully. We will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        style={{
                                            padding: '10px 24px', borderRadius: '10px',
                                            border: '1.5px solid #A7F3D0',
                                            background: '#FFFFFF', color: '#059669',
                                            fontWeight: 700, fontSize: '0.88rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#ECFDF5';
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = '#FFFFFF';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Send Another Inquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}
                                    onSubmit={handleSubmit}
                                    noValidate
                                >
                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <PreschoolFormField label="Parent's Name" name="parentName" focusedField={focusedField} errors={errors} formData={formData} handleChange={handleChange} setFocusedField={setFocusedField} />
                                        <PreschoolFormField label="Phone Number" name="phoneNumber" type="tel" focusedField={focusedField} errors={errors} formData={formData} handleChange={handleChange} setFocusedField={setFocusedField} />
                                    </div>

                                    {/* Row 1.5 */}
                                    <div className="grid grid-cols-1 gap-5">
                                        <PreschoolFormField label="Email Address" name="email" type="email" focusedField={focusedField} errors={errors} formData={formData} handleChange={handleChange} setFocusedField={setFocusedField} />
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <PreschoolFormField label="Child's Name" name="childName" focusedField={focusedField} errors={errors} formData={formData} handleChange={handleChange} setFocusedField={setFocusedField} />
                                        <PreschoolFormField label="Child's Age / DOB" name="childAge" focusedField={focusedField} errors={errors} formData={formData} handleChange={handleChange} setFocusedField={setFocusedField} />
                                    </div>

                                    {/* Program Select */}
                                    <div style={{ position: 'relative' }}>
                                        <label
                                            htmlFor="contact-program"
                                            className="preschool-program-label preschool-float-label"
                                            style={{
                                                position: 'absolute',
                                                left: '16px',
                                                top: '6px',
                                                fontSize: '0.68rem',
                                                fontWeight: 600,
                                                color: errors.program ? '#EF4444' : focusedField === 'program' ? '#3B82F6' : '#94A3B8',
                                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                pointerEvents: 'none',
                                                zIndex: 1,
                                                backgroundColor: '#FFFFFF',
                                                paddingLeft: '4px',
                                                paddingRight: '4px',
                                            }}
                                        >
                                            Program Interested In <span style={{ color: '#EF4444' }}>*</span>
                                        </label>
                                        <select
                                            id="contact-program"
                                            name="program"
                                            className="preschool-program-select preschool-float-input"
                                            value={formData.program}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('program')}
                                            onBlur={() => setFocusedField(null)}
                                            style={{
                                                width: '100%',
                                                padding: '30px 40px 12px 16px',
                                                borderRadius: '12px',
                                                border: `1.5px solid ${errors.program ? '#FCA5A5' : focusedField === 'program' ? '#3B82F6' : '#E2E8F0'}`,
                                                background: focusedField === 'program' ? '#FFFFFF' : '#F8FAFC',
                                                fontSize: '1rem',
                                                lineHeight: 1.4,
                                                color: formData.program ? '#1E293B' : '#94A3B8',
                                                outline: 'none',
                                                appearance: 'none',
                                                cursor: 'pointer',
                                                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: focusedField === 'program'
                                                    ? '0 0 0 3px rgba(59,130,246,0.08), 0 4px 12px rgba(59,130,246,0.06)'
                                                    : '0 1px 2px rgba(0,0,0,0.04)',
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2394A3B8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                                                backgroundPosition: 'right 12px center',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '20px',
                                            }}
                                        >
                                            <option value="">Select a program...</option>
                                            <option value="Toddler">Toddler Program (1.5 - 2.5 yrs)</option>
                                            <option value="Preschool">Preschool (2.5 - 4 yrs)</option>
                                            <option value="PreK-Kindergarten">Pre-K / Kindergarten (4 - 6 yrs)</option>
                                        </select>
                                        <AnimatePresence>
                                            {errors.program && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -4, height: 0 }}
                                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                    exit={{ opacity: 0, y: -4, height: 0 }}
                                                    style={{ fontSize: '0.75rem', color: '#EF4444', fontWeight: 500, margin: '4px 0 0 4px' }}
                                                >
                                                    {errors.program}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Message */}
                                    <div style={{ position: 'relative' }}>
                                        <label
                                            className="preschool-float-label"
                                            htmlFor="contact-message"
                                            style={{
                                                position: 'absolute',
                                                left: '16px',
                                                top: '6px',
                                                fontSize: '0.68rem',
                                                fontWeight: 600,
                                                color: focusedField === 'message' ? '#3B82F6' : '#94A3B8',
                                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                pointerEvents: 'none',
                                                zIndex: 1,
                                                backgroundColor: '#FFFFFF',
                                                paddingLeft: '4px',
                                                paddingRight: '4px',
                                            }}
                                        >
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            className="preschool-float-input"
                                            id="contact-message"
                                            rows="3"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            style={{
                                                width: '100%',
                                                padding: formData.message || focusedField === 'message' ? '30px 16px 12px' : '18px 16px',
                                                borderRadius: '12px',
                                                border: `1.5px solid ${focusedField === 'message' ? '#3B82F6' : '#E2E8F0'}`,
                                                background: focusedField === 'message' ? '#FFFFFF' : '#F8FAFC',
                                                fontSize: '1rem',
                                                lineHeight: 1.4,
                                                color: '#1E293B',
                                                outline: 'none',
                                                resize: 'vertical',
                                                minHeight: '100px',
                                                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: focusedField === 'message'
                                                    ? '0 0 0 3px rgba(59,130,246,0.08), 0 4px 12px rgba(59,130,246,0.06)'
                                                    : '0 1px 2px rgba(0,0,0,0.04)',
                                            }}
                                        />
                                    </div>

                                    {/* Submit Button — clean, no shimmer, Framer-only transforms */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={!isSubmitting ? { y: -2 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                        style={{
                                            width: '100%',
                                            padding: '15px 24px',
                                            borderRadius: '14px',
                                            border: 'none',
                                            background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                                            color: '#FFFFFF',
                                            fontFamily: "'Nunito', sans-serif",
                                            fontWeight: 700,
                                            fontSize: '0.95rem',
                                            letterSpacing: '0.02em',
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                            opacity: isSubmitting ? 0.7 : 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            boxShadow: '0 4px 14px rgba(59,130,246,0.2)',
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div style={{
                                                    width: '18px', height: '18px', borderRadius: '50%',
                                                    border: '2px solid rgba(255,255,255,0.3)',
                                                    borderTopColor: '#FFFFFF',
                                                    animation: 'spin 0.7s linear infinite',
                                                }} />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Submit Inquiry
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                </svg>
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default PreschoolContactSection;
