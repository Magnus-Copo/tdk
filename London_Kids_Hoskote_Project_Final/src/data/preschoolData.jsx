export const HERO_STATS = [
    { value: '500+', label: 'Happy Families' },
    { value: '15', label: 'Years Experience' },
    { value: '12', label: 'Expert Teachers' }
];

export const PROGRAMS = [
    {
        id: 'playgroup',
        title: 'Playgroup',
        age: 'Ages 1.5 - 2.5',
        description: 'Optimizing early synaptic density through sensory-rich environments. We focus on social anchoring and emotional regulation to build a secure attachment system for future learning.',
        tags: ['Sensory Integration', 'Social Anchoring'],
        enrollment: 92,
        image: '/src/assets/images/program-toddler.jpg',
        color: 'var(--color-warm)' // Pink
    },
    {
        id: 'nursery',
        title: 'Nursery',
        age: 'Ages 2.5 - 3.5',
        description: 'Capitalizing on the brain\'s peak neuroplasticity window. Our curriculum architects neural pathways for linguistic fluency and creative pattern recognition through structured play.',
        tags: ['Linguistic Architecture', 'Pattern Recognition'],
        enrollment: 96,
        image: '/src/assets/images/program-preschool.jpg',
        color: 'var(--color-primary)' // Blue
    },
    {
        id: 'lkg',
        title: 'LKG (Lower Kindergarten)',
        age: 'Ages 3.5 - 4.5',
        description: 'Formulating the cognitive scaffolding for advanced literacy and numeracy. We transition from intuitive discovery to structured attention, cultivating deep focus and fine motor precision.',
        tags: ['Cognitive Scaffolding', 'Fine Motor Precision'],
        enrollment: 88,
        image: '/src/assets/images/program-prek.jpg',
        color: 'var(--color-accent)' // Yellow/Orange
    },
    {
        id: 'ukg',
        title: 'UKG (Upper Kindergarten)',
        age: 'Ages 4.5 - 5.5',
        description: 'Synthesizing complex executive functions for school readiness. We emphasize critical synthesis, emotional resilience, and confident leadership protocols to bridge the gap to primary education.',
        tags: ['Executive Function', 'Leadership Protocols'],
        enrollment: 94,
        image: '/src/assets/images/program-preschool.jpg', // Reuse for now or finding a better placeholder later
        color: 'var(--color-calm)' // Green
    }
];

export const FEATURES = [
    {
        id: 'play-based',
        title: 'Play-Based Learning',
        description: 'Our curriculum combines structured activities with free play, allowing children to learn naturally while having fun.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
        ),
        gradient: 'linear-gradient(135deg, var(--color-primary), #2563EB)',
        bg: 'linear-gradient(135deg, #F0F4FF, #E8F5E9)'
    },
    {
        id: 'loving-env',
        title: 'Loving Environment',
        description: 'Every child is welcomed, valued, and supported by our caring staff who foster emotional security.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
        ),
        gradient: 'linear-gradient(135deg, #FF7A90, #F06292)',
        bg: 'linear-gradient(135deg, #FFF8E1, #FFEBEE)'
    },
    {
        id: 'school-readiness',
        title: 'School Readiness',
        description: 'We build foundational skills in literacy, math, and social-emotional development for kindergarten success.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg>
        ),
        gradient: 'linear-gradient(135deg, var(--color-calm), #22C55E)',
        bg: 'linear-gradient(135deg, #E8F5E9, #E0F7FA)'
    }
];

export const ACTIVITIES = [
    {
        id: 'creative-arts',
        title: 'Creative Arts',
        description: 'Expressing imagination through painting, crafting, and music.',
        image: '/src/assets/images/creative_arts.png',
        tags: ['Painting', 'Music', 'Crafts'],
        theme: {
            primary: 'bg-rose-500',
            secondary: 'text-rose-600',
            accent: 'border-rose-200',
            soft: 'bg-rose-50',
            strongBorder: 'border-rose-500',
            shadow: 'shadow-rose-500/20',
            gradient: 'from-rose-500/10 to-transparent',
            icon: 'text-rose-500'
        },
        details: 'Our creative arts program encourages self-expression and fine motor skills development.'
    },
    {
        id: 'physical-play',
        title: 'Physical Play',
        description: 'Building strength and coordination through active movement.',
        image: '/src/assets/images/physical_play.png',
        tags: ['Sports', 'Outdoor', 'Movement'],
        theme: {
            primary: 'bg-sky-500',
            secondary: 'text-sky-600',
            accent: 'border-sky-200',
            soft: 'bg-sky-50',
            strongBorder: 'border-sky-500',
            shadow: 'shadow-sky-500/20',
            gradient: 'from-sky-500/10 to-transparent',
            icon: 'text-sky-500'
        },
        details: 'Daily outdoor play and structured physical activities promote health and coordination.'
    },
    {
        id: 'learning-discovery',
        title: 'Learning & Discovery',
        description: 'Exploring the world through science, math, and sensory play.',
        image: '/src/assets/images/learning_and_discovery.png',
        tags: ['Science', 'Math', 'Nature'],
        theme: {
            primary: 'bg-amber-500',
            secondary: 'text-amber-600',
            accent: 'border-amber-200',
            soft: 'bg-amber-50',
            strongBorder: 'border-amber-500',
            shadow: 'shadow-amber-500/20',
            gradient: 'from-amber-500/10 to-transparent',
            icon: 'text-amber-500'
        },
        details: 'Hands-on experiments and nature walks spark curiosity and critical thinking.'
    },
    {
        id: 'social-skills',
        title: 'Social Skills',
        description: 'Developing empathy and teamwork through group activities.',
        image: '/src/assets/images/social_skills.png',
        tags: ['Teamwork', 'Sharing', 'Empathy'],
        theme: {
            primary: 'bg-emerald-500',
            secondary: 'text-emerald-600',
            accent: 'border-emerald-200',
            soft: 'bg-emerald-50',
            strongBorder: 'border-emerald-500',
            shadow: 'shadow-emerald-500/20',
            gradient: 'from-emerald-500/10 to-transparent',
            icon: 'text-emerald-500'
        },
        details: 'Group projects and circle time help children learn to collaborate and communicate.'
    }
];
