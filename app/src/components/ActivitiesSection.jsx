import React from 'react';
import SectionHeading from './common/SectionHeading';
import ActivityCard from './common/ActivityCard';
import { ACTIVITIES } from '../data/preschoolData';

const ActivitiesSection = () => {
    return (
        <section id="activities" className="py-32 relative overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50">

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <SectionHeading
                    subtitle="Life at London Kids School"
                    title="Experience the Joy of Learning"
                    description="From creative arts to outdoor adventures, every day is a new opportunity for discovery, friendship, and fun."
                    className="mb-24"
                />

                {/* Staggered Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-stretch">
                    {ACTIVITIES.map((activity) => (
                        <div
                            key={activity.id}
                            className="h-full"
                        >
                            <ActivityCard {...activity} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Wave Separator Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default ActivitiesSection;
