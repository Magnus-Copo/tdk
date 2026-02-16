import React, { useEffect } from 'react';
import { PROGRAMS, FEATURES } from '../data/preschoolData';
import SectionHeading from '../components/common/SectionHeading';
import PreschoolProgramCard from '../components/common/PreschoolProgramCard';
import FeatureCard from '../components/common/FeatureCard';
import PreSchoolHero from '../components/PreSchoolHero';
import StackingSection from '../components/common/StackingSection';
import ActivitiesSection from '../components/ActivitiesSection';
import PreschoolResultsSection from '../components/PreschoolResultsSection';
import PreschoolContactSection from '../components/PreschoolContactSection';

const PreSchool = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <PreSchoolHero />

            {/* Programs Section */}
            <StackingSection>
                <section id="programs" style={{ padding: '100px 24px', backgroundColor: 'var(--color-bg)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                        <SectionHeading
                            subtitle="Our Programs"
                            title="Programs for Every Age"
                            description="Age-appropriate curricula designed to nurture your child's unique development at every stage."
                            className="reveal"
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '32px' }}>
                            {PROGRAMS.map((program, index) => (
                                <PreschoolProgramCard key={program.id} {...program} className={`reveal delay-${(index + 1) * 100}`} />
                            ))}
                        </div>
                    </div>
                </section>
            </StackingSection>

            {/* Activities Section */}
            <StackingSection>
                <ActivitiesSection />
            </StackingSection>

            {/* Results Section */}
            <StackingSection>
                <PreschoolResultsSection />
            </StackingSection>

            {/* Features Section */}
            <StackingSection>
                <section style={{ padding: '100px 24px', background: 'var(--color-bg)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                        <SectionHeading
                            subtitle="Why Choose Us"
                            title="Nurturing Every Child's Potential"
                            className="reveal"
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                            {FEATURES.map((feature, index) => (
                                <FeatureCard key={feature.id} {...feature} className={`reveal delay-${(index + 1) * 100}`} />
                            ))}
                        </div>
                    </div>
                </section>
            </StackingSection>

            {/* Contact Section */}
            <StackingSection>
                <PreschoolContactSection />
            </StackingSection>
        </div>
    );
};

export default PreSchool;
