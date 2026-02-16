import React, { useState, useCallback, useEffect } from 'react';

/* ── Gallery image imports ── */
const imgAcademic = '/images/gallery/WhatsApp Image 2025-07-12 at 6.01.50 PM.jpeg';
const imgCreativeArts = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.00 PM (1).jpeg';
const imgClassroom = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.00 PM.jpeg';
const imgOutdoor = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.01 PM.jpeg';
const imgAwardCeremony = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.02 PM.jpeg';
const imgNatureMural = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.10 PM (1).jpeg';
const imgPlayArea = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.10 PM.jpeg';
const imgCorridor = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.11 PM.jpeg';
const imgInauguration = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.12 PM.jpeg';
const imgDecoratedHall = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.13 PM (2).jpeg';
const imgPrincipal = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.13 PM.jpeg';
const imgAbcMural = '/images/gallery/WhatsApp Image 2025-07-12 at 6.06.14 PM (1).jpeg';

const galleryItems = [
    { src: imgAcademic, alt: 'Students celebrating academic achievements with certificates', caption: 'Academic Excellence' },
    { src: imgAbcMural, alt: 'Vibrant London Kids ABC wall mural with cartoon characters', caption: 'Creative Campus Art' },
    { src: imgClassroom, alt: 'Preschool classroom with learning materials and educational charts', caption: 'Interactive Classrooms' },
    { src: imgCreativeArts, alt: 'Children engaged in creative arts and craft activities', caption: 'Creative Expression' },
    { src: imgOutdoor, alt: 'Children participating in outdoor physical activities and games', caption: 'Active Play' },
    { src: imgAwardCeremony, alt: 'Award ceremony celebrating student and staff achievements', caption: 'Award Celebrations' },
    { src: imgNatureMural, alt: 'Beautiful wall mural featuring children and nature elements', caption: 'Nature-Themed Décor' },
    { src: imgPlayArea, alt: 'Indoor play area with slides and toys for children', caption: 'Play & Discovery Zone' },
    { src: imgCorridor, alt: 'Colorful classroom furniture setup with alphabet floor mats', caption: 'Learning Environment' },
    { src: imgInauguration, alt: 'Inauguration ceremony in decorated classroom setting', caption: 'Inauguration Day' },
    { src: imgDecoratedHall, alt: 'Festively decorated hallway with balloons and nature murals', caption: 'Festive Celebrations' },
    { src: imgPrincipal, alt: 'School principal at desk with educational charts on wall', caption: 'Our Leadership' },
];

