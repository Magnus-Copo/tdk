import React, { useEffect } from 'react';
import VisionMissionSection from '../components/VisionMissionSection';

const About = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <section style={{ padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(120deg, var(--color-bg) 60%, #E0E7FF 100%)' }}>
                {/* Blobs */}
                <div className="blob" style={{ width: '500px', height: '500px', background: 'linear-gradient(135deg, var(--color-accent), #FFAB91)', top: '-200px', left: '-100px', opacity: 0.4, position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }}></div>
                <div className="blob" style={{ width: '400px', height: '400px', background: 'linear-gradient(135deg, #93C5FD, #818CF8)', bottom: '-100px', right: '-100px', opacity: 0.4, animationDelay: '-5s', position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }}></div>

                <div className="reveal active" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', display: 'inline-block' }}>Our Story</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--color-neutral-900)' }}>
                        Nurturing Future <span style={{ fontWeight: 800, background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-calm))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Global Citizens</span>
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-neutral-700)', marginBottom: '32px' }}>
                        Guided by the vision of SKTEC Trust, we foster independent thinking, empathy, and holistic growth in every child.
                    </p>
                </div>
            </section>

            {/* SKTEC Trust Section */}
            <VisionMissionSection />

            {/* Leadership Section */}
            <section style={{ padding: '100px 24px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    {/* Principal */}
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', inset: '10px -10px -10px 10px', background: '#E0E7FF', borderRadius: '24px', zIndex: -1 }}></div>
                            <img src="/src/assets/images/principal_image_tdk.png" alt="Principal" style={{ width: '100%', height: '550px', objectFit: 'cover', objectPosition: 'center 15%', borderRadius: '24px', backgroundColor: '#f8fafc', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div>
                            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>Leadership</span>
                            <h2 style={{ fontSize: '2.25rem', marginBottom: '24px', color: 'var(--color-neutral-900)' }}>From the Principal's Desk</h2>
                            <div style={{ color: 'var(--color-neutral-700)', lineHeight: 1.8, marginBottom: '24px' }}>
                                <p style={{ marginBottom: '16px' }}>As the Founder, Chairman, and Principal of TDK Group Of Institutions, I am committed to fostering a student-centric environment where every student can thrive academically, socially, and personally.</p>
                                <p style={{ marginBottom: '16px' }}>We embrace the principles of <strong>SACH</strong>: Scientific Enquiry, Agility, Creating Nature, and Unity. These values guide our commitment to developing well-rounded individuals who are curious, adaptable, and compassionate.</p>
                                <p>We remain focused on preparing students for success in a global society through open communication and collaboration.</p>
                            </div>
                            <div style={{ fontFamily: "'Nothing You Could Do', cursive", fontSize: '1.125rem', color: 'var(--color-primary)', marginTop: '16px' }}>- Principal</div>
                        </div>
                    </div>

                    {/* Head Mistress */}
                    <div className="reveal delay-200" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', direction: 'rtl' }}>
                        <div style={{ position: 'relative', direction: 'ltr' }}>
                            <div style={{ position: 'absolute', inset: '10px 10px -10px -10px', background: '#E8F5E9', borderRadius: '24px', zIndex: -1 }}></div>
                            <img src="/src/assets/images/head_mistress_tdk.png" alt="Head Mistress" style={{ width: '100%', height: '550px', objectFit: 'cover', objectPosition: 'center 15%', borderRadius: '24px', backgroundColor: '#f8fafc', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div style={{ direction: 'ltr' }}>
                            <span style={{ color: 'var(--color-calm)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>Message</span>
                            <h2 style={{ fontSize: '2.25rem', marginBottom: '24px', color: 'var(--color-neutral-900)' }}>Head Mistress's Message</h2>
                            <div style={{ color: 'var(--color-neutral-700)', lineHeight: 1.8 }}>
                                <p style={{ marginBottom: '16px' }}>As the Head Mistress and Secretary of SKTEC Trust, I extend a warm welcome to our community. We are dedicated to providing high-quality education that fosters critical thinking and holistic development.</p>
                                <p style={{ marginBottom: '16px' }}>We strive to create a supportive environment where every student feels valued. We believe in the importance of holistic development, embracing innovation, and instilling strong ethical values.</p>
                                <p>Gratitude to our dedicated staff and supportive parents for making our institute a vibrant learning community.</p>
                            </div>
                            <div style={{ fontFamily: "'Nothing You Could Do', cursive", fontSize: '1.125rem', color: 'var(--color-calm)', marginTop: '16px' }}>- Head Mistress</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
