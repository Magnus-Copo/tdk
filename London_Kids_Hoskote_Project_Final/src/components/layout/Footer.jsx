import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '64px 24px 32px', backgroundColor: 'var(--color-neutral-900)', color: 'white' }}>
            <div style={{ maxWidth: '95%', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '300px' }}>
                        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
                            <img src="/src/assets/images/good_main_logo.jpg" alt="TDK Group Logo" style={{ height: '48px', width: 'auto' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
                                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>TDK Group of Institutions</span>
                                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)' }}>Excellence in Education</span>
                            </div>
                        </a>
                        <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--color-neutral-300)' }}>Nurturing young minds and helping children bloom into confident learners since 2010.</p>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '16px', fontWeight: 'bold' }}>Our Programs</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.875rem', padding: 0 }}>
                            <li style={{ marginBottom: '8px' }}><a href="/pre-school" style={{ color: 'var(--color-neutral-300)', textDecoration: 'none', transition: 'color 0.2s' }}>Pre-School</a></li>
                            <li style={{ marginBottom: '8px' }}><a href="/primary-school" style={{ color: 'var(--color-neutral-300)', textDecoration: 'none', transition: 'color 0.2s' }}>Primary School</a></li>
                            <li style={{ marginBottom: '8px' }}><a href="/pre-university" style={{ color: 'var(--color-neutral-300)', textDecoration: 'none', transition: 'color 0.2s' }}>Pre-University (PUC)</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '16px', fontWeight: 'bold' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.875rem', padding: 0 }}>
                            <li style={{ marginBottom: '8px' }}><a href="/" style={{ color: 'var(--color-neutral-300)', textDecoration: 'none', transition: 'color 0.2s' }}>Home</a></li>
                            <li style={{ marginBottom: '8px' }}><a href="/about" style={{ color: 'var(--color-neutral-300)', textDecoration: 'none', transition: 'color 0.2s' }}>About Us</a></li>
                            <li style={{ marginBottom: '8px' }}><a href="#admissions" style={{ color: 'var(--color-neutral-300)', textDecoration: 'none', transition: 'color 0.2s' }}>Admissions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '16px', fontWeight: 'bold' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.875rem', color: 'var(--color-neutral-300)', padding: 0 }}>
                            <li style={{ marginBottom: '8px' }}>123 Sunshine Lane</li>
                            <li style={{ marginBottom: '8px' }}>Happy Valley, CA 90210</li>
                            <li style={{ marginBottom: '8px' }}>(555) 123-4567</li>
                            <li>hello@tdkgroup.com</li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-neutral-700)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.875rem', color: 'var(--color-neutral-300)' }}>
                    <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} TDK Group of Institutions. All rights reserved.</p>
                    <p style={{ margin: 0 }}>
                        Powered by <a href="https://www.magnuscopo.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold' }}>Magnus Copo Technologies</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
