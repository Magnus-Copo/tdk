import React, { useEffect } from 'react';
import PUCHeroSection from '../components/PUCHeroSection';
import PUCStreamsSection from '../components/PUCStreamsSection';
import PUCContactSection from '../components/PUCContactSection';

/**
 * PreUniversity — Page composition for the Pre-University (PUC) route.
 */
const PreUniversity = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '96px' }}>
            <PUCHeroSection />

            <PUCStreamsSection />

            <PUCContactSection />
        </div>
    );
};

export default PreUniversity;
