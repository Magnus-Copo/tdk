import React, { useEffect } from 'react';
import { PROGRAMS, FEATURES } from '../data/preschoolData';
import SectionHeading from '../components/common/SectionHeading';
import PreschoolProgramCard from '../components/common/PreschoolProgramCard';
import FeatureCard from '../components/common/FeatureCard';
import PreSchoolHero from '../components/PreSchoolHero';
import ActivitiesSection from '../components/ActivitiesSection';
import PreschoolResultsSection from '../components/PreschoolResultsSection';
import PreschoolContactSection from '../components/PreschoolContactSection';

const PreSchool = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '96px' }}>
            <PreSchoolHero />

            {/* Programs Section */}
            <section id="programs" style={{ padding: 'clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)', background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 50%, #FEF3F2 100%)', position: 'relative' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                    <SectionHeading
                        subtitle="Our Programs"
                        title="Programs for Every Age"
                        description="Age-appropriate curricula designed to nurture your child's unique development at every stage."
                        className="reveal"
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', maxWidth: '1400px', margin: '0 auto' }}>
                        {PROGRAMS.map((program, index) => (
                            <PreschoolProgramCard key={program.id} {...program} className={`reveal delay-${(index + 1) * 100}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <ActivitiesSection />

            {/* Results Section */}
            <PreschoolResultsSection />

            {/* Features Section */}
            <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)', position: 'relative' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <SectionHeading
                        subtitle="Why Choose Us"
                        title="Nurturing Every Child's Potential"
                        className="reveal"
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '32px' }}>
                        {FEATURES.map((feature, index) => (
                            <FeatureCard key={feature.id} {...feature} className={`reveal delay-${(index + 1) * 100}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <PreschoolContactSection />
        </div>
    );
};

export default PreSchool;
