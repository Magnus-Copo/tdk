import React from 'react';
import SectionHeading from './common/SectionHeading';
import ActivityCard from './common/ActivityCard';
import { ACTIVITIES } from '../data/preschoolData';
import { motion } from 'framer-motion';

const ActivitiesSection = () => {
    return (
        <section id="activities" className="py-32 relative overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50">

            {/* --- Organic Animated Background Shapes --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Blob 1 (Top Right) - Yellow/Orange */}
                <motion.div
                    animate={{
                        y: [0, -40, 0],
                        rotate: [0, 10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] mix-blend-multiply filter"
                />

                {/* Blob 2 (Bottom Left) - Blue/Cyan */}
                <motion.div
                    animate={{
                        y: [0, 50, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[120px] mix-blend-multiply filter"
                />

                {/* Blob 3 (Center) - Pink/Red check */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-50/50 rounded-full blur-[150px] mix-blend-multiply filter -z-10"
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <SectionHeading
                    subtitle="Life at London Kids School"
                    title="Experience the Joy of Learning"
                    description="From creative arts to outdoor adventures, every day is a new opportunity for discovery, friendship, and fun."
                    className="mb-24"
                />

                {/* Staggered Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-stretch">
                    {ACTIVITIES.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="h-full"
                        >
                            <ActivityCard {...activity} />
                        </motion.div>
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
