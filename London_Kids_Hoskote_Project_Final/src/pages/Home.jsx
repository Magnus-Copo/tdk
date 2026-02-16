import React, { useRef } from 'react';
import Hero from '../components/Hero';
import { HOME_PROGRAMS } from '../data/homeData';
import SectionHeading from '../components/common/SectionHeading';
import ProgramCard from '../components/common/ProgramCard';
import VisionMissionSection from '../components/VisionMissionSection';
import LeadershipMessage from '../components/LeadershipMessage';
import CTASection from '../components/CTASection';
import StackingSection from '../components/common/StackingSection';

const Home = () => {
    return (
        <main style={{ overflow: 'hidden' }}>
            <Hero />

            <StackingSection>
                <VisionMissionSection />
            </StackingSection>

            <StackingSection>
                <LeadershipMessage />
            </StackingSection>

            <StackingSection>
                <section id="programs" style={{ padding: '100px 24px', backgroundColor: 'var(--color-bg)' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                        <SectionHeading
                            subtitle="Our Educational Path"
                            title="Curriculum for Every Stage"
                            description="Scientifically calibrated educational stages designed to maximize cognitive potential at every phase of development."
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginTop: '48px' }}>
                            {HOME_PROGRAMS.map((program, index) => (
                                <ProgramCard key={program.id} {...program} />
                            ))}
                        </div>
                    </div>
                </section>
            </StackingSection>

            <StackingSection>
                <CTASection />
            </StackingSection>
        </main>
    );
};

export default Home;
