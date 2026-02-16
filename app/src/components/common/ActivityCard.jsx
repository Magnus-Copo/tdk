import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ActivityCard = ({ title, description, image, theme, tags, className = '' }) => {
    return (
        <div
            className={`group relative h-full flex flex-col overflow-visible rounded-[2.5rem] bg-white transition-all duration-500 ${className}`}
        >
            {/* --- Double Border Layer (Outer Glow) --- */}
            <div className={`absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-br from-white via-white to-transparent opacity-100 group-hover:opacity-100 z-0 border border-slate-100 shadow-sm`} />

            {/* --- Colored Shadow Glow - Removed hover effect --- */}
            <div className={`absolute -inset-1 opacity-0 transition duration-500 blur-2xl -z-10 ${theme.primary.replace('bg-', 'bg-')} opacity-20`} />

            {/* --- Card Content Container (Inner) --- */}
            <div className={`relative z-10 flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 group-hover:border-transparent transition-colors duration-300`}>

                {/* Image Header with Curvature */}
                <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                    {/* Color Overlay Tint - removed hover effect */}
                    <div className={`absolute inset-0 z-10 mix-blend-overlay opacity-0 transition-opacity duration-500 ${theme.primary}`} />

                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                    {/* Decorative Gradient Background in body - removed hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} opacity-0 transition-opacity duration-500 pointer-events-none`} />

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
                        <button
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
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
