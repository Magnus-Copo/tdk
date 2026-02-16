import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * WhatsAppWidget — Floating WhatsApp button with tooltip,
 * entrance animation, and pulse ring. Fixed to bottom-right.
 *
 * @description Opens WhatsApp chat with pre-filled message.
 * Uses wa.me deep-link for cross-device compatibility.
 */
const PHONE_NUMBER = '919008009830'; // +91 90080 09830 (no +, no spaces)
const DEFAULT_MESSAGE = 'Hi! I would like to know more about London Kids Pre-School admissions.';

const WhatsAppWidget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    /* ── Delay entrance so it doesn't compete with page load ── */
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2200);
        return () => clearTimeout(timer);
    }, []);

    /* ── Auto-show tooltip once after 5s if user hasn't interacted ── */
    useEffect(() => {
        if (!hasInteracted && isVisible) {
            const tooltipTimer = setTimeout(() => setShowTooltip(true), 3500);
            const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
            return () => { clearTimeout(tooltipTimer); clearTimeout(hideTimer); };
        }
    }, [isVisible, hasInteracted]);

    const waLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 30 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    style={{
                        position: 'fixed',
                        bottom: 'clamp(20px, 4vw, 32px)',
                        right: 'clamp(20px, 4vw, 32px)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                    }}
                >
                    {/* ── Tooltip ── */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                style={{
                                    background: '#FFFFFF',
                                    color: '#1E293B',
                                    fontFamily: "'Nunito', sans-serif",
                                    fontSize: '0.82rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.005em',
                                    padding: '10px 16px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)',
                                    whiteSpace: 'nowrap',
                                    pointerEvents: 'none',
                                    lineHeight: 1.4,
                                }}
                            >
                                Chat with us on WhatsApp 💬
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Button ── */}
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                        onClick={() => setHasInteracted(true)}
                        onMouseEnter={() => { setShowTooltip(true); setHasInteracted(true); }}
                        onMouseLeave={() => setShowTooltip(false)}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #25D366, #128C7E)',
                            boxShadow: '0 4px 18px rgba(37,211,102,0.35), 0 2px 6px rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        }}
                        onFocus={() => setShowTooltip(true)}
                        onBlur={() => setShowTooltip(false)}
                    >
                        {/* Pulse ring */}
                        <span
                            aria-hidden="true"
                            style={{
                                position: 'absolute',
                                inset: '-4px',
                                borderRadius: '50%',
                                border: '2px solid rgba(37,211,102,0.25)',
                                animation: 'wa-pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                            }}
                        />

                        {/* WhatsApp SVG icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            fill="white"
                            style={{ width: '30px', height: '30px' }}
                            aria-hidden="true"
                        >
                            <path d="M16.004 2.003C8.273 2.003 2.003 8.272 2.003 16a13.89 13.89 0 001.886 6.994L2 30l7.2-1.87A13.94 13.94 0 0016.004 30C23.73 30 30 23.73 30 16.003 30 8.272 23.73 2.003 16.004 2.003zm0 25.45a11.4 11.4 0 01-5.826-1.6l-.418-.248-4.33 1.136 1.157-4.23-.272-.433a11.42 11.42 0 01-1.754-6.075c0-6.31 5.137-11.445 11.45-11.445 6.31 0 11.443 5.134 11.443 11.445-.003 6.313-5.14 11.45-11.45 11.45zm6.28-8.574c-.345-.172-2.04-1.006-2.356-1.12-.316-.117-.546-.173-.776.172-.23.345-.89 1.12-1.092 1.35-.2.23-.403.258-.748.087-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.042-1.918-2.387-.2-.345-.02-.531.152-.703.153-.153.345-.403.517-.604.173-.2.23-.345.345-.575.116-.23.058-.432-.03-.604-.086-.172-.775-1.87-1.062-2.56-.28-.67-.563-.58-.776-.59-.2-.01-.43-.012-.66-.012-.23 0-.604.087-.92.432-.316.345-1.207 1.18-1.207 2.878s1.236 3.338 1.408 3.568c.172.23 2.43 3.71 5.887 5.203.822.355 1.464.567 1.964.726.825.262 1.577.225 2.17.137.663-.1 2.04-.834 2.328-1.64.288-.804.288-1.493.2-1.64-.085-.144-.315-.23-.66-.403z" />
                        </svg>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

/* ── Inject keyframes for pulse ring ── */
if (typeof document !== 'undefined') {
    const styleId = 'wa-widget-keyframes';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            @keyframes wa-pulse-ring {
                0% { transform: scale(1); opacity: 0.5; }
                70% { transform: scale(1.35); opacity: 0; }
                100% { transform: scale(1.35); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

export default WhatsAppWidget;
