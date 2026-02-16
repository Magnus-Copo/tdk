import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ActivityCard = ({ title, description, image, theme, tags, className = '' }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group relative h-full flex flex-col overflow-visible rounded-[2.5rem] bg-white transition-all duration-500 ${className}`}
        >
            {/* --- Double Border Layer (Outer Glow) --- */}
            <div className={`absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-br from-white via-white to-transparent opacity-100 group-hover:opacity-100 z-0 border border-slate-100 shadow-sm`} />

            {/* --- Colored Shadow Glow --- */}
            <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl -z-10 ${theme.primary.replace('bg-', 'bg-')} opacity-20`} />

            {/* --- Card Content Container (Inner) --- */}
            <div className={`relative z-10 flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 group-hover:border-transparent transition-colors duration-300`}>

                {/* Image Header with Curvature */}
                <div className="relative h-64 w-full overflow-hidden">
                    <motion.div
                        className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"
                    />
                    {/* Color Overlay Tint */}
                    <div className={`absolute inset-0 z-10 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${theme.primary}`} />

                    <motion.img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.12, rotate: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    {/* Floating Badge */}
                    <div className="absolute top-5 right-5 z-20">
                        <div className={`backdrop-blur-md bg-white/80 border border-white/60 ${theme.secondary} text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5`}>
                            <Sparkles className="w-3.5 h-3.5" />
                            {tags[0]}
                        </div>
                    </div>
                </div>

                {/* Body Content */}
                <div className="relative px-8 pb-8 pt-2 flex flex-col flex-grow">
                    {/* Decorative Gradient Background in body */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    <div className="relative z-10">
                        <h3 className="text-2xl font-extrabold text-slate-800 mb-2 tracking-tight group-hover:text-slate-900 transition-colors">
                            {title}
                        </h3>

                        {/* Title Underline Accent */}
                        <div className={`h-1 w-12 rounded-full ${theme.primary} mb-4 opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-300`} />

                        <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                            {description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {tags.slice(1).map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`text-xs font-bold px-3 py-1.5 rounded-lg ${theme.soft} ${theme.secondary} border ${theme.accent} border-opacity-50`}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Magnetic Button Area */}
                    <div className="mt-auto relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full overflow-hidden rounded-2xl py-3.5 px-6 font-bold text-sm text-white shadow-md transition-all 
                                ${theme.primary} 
                                hover:shadow-lg hover:brightness-105 flex items-center justify-between group/btn`}
                        >
                            <span className="flex items-center gap-2">
                                Explore Activity
                            </span>
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover/btn:-rotate-45" />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ActivityCard;