const AboutGallerySection = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = useCallback((i) => setLightboxIndex(i), []);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    
    const navigate = useCallback((dir) => {
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            const next = prev + dir;
            if (next < 0) return galleryItems.length - 1;
            if (next >= galleryItems.length) return 0;
            return next;
        });
    }, []);
    
    const handleKey = useCallback((e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigate(1);
        if (e.key === 'ArrowLeft') navigate(-1);
    }, [closeLightbox, navigate]);

    // Preload critical images for faster display
    useEffect(() => {
        galleryItems.slice(0, 8).forEach((item) => {
            const img = new Image();
            img.src = item.src;
        });
    }, []);

    return (
        <>
            <style>{`
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    grid-auto-rows: 140px;
                    gap: 12px;
                    max-width: 1280px;
                    margin: 0 auto;
                    grid-auto-flow: dense;
                }
                
                /* Bento Grid Layout - Balanced sizes without empty spaces */
                .gallery-card:nth-child(1) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(2) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(3) {
                    grid-column: span 1;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(4) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(5) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(6) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(7) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(8) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(9) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(10) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(11) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(12) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                
                .gallery-card {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    will-change: transform;
                }
                .gallery-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
                }
                .gallery-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    background: #e5e7eb;
                }
                .gallery-card-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                    color: white;
                    padding: 16px;
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }
                .gallery-card:hover .gallery-card-overlay {
                    opacity: 1;
                }
                .gallery-caption {
                    font-size: 0.95rem;
                    font-weight: 600;
                    margin: 0;
                }
                .lightbox {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    padding: 20px;
                }
                .lightbox img {
                    max-width: 90vw;
                    max-height: 85vh;
                    object-fit: contain;
                    border-radius: 8px;
                }
                .lightbox-btn {
                    position: absolute;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    color: white;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    transition: background 0.2s ease;
                }
                .lightbox-btn:hover {
                    background: rgba(255,255,255,0.2);
                }
                .lightbox-close {
                    top: 20px;
                    right: 20px;
                }
                .lightbox-prev {
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 32px;
                }
                .lightbox-next {
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 32px;
                }
                .lightbox-caption {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.7);
                    padding: 12px 24px;
                    border-radius: 8px;
                    color: white;
                    font-size: 0.9rem;
                }
                @media (max-width: 1024px) {
                    .gallery-grid {
                        grid-template-columns: repeat(4, 1fr);
                        grid-auto-rows: 150px;
                        gap: 10px;
                    }
                    /* Tablet bento layout */
                    .gallery-card:nth-child(1) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(2) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(3) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(4) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(5) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(6) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(7) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(8) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(9) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(10) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(11) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(12) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                }
                @media (max-width: 640px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr);
                        grid-auto-rows: 140px;
                        gap: 8px;
                    }
                    /* Mobile - stacked pairs */
                    .gallery-card:nth-child(odd) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(even) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(1),
                    .gallery-card:nth-child(5),
                    .gallery-card:nth-child(9) {
                        grid-row: span 2;
                    }
                }
            `}</style>

            <section style={{
                padding: 'clamp(70px, 10vw, 120px) clamp(16px, 4vw, 32px)',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 50%, #F8FAFC 100%)',
                position: 'relative',
            }}>
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '3px', background: 'linear-gradient(90deg, #3B82F6, #10B981, #F59E0B)', borderRadius: '0 0 3px 3px' }}></div>
                <div style={{ maxWidth: '1280px', margin: '0 auto', marginBottom: '48px', textAlign: 'center' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontSize: '0.78rem', fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '0.12em',
                        color: '#3B82F6',
                        padding: '6px 14px', borderRadius: '9999px',
                        background: '#EFF6FF', border: '1px solid #DBEAFE',
                        marginBottom: '16px',
                    }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6' }} />
                        {' '}Campus Life
                    </span>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: 800, lineHeight: 1.15,
                        letterSpacing: '-0.02em', color: '#0F172A',
                        margin: '16px 0 12px',
                    }}>
                        Moments That{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #3B82F6, #10B981)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Define Us</span>
                    </h2>
                    <p style={{
                        fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                        lineHeight: 1.7,
                        color: '#64748B',
                        maxWidth: '520px',
                        margin: '0 auto',
                    }}>
                        A glimpse into the vibrant world of learning, creativity, and joy at TDK Group of Institutions.
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item, i) => (
                        <div
                            key={item.caption}
                            className="gallery-card"
                            onClick={() => openLightbox(i)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    openLightbox(i);
                                }
                            }}
                        >
                            <img 
                                src={item.src} 
                                alt={item.alt} 
                                loading={i < 8 ? "eager" : "lazy"}
                                fetchpriority={i < 4 ? "high" : "auto"}
                            />
                            <div className="gallery-card-overlay">
                                <p className="gallery-caption">{item.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {lightboxIndex !== null && (
                <div 
                    className="lightbox"
                    onClick={closeLightbox}
                    onKeyDown={handleKey}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Gallery: ${galleryItems[lightboxIndex].caption}`}
                    ref={(el) => el?.focus()}
                >
                    <button
                        className="lightbox-btn lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >×</button>

                    <button
                        className="lightbox-btn lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                        aria-label="Previous"
                    >‹</button>

                    <img
                        src={galleryItems[lightboxIndex].src}
                        alt={galleryItems[lightboxIndex].alt}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="lightbox-btn lightbox-next"
                        onClick={(e) => { e.stopPropagation(); navigate(1); }}
                        aria-label="Next"
                    >›</button>

                    <div className="lightbox-caption">
                        {galleryItems[lightboxIndex].caption} ({lightboxIndex + 1}/{galleryItems.length})
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutGallerySection;
