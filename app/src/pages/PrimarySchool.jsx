import React, { useEffect } from 'react';
import PrimarySchoolHero from '../components/PrimarySchoolHero';
import TuitionProgramsSection from '../components/TuitionProgramsSection';
import PrimaryContactSection from '../components/PrimaryContactSection';

/**
 * PrimarySchool page — Expert tuitions for Grades 1 through 10
 * across CBSE, ICSE, and Karnataka State Board.
 */
const PrimarySchool = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '96px' }}>
            <PrimarySchoolHero />

            <TuitionProgramsSection />

            <PrimaryContactSection />
        </div>
    );
};

export default PrimarySchool;
