import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import { HOME_PROGRAMS } from '../data/homeData';

const SectionHeading = lazy(() => import('../components/common/SectionHeading'));
const ProgramCard = lazy(() => import('../components/common/ProgramCard'));
const VisionMissionSection = lazy(() => import('../components/VisionMissionSection'));
const LeadershipMessage = lazy(() => import('../components/LeadershipMessage'));
const CTASection = lazy(() => import('../components/CTASection'));

const Home = () => {
    return (
        <main>
            <Hero />

            <div style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
                <Suspense fallback={null}>
                    <VisionMissionSection />
                </Suspense>
            </div>

            <div style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}>
                <Suspense fallback={null}>
                    <LeadershipMessage />
                </Suspense>
            </div>

            <section id="programs" style={{ padding: 'clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)', background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 50%, #F9FAFB 100%)', contentVisibility: 'auto', containIntrinsicSize: '1100px' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <Suspense fallback={null}>
                        <SectionHeading
                            subtitle="Our Educational Path"
                            title="Curriculum for Every Stage"
                            description="Scientifically calibrated educational stages designed to maximize cognitive potential at every phase of development."
                        />
                    </Suspense>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px', marginTop: '48px' }}>
                        <Suspense fallback={null}>
                            {HOME_PROGRAMS.map((program) => (
                                <ProgramCard key={program.id} {...program} />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </section>

            <div style={{ contentVisibility: 'auto', containIntrinsicSize: '500px' }}>
                <Suspense fallback={null}>
                    <CTASection />
                </Suspense>
            </div>
        </main>
    );
};

export default Home;
