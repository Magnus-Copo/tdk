/**
 * preUniversityData.jsx
 * Data layer for the Pre-University (PUC) Tuitions page.
 * Covers 1st & 2nd PUC across Science, Arts, and Commerce streams.
 */

import React from 'react';

/* ── Hero Section Stats ── */
export const PUC_HERO_STATS = [
    { value: '1200+', label: 'PUC Students' },
    { value: '95', label: '% Board Pass Rate' },
    { value: '15+', label: 'Years Legacy' },
];

/* ── Stream Definitions ── */
export const PUC_STREAMS = [
    {
        id: 'science',
        title: 'Science',
        tagline: 'PCMB · PCMC',
        description:
            'Rigorous coaching in Physics, Chemistry, Mathematics, and Biology/Computer Science. Builds the analytical foundation for engineering, medical, and research careers.',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'English', 'Kannada'],
        careerPaths: ['Engineering', 'Medicine', 'Research', 'Data Science'],
        accentColor: '#3B82F6',
        accentBg: '#EFF6FF',
        gradientFrom: '#3B82F6',
        gradientTo: '#6366F1',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3h6v7a3 3 0 01-3 3v0a3 3 0 01-3-3V3z" />
                <path d="M12 13v3" />
                <path d="M7 21h10" />
                <path d="M5 16c0-2 2.5-3 4-3" />
                <path d="M19 16c0-2-2.5-3-4-3" />
                <circle cx="8" cy="5" r="0.5" fill="currentColor" />
                <circle cx="15" cy="7" r="0.5" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: 'commerce',
        title: 'Commerce',
        tagline: 'Accounts, Business, Economics',
        description:
            'Mastery in Accountancy, Business Studies, and Economics. Prepares students for CA, CS, CMA, and top-tier B-School admissions.',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Statistics', 'English', 'Kannada'],
        careerPaths: ['CA/CS', 'Banking', 'MBA', 'Entrepreneurship'],
        accentColor: '#10B981',
        accentBg: '#ECFDF5',
        gradientFrom: '#10B981',
        gradientTo: '#14B8A6',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
    },
    {
        id: 'arts',
        title: 'Arts',
        tagline: 'Humanities, Social Sciences',
        description:
            'Deep study of History, Political Science, Sociology, Psychology, and Languages. Opens doors to law, civil services, journalism, and academia.',
        subjects: ['History', 'Political Science', 'Sociology', 'Psychology', 'English', 'Kannada', 'Optional Language'],
        careerPaths: ['Law', 'Civil Services', 'Journalism', 'Academia'],
        accentColor: '#A855F7',
        accentBg: '#FAF5FF',
        gradientFrom: '#A855F7',
        gradientTo: '#EC4899',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
];

/* ── PUC Year Tiers ── */
export const PUC_YEARS = [
    {
        id: '1st-puc',
        label: '1st PUC',
        description: 'Strong conceptual foundation. Build study habits and subject mastery early.',
    },
    {
        id: '2nd-puc',
        label: '2nd PUC',
        description: 'Board exam mastery. Intensive revision, mock exams, and performance coaching.',
    },
];

/* ── Neuromarketing Section Data ── */
export const PUC_NEURO_SOCIAL_PROOF = [
    { value: '1200+', label: 'Students Enrolled This Year' },
    { value: '92%', label: 'Score Above 80% in Boards' },
    { value: '45+', label: 'Board Toppers Produced' },
];

export const PUC_NEURO_ANCHORS = [
    {
        id: 'top-results',
        stat: 'Top 5%',
        label: 'PUC Results in Karnataka',
        description: 'Our students consistently rank in the top percentile across all three streams.',
        icon: '🏆',
    },
    {
        id: 'faculty-exp',
        stat: '20+',
        label: 'Years Average Faculty Experience',
        description: 'Seasoned educators from premier institutions with deep subject expertise.',
        icon: '👨‍🏫',
    },
    {
        id: 'competitive',
        stat: '3x',
        label: 'Higher Competitive Exam Clearance',
        description: 'Our students clear CET, JEE, and NEET at 3x the state average.',
        icon: '🎯',
    },
];

export const PUC_COMMITMENT_STEPS = [
    {
        step: 1,
        title: 'Enquire',
        description: 'Share your details and stream preference. We respond within 24 hours.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
    },
    {
        step: 2,
        title: 'Visit & Experience',
        description: 'Tour our classrooms, meet faculty, and attend a free demo session.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        step: 3,
        title: 'Enroll & Excel',
        description: 'Secure your seat, receive a personalized study plan, and begin your journey.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

export const PUC_TESTIMONIALS = [
    {
        id: 'testimonial-1',
        name: 'Priya R.',
        stream: 'Science (PCMB)',
        quote: 'The faculty here made Physics feel intuitive. I scored 95% in my board exams and cracked CET in my first attempt.',
        year: '2nd PUC, 2025',
    },
    {
        id: 'testimonial-2',
        name: 'Arjun K.',
        stream: 'Commerce',
        quote: 'Accountancy was my weakest subject, but the structured coaching turned it into my strongest. I am now pursuing CA.',
        year: '2nd PUC, 2024',
    },
    {
        id: 'testimonial-3',
        name: 'Meera S.',
        stream: 'Arts',
        quote: 'The teachers encouraged critical thinking over rote learning. I cleared the CLAT exam and got into NLU Bangalore.',
        year: '2nd PUC, 2025',
    },
];

/* ── Features / Differentiators ── */
export const PUC_FEATURES = [
    { id: 'lab', label: 'Fully-Equipped Labs', icon: '🔬' },
    { id: 'library', label: 'Research Library', icon: '📚' },
    { id: 'mocks', label: 'Weekly Mock Exams', icon: '📝' },
    { id: 'mentoring', label: '1-on-1 Mentoring', icon: '🎓' },
    { id: 'digital', label: 'Digital Resources', icon: '💻' },
    { id: 'counselling', label: 'Career Counselling', icon: '🧭' },
];
