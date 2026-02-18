import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { submitWeb3Form, getWeb3FormErrorMessage } from '../lib/web3forms';

const CONTACT_WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_CONTACT_ACCESS_KEY;

const Contact = () => {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };

    const [formData, setFormData] = useState({
        ...initialFormData
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitError, setSubmitError] = useState('');

    const fullNameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)+$/;
    const emailRegex = /^[a-z][a-z0-9._%+-]*@[a-z][a-z-]*(\.[a-z][a-z-]*)+$/i;

    const validateField = (name, value) => {
        const trimmed = value.trim();

        switch (name) {
            case 'name': {
                if (!trimmed) return 'Full name is required';
                if (!fullNameRegex.test(trimmed)) return 'Enter first name and last name (letters only)';
                return '';
            }
            case 'email': {
                if (!trimmed) return 'Email address is required';
                if (!emailRegex.test(trimmed)) {
                    return 'Use a valid email (must start with a letter and domain after @ cannot start with a number)';
                }
                return '';
            }
            case 'phone': {
                if (!trimmed) return 'Phone number is required';
                const digitsOnly = trimmed.replace(/\D/g, '');
                if (!/^[6-9]\d{9}$/.test(digitsOnly) || /^(\d)\1{9}$/.test(digitsOnly)) {
                    return 'Please enter a valid 10-digit phone number';
                }
                return '';
            }
            case 'subject': {
                if (!trimmed) return 'Subject is required';
                if (trimmed.length < 3) return 'Subject must be at least 3 characters';
                return '';
            }
            case 'message': {
                if (!trimmed) return 'Message is required';
                if (trimmed.length < 10) return 'Message must be at least 10 characters';
                return '';
            }
            default:
                return '';
        }
    };

    const validateForm = () => {
        const validationErrors = {};
        Object.entries(formData).forEach(([name, value]) => {
            const error = validateField(name, value);
            if (error) validationErrors[name] = error;
        });
        return validationErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nextValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;

        setFormData({
            ...formData,
            [name]: nextValue
        });

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, nextValue)
        }));

        if (submitStatus) {
            setSubmitStatus(null);
        }
        if (submitError) {
            setSubmitError('');
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setSubmitStatus(null);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        setSubmitError('');

        try {
            await submitWeb3Form({
                accessKey: CONTACT_WEB3FORMS_KEY,
                subject: `Contact Enquiry: ${formData.subject}`,
                fromName: 'TDK Group Website - Contact Form',
                replyTo: formData.email,
                fields: {
                    form_type: 'Contact Us',
                    target_email: 'info@tdkgroup.edu',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    enquiry_subject: formData.subject,
                    message: formData.message,
                },
            });

            setSubmitStatus('success');
            setErrors({});
            setFormData(initialFormData);
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Contact form submission failed:', error);
            setSubmitStatus('error');
            setSubmitError(getWeb3FormErrorMessage(error));
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: 'Our Location',
            content: 'TDK Group of Institutions, Hoskote, Bangalore',
            link: 'https://maps.google.com',
            accent: '#6366F1',
            iconBg: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
            cardBg: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 100%)',
            delay: 0
        },
        {
            icon: <Phone size={24} />,
            title: 'Phone Number',
            content: '+91 1234567890',
            link: 'tel:+911234567890',
            accent: '#2563EB',
            iconBg: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
            cardBg: 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)',
            delay: 0.1
        },
        {
            icon: <Mail size={24} />,
            title: 'Email Address',
            content: 'info@tdkgroup.edu',
            link: 'mailto:info@tdkgroup.edu',
            accent: '#7C3AED',
            iconBg: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
            cardBg: 'linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 100%)',
            delay: 0.2
        },
        {
            icon: <Clock size={24} />,
            title: 'Working Hours',
            content: 'Mon - Sat:\n8:00 AM - 4:00 PM',
            link: null,
            accent: '#DB2777',
            iconBg: 'linear-gradient(135deg, #DB2777 0%, #EC4899 100%)',
            cardBg: 'linear-gradient(180deg, #FFFFFF 0%, #FDF2F8 100%)',
            delay: 0.3
        }
    ];

    return (
        <main style={{ paddingTop: '96px', minHeight: '100vh', background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>
            {/* Hero Section */}
            <section style={{ 
                background: 'linear-gradient(135deg, #F0F9FF 0%, #E0E7FF 50%, #DBEAFE 100%)',
                padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
                textAlign: 'center',
                color: '#0F172A',
                position: 'relative',
                boxShadow: 'inset 0 -1px 0 rgba(148,163,184,0.15)',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', top: '-120px', left: '-100px', background: 'radial-gradient(circle, rgba(99,102,241,0.16), transparent 70%)', pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', bottom: '-140px', right: '-90px', background: 'radial-gradient(circle, rgba(59,130,246,0.14), transparent 70%)', pointerEvents: 'none' }}></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', marginBottom: '18px', borderRadius: '9999px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.22)', color: '#6366F1', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        • Contact Desk
                    </div>
                    <h1 style={{ 
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        marginBottom: '16px',
                        textAlign: 'center',
                        color: '#0F172A'
                    }}>
                        Get in Touch
                    </h1>
                    <p style={{ 
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        color: '#334155',
                        lineHeight: 1.6,
                        textAlign: 'center',
                        padding: '0 16px'
                    }}>
                        We'd love to hear from you. Reach out to us for admissions, campus tours, or any questions about TDK Group of Institutions.
                    </p>
                </motion.div>
            </section>

            {/* Contact Info Cards */}
            <section style={{ 
                padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
                maxWidth: '1200px',
                margin: '0 auto',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
                position: 'relative'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    style={{ textAlign: 'center', marginBottom: '32px' }}
                >
                    <span style={{ display: 'inline-block', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6366F1', background: '#EEF2FF', border: '1px solid #E0E7FF', borderRadius: '9999px', padding: '6px 14px', marginBottom: '12px' }}>
                        Reach Us Easily
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.45rem, 3vw, 2rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                        Everything You Need to Connect
                    </h2>
                </motion.div>

                <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                    gap: '24px',
                    marginBottom: '48px'
                }}>
                    {contactInfo.map((info) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: info.delay }}
                            style={{
                                background: info.cardBg,
                                padding: '32px 24px',
                                borderRadius: '20px',
                                boxShadow: '0 10px 28px rgba(2, 6, 23, 0.08)',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: info.link ? 'pointer' : 'default',
                                border: `1px solid ${info.accent}22`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{ 
                                y: -8,
                                boxShadow: `0 18px 36px ${info.accent}33`
                            }}
                            onClick={() => info.link && window.open(info.link, info.link.startsWith('http') ? '_blank' : '_self')}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: info.iconBg }}></div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                background: info.iconBg,
                                color: 'white',
                                marginBottom: '16px',
                                boxShadow: `0 10px 20px ${info.accent}40`
                            }}>
                                {info.icon}
                            </div>
                            <h3 style={{
                                fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                                fontWeight: 700,
                                marginBottom: '8px',
                                color: '#1e293b',
                                textAlign: 'center'
                            }}>
                                {info.title}
                            </h3>
                            {info.link ? (
                                <a
                                    href={info.link}
                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        color: info.accent,
                                        lineHeight: 1.6,
                                        textAlign: 'center',
                                        padding: '0 8px',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        display: 'inline-block',
                                        whiteSpace: 'pre-line'
                                    }}
                                >
                                    {info.content}
                                </a>
                            ) : (
                                info.title === 'Working Hours' ? (
                                    <div style={{
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        color: '#475569',
                                        lineHeight: 1.6,
                                        padding: '0 8px',
                                        fontWeight: 600,
                                        width: '100%'
                                    }}>
                                        <span style={{ display: 'block', textAlign: 'center' }}>
                                            {info.content.split('\n')[0]}
                                        </span>
                                        <span style={{ display: 'block', textAlign: 'center' }}>
                                            {info.content.split('\n')[1]}
                                        </span>
                                    </div>
                                ) : (
                                    <p style={{
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        color: '#475569',
                                        lineHeight: 1.6,
                                        textAlign: 'center',
                                        padding: '0 8px',
                                        fontWeight: 600,
                                        whiteSpace: 'pre-line'
                                    }}>
                                        {info.content}
                                    </p>
                                )
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
                        padding: 'clamp(32px, 6vw, 48px)',
                        borderRadius: '24px',
                        boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12)',
                        border: '1px solid rgba(99,102,241,0.14)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)' }}></div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '9999px', background: 'rgba(99,102,241,0.09)', border: '1px solid rgba(99,102,241,0.18)', color: '#6366F1', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                        • Enquiry Form
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                        fontWeight: 800,
                        marginBottom: '8px',
                        color: '#0F172A',
                        textAlign: 'center',
                        letterSpacing: '-0.02em'
                    }}>
                        Send Us a Message
                    </h2>
                    <p style={{
                        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                        color: '#475569',
                        marginBottom: '32px',
                        textAlign: 'center',
                        padding: '0 16px',
                        lineHeight: 1.65
                    }}>
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <label htmlFor="contact-name" style={{ 
                                    display: 'block',
                                    fontSize: 'clamp(0.85rem, 1.9vw, 0.92rem)',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                    color: '#334155',
                                    textAlign: 'left',
                                    letterSpacing: '0.02em'
                                }}>
                                    Full Name *
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    aria-invalid={!!errors.name}
                                    style={{
                                        width: '100%',
                                        padding: '13px 16px',
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        border: `1.5px solid ${errors.name ? '#EF4444' : '#D9E2EC'}`,
                                        borderRadius: '12px',
                                        outline: 'none',
                                        transition: 'all 0.25s ease',
                                        textAlign: 'left',
                                        background: '#F8FAFC'
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors.name && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="contact-email" style={{ 
                                    display: 'block',
                                    fontSize: 'clamp(0.85rem, 1.9vw, 0.92rem)',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                    color: '#334155',
                                    textAlign: 'left',
                                    letterSpacing: '0.02em'
                                }}>
                                    Email Address *
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    aria-invalid={!!errors.email}
                                    style={{
                                        width: '100%',
                                        padding: '13px 16px',
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        border: `1.5px solid ${errors.email ? '#EF4444' : '#D9E2EC'}`,
                                        borderRadius: '12px',
                                        outline: 'none',
                                        transition: 'all 0.25s ease',
                                        textAlign: 'left',
                                        background: '#F8FAFC'
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors.email && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.email}</p>}
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <label htmlFor="contact-phone" style={{ 
                                    display: 'block',
                                    fontSize: 'clamp(0.85rem, 1.9vw, 0.92rem)',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                    color: '#334155',
                                    textAlign: 'left',
                                    letterSpacing: '0.02em'
                                }}>
                                    Phone Number *
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    autoComplete="tel"
                                    inputMode="numeric"
                                    maxLength={10}
                                    aria-invalid={!!errors.phone}
                                    style={{
                                        width: '100%',
                                        padding: '13px 16px',
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        border: `1.5px solid ${errors.phone ? '#EF4444' : '#D9E2EC'}`,
                                        borderRadius: '12px',
                                        outline: 'none',
                                        transition: 'all 0.25s ease',
                                        textAlign: 'left',
                                        background: '#F8FAFC'
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.phone}</p>}
                            </div>
                            <div>
                                <label htmlFor="contact-subject" style={{ 
                                    display: 'block',
                                    fontSize: 'clamp(0.85rem, 1.9vw, 0.92rem)',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                    color: '#334155',
                                    textAlign: 'left',
                                    letterSpacing: '0.02em'
                                }}>
                                    Subject *
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={!!errors.subject}
                                    style={{
                                        width: '100%',
                                        padding: '13px 16px',
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        border: `1.5px solid ${errors.subject ? '#EF4444' : '#D9E2EC'}`,
                                        borderRadius: '12px',
                                        outline: 'none',
                                        transition: 'all 0.25s ease',
                                        textAlign: 'left',
                                        background: '#F8FAFC'
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors.subject && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.subject}</p>}
                            </div>
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label htmlFor="contact-message" style={{ 
                                display: 'block',
                                fontSize: 'clamp(0.85rem, 1.9vw, 0.92rem)',
                                fontWeight: 700,
                                marginBottom: '8px',
                                color: '#334155',
                                textAlign: 'left',
                                letterSpacing: '0.02em'
                            }}>
                                Message *
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                aria-invalid={!!errors.message}
                                rows="6"
                                style={{
                                    width: '100%',
                                    padding: '13px 16px',
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                    border: `1.5px solid ${errors.message ? '#EF4444' : '#D9E2EC'}`,
                                    borderRadius: '12px',
                                    outline: 'none',
                                    transition: 'all 0.25s ease',
                                    resize: 'vertical',
                                    fontFamily: 'inherit',
                                    textAlign: 'left',
                                    background: '#F8FAFC'
                                }}
                                onBlur={handleBlur}
                            />
                            {errors.message && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px' }}>{errors.message}</p>}
                        </div>

                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    padding: '12px 16px',
                                    background: 'linear-gradient(180deg, #ECFDF5 0%, #D1FAE5 100%)',
                                    color: '#065F46',
                                    borderRadius: '10px',
                                    border: '1px solid #A7F3D0',
                                    marginBottom: '16px',
                                    fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                                    textAlign: 'center'
                                }}
                            >
                                Thank you! Your message has been sent successfully.
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    padding: '12px 16px',
                                    background: 'linear-gradient(180deg, #FEF2F2 0%, #FEE2E2 100%)',
                                    color: '#991B1B',
                                    borderRadius: '10px',
                                    border: '1px solid #FECACA',
                                    marginBottom: '16px',
                                    fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                                    textAlign: 'center'
                                }}
                            >
                                {submitError || 'Unable to send right now. Please try again in a moment.'}
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: '100%',
                                padding: '15px 24px',
                                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                                fontWeight: 700,
                                color: 'white',
                                background: isSubmitting 
                                    ? 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
                                    : 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 55%, #EC4899 100%)',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: 'all 0.3s ease',
                                boxShadow: isSubmitting ? 'none' : '0 12px 24px rgba(99,102,241,0.28)'
                            }}
                        >
                            <Send size={20} />
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            {/* Map Section */}
            <section style={{ 
                padding: 'clamp(48px, 8vw, 80px) clamp(16px, 4vw, 24px)',
                backgroundColor: 'white'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                        fontWeight: 800,
                        marginBottom: '32px',
                        color: '#1e293b',
                        textAlign: 'center'
                    }}>
                        Find Us on the Map
                    </h2>
                    <a
                        href="https://www.google.com/maps?q=Below+TDK+Coaching+Academy,+Gangamma+Gudi+Main+Road,+M.V.+Extension,+Hosakote+Town,+Bengaluru+Rural+-+562114"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open location in Google Maps"
                        className="contact-map-frame"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '400px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps?q=Below+TDK+Coaching+Academy,+Gangamma+Gudi+Main+Road,+M.V.+Extension,+Hosakote+Town,+Bengaluru+Rural+-+562114&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, pointerEvents: 'none' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="TDK Group Location"
                        />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Contact;
