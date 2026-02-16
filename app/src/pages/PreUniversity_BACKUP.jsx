import React, { useEffect } from 'react';
import PUCHeroSection from '../components/PUCHeroSection';
import PUCStreamsSection from '../components/PUCStreamsSection';
import PUCNeuroSection from '../components/PUCNeuroSection';
import PUCContactSection from '../components/PUCContactSection';
import StackingSection from '../components/common/StackingSection';

/**
 * PreUniversity — Page composition for the Pre-University (PUC) route.
 * Wraps each content section in StackingSection for scroll-based stacking.
 */
const PreUniversity = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '96px' }}>
            <PUCHeroSection />

            <StackingSection>
                <PUCStreamsSection />
            </StackingSection>

            <StackingSection>
                <PUCNeuroSection />
            </StackingSection>

            <StackingSection>
                <PUCContactSection />
            </StackingSection>
        </div>
    );
};

export default PreUniversity;
