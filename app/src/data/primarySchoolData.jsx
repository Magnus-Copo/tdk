/**
 * primarySchoolData.jsx
 * Data layer for the Primary School / Tuition page.
 */

export const HERO_STATS = [
    { value: '1000+', label: 'Students Taught' },
    { value: '20', label: 'Years Legacy' },
    { value: '98', label: '% Pass Rate' },
];

export const TUITION_PROGRAMS = [
    {
        id: 'grade-1-4',
        title: 'Foundation',
        grades: 'Grades 1 – 4',
        boards: ['CBSE', 'ICSE', 'Karnataka State'],
        description:
            'Building rock-solid fundamentals in literacy, numeracy, and environmental science through conceptual clarity and activity-based learning.',
        subjects: ['English', 'Mathematics', 'EVS / Science', 'Kannada', 'Hindi'],
        accentColor: '#3B82F6',
        accentBg: '#EFF6FF',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
        ),
    },
    {
        id: 'grade-5-7',
        title: 'Intermediate',
        grades: 'Grades 5 – 7',
        boards: ['CBSE', 'ICSE', 'Karnataka State'],
        description:
            'Strengthening analytical thinking and subject depth. Students master advanced concepts with structured practice and regular assessments.',
        subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Kannada', 'Hindi'],
        accentColor: '#8B5CF6',
        accentBg: '#F5F3FF',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
    },
    {
        id: 'grade-8-9',
        title: 'Advanced',
        grades: 'Grades 8 – 9',
        boards: ['CBSE', 'ICSE', 'Karnataka State'],
        description:
            'Intensive board-aligned coaching with exam-pattern practice, doubt-clearing sessions, and competitive exam foundations for JEE/NEET readiness.',
        subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Science'],
        accentColor: '#10B981',
        accentBg: '#ECFDF5',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        id: 'grade-10',
        title: 'Board Exam Mastery',
        grades: 'Grade 10',
        boards: ['CBSE', 'ICSE', 'Karnataka State'],
        description:
            'Focused board exam preparation with chapter-wise revision, model papers, time-management drills, and one-on-one mentoring for peak performance.',
        subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Kannada / Hindi'],
        accentColor: '#F59E0B',
        accentBg: '#FFFBEB',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
];

export const STUDENT_IMPACT_METRICS = [
    {
        id: 'pass-rate',
        label: 'Board Exam Pass Rate',
        value: 98,
        suffix: '%',
        color: '#3B82F6',
        description: 'Consistent distinction-level results across all three boards.',
    },
    {
        id: 'analytical',
        label: 'Analytical Thinking',
        value: 94,
        suffix: '%',
        color: '#8B5CF6',
        description: 'Students show measurable gains in logical reasoning and problem-solving.',
    },
    {
        id: 'confidence',
        label: 'Exam Confidence',
        value: 96,
        suffix: '%',
        color: '#10B981',
        description: 'Timed mock tests and mentoring eliminate anxiety and build self-assurance.',
    },
    {
        id: 'mastery',
        label: 'Subject Mastery',
        value: 92,
        suffix: '%',
        color: '#F59E0B',
        description: 'Concept-first approach ensures deep understanding, not rote memorization.',
    },
    {
        id: 'parent-satisfaction',
        label: 'Parent Satisfaction',
        value: 97,
        suffix: '%',
        color: '#EC4899',
        description: 'Regular progress reports and open communication keep parents engaged.',
    },
    {
        id: 'improvement',
        label: 'Grade Improvement',
        value: 89,
        suffix: '%',
        color: '#06B6D4',
        description: 'Students improve by at least one grade level within a single academic term.',
    },
];
