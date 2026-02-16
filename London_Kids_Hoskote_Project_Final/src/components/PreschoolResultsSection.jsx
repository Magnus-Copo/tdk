import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';

const RESULT_IMAGES = [
    { id: 1, image: '/src/assets/images/results1.jpeg', label: 'Outstanding Performance' },
    { id: 2, image: '/src/assets/images/results2.jpeg', label: 'Academic Excellence' },
    { id: 3, image: '/src/assets/images/results3.jpeg', label: 'Top Achievers' },
    { id: 4, image: '/src/assets/images/results4.jpeg', label: 'School Pride' },
    { id: 5, image: '/src/assets/images/results5.jpeg', label: 'Success Stories' },
];

// Duplicate for infinite loop
const SLIDER_ITEMS = [...RESULT_IMAGES, ...RESULT_IMAGES];

const PreschoolResultsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-rose-50 via-purple-50 to-sky-50 overflow-hidden relative">

            {/* Playful Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-100/20 rounded-full blur-3xl -z-10"></div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 mb-12 relative z-10">
                <SectionHeading
                    subtitle="Our Achievements"
                    title="Celebrating Student Success"
                    description="A glimpse into the remarkable milestones and joyful moments of our young achievers."
                />
            </div>

            {/* Infinite Slider Container */}
            <div className="relative w-full overflow-hidden py-8 z-10">
                {/* Gradient Masks for smooth fade edges - matched to section bg */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-rose-50/90 to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-sky-50/90 to-transparent"></div>

                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60, // Slower speed
                    }}
                >
                    {SLIDER_ITEMS.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="relative w-[400px] h-[260px] md:w-[500px] md:h-[320px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Real Image */}
                            <div className="w-full h-full">
                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PreschoolResultsSection;
