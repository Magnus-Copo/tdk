import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import {
    Target,
    Compass,
    Heart,
    Shield,
    Star,
    BookOpen,
    Cloud,
    Sun,
    Smile,
    Globe,
    Award,
    Zap,
    Users,
    Anchor,
    ChevronDown
} from 'lucide-react';

/**
 * VisionMissionSection: Neuro-Psychology Optimized
 * Implementing 8 Design Principles: Tabs (Miller's Law), 
 * Progressive Disclosure (Accordions), Dual Coding (Icons), etc.
 */
const VisionMissionSection = () => {
    const [activeTab, setActiveTab] = useState('sktec');
    const [openAccordion, setOpenAccordion] = useState(null);

    // --- COLOR PSYCHOLOGY PALETTES ---
    const themes = {
        sktec: {
            primary: '#064E3B', // Deep Forest Green (Trust/Heritage)
            secondary: '#D97706', // Gold (Aspiration/Wisdom)
            bg: '#F0FDF4',       // Mint Mist (Growing)
            text: '#064E3B',
            muted: '#365314'
        },
        lks: {
            primary: '#F87171',   // Warm Coral (Joy/Care)
            sky: '#38BDF8',       // Sky Blue (Freedom)
            mint: '#34D399',      // Growth Mint
            bg: '#FFF7ED',        // Soft Sun Glow
            text: '#7F1D1D',
            muted: '#991B1B'
        }
    };

    // --- CONTENT (100% ADHERENCE) ---
    const sktecData = {
        vision: "The Vision of SHREEMATI SHREE KAMALA & THIMMAPPA EDUCATIONAL AND CHARITABLE TRUST (R) Shortly known as SKTEC Trust (R) is to provide opportunities to create Global Citizens and Leaders of Tomorrow through Traditional Values of Love, Empathy, Discipline and Respect and to Train the Skills required for Successful Interaction with Other Individuals.",
        mission: [
            { icon: <Award size={20} />, title: "Excellence", content: "To Pursuit of excellence in Academics Games and Sports, Co-Curricular Activities and in Human Values." },
            { icon: <Users size={20} />, title: "Personality", content: "To Develop the Personality, instilling Qualities of Self - Reliance, Courage, Self - Confidence and Self - Esteem." },
            { icon: <Shield size={20} />, title: "Citizenship", content: "To Nurture the Young Minds Physically, Mentally, Spiritually Balanced Citizen with a Deep Sense of Patriotism." },
            { icon: <BookOpen size={20} />, title: "Learning", content: "To Encourage Young Minds for their desired lifelong learning." },
            { icon: <Zap size={20} />, title: "Thoughtfulness", content: "To Encourage Young Minds for Fostering independent thinking, thoughtful decision-making, critical analysis, appreciation with intellectual humility to accept difference in opinion." },
            { icon: <Cloud size={20} />, title: "Harmony", content: "To Help the Pupils to discover what it is to live and grow with clarity of thought, with harmony in Nature, with beauty and freedom in the world." },
            { icon: <Compass size={20} />, title: "Culture", content: "To Inculcating the best of Indian Culture and tradition among the pupils." },
            { icon: <Target size={20} />, title: "Obligation", content: "Creating responsible, disciplined and secular citizens, who are fully aware of their social, moral and cultural obligations and commitments, with a desire for unbounded service to humanity." }
        ]
    };

    const lksData = {
        motto: "To Care the Pretty Kids beautifully shaped with Motherly Care.",
        salience: "We believe that a Happy Child is a Successful One.",
        points: [
            { icon: <Smile size={20} />, title: "Core Belief", content: "We believe that a Happy Child is a Successful One. We are committed to providing a positive, safe and stimulating environment for children to learn, where all are Valued. We intend that all children should enjoy their learning to achieve their potential and to become independent Life - Long Learners." },
            { icon: <Shield size={20} />, title: "Safe Environment", content: "Our early learning centre exists to provide a safe, developmentally, inclusive environment for Toddlers, Preschool, Kindergarten and School Age Children." },
            { icon: <Star size={20} />, title: "Foundation", content: "We foster our students’ love for learning, encourage them to try new and exciting things, and give them a solid foundation to build on." },
            { icon: <Target size={20} />, title: "Development", content: "Our vision is to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated." },
            { icon: <Heart size={20} />, title: "Potential", content: "We believe that a happy child is a successful one. We are committed to providing a positive, safe and stimulating environment for children to learn, where all are valued. We intend that all children should enjoy their learning, achieve their potential and become independent life-long learners." }
        ]
    };

    // Progressive Disclosure: Group items into max 6 entries (Miller's Law)
    const sktecGroups = [
        sktecData.mission.slice(0, 2),
        sktecData.mission.slice(2, 4),
        sktecData.mission.slice(4, 5), // Complex one alone
        sktecData.mission.slice(5, 7),
        sktecData.mission.slice(7, 8)
    ];

    const currentTheme = activeTab === 'sktec' ? themes.sktec : themes.lks;

    return (
        <section id="vision-mission" style={{ backgroundColor: currentTheme.bg, padding: '120px 24px', transition: 'background-color 0.8s ease' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* 1. MILLER'S LAW: TABBED INSTITUTIONS */}
                <div style={{ background: '#00000008', padding: '8px', borderRadius: '24px', display: 'flex', marginBottom: '80px', border: '1px solid #00000008' }}>
                    <TabButton
                        id="sktec"
                        label="SKTEC Trust"
                        isActive={activeTab === 'sktec'}
                        theme={currentTheme}
                        onClick={() => setActiveTab('sktec')}
                    />
                    <TabButton
                        id="lks"
                        label="London Kids School"
                        isActive={activeTab === 'lks'}
                        theme={currentTheme}
                        onClick={() => setActiveTab('lks')}
                    />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {activeTab === 'sktec' ? (
                            <div>
                                {/* SKTEC Vision (Salient Header) */}
                                <div style={{ marginBottom: '80px', textAlign: 'center' }}>
                                    <span style={{
                                        color: themes.sktec.primary,
                                        fontWeight: 800,
                                        fontSize: '0.875rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.25em',
                                        marginBottom: '24px',
                                        display: 'block'
                                    }}>
                                        THE VISION
                                    </span>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        style={{
                                            background: `linear-gradient(135deg, ${themes.sktec.bg} 0%, #FFFFFF 100%)`,
                                            padding: '60px 40px',
                                            borderRadius: '32px',
                                            border: `1px solid ${themes.sktec.primary}10`,
                                            boxShadow: '0 20px 40px -15px rgba(6, 78, 59, 0.05)'
                                        }}
                                    >
                                        <h3 style={{
                                            fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
                                            color: themes.sktec.text,
                                            fontWeight: 700,
                                            lineHeight: 1.6,
                                            margin: 0,
                                            fontFamily: "'Nunito', sans-serif"
                                        }}>
                                            The Vision of <span style={{ color: themes.sktec.secondary, fontWeight: 800 }}>SHREEMATI SHREE KAMALA & THIMMAPPA EDUCATIONAL AND CHARITABLE TRUST (R)</span> shortly known as <span style={{ color: themes.sktec.secondary, fontWeight: 800 }}>SKTEC Trust (R)</span> is to provide opportunities to create <span style={{ color: themes.sktec.secondary, fontWeight: 800 }}>global citizens and leaders of tomorrow</span> through traditional values of <span style={{ color: themes.sktec.secondary, fontWeight: 800 }}>Love</span>, <span style={{ color: themes.sktec.secondary, fontWeight: 800 }}>Empathy</span>, <span style={{ color: themes.sktec.secondary, fontWeight: 800 }}>Discipline</span> and <span style={{ color: themes.sktec.secondary, fontWeight: 800 }}>Respect</span> and to train the skills required for successful interaction with other individuals.
                                        </h3>
                                    </motion.div>
                                </div>

                                {/* SKTEC Mission (Progressive Disclosure via Accordions) */}
                                <div>
                                    <h4 style={{
                                        color: themes.sktec.primary,
                                        fontWeight: 900,
                                        fontSize: '1.25rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        marginBottom: '32px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px'
                                    }}>
                                        <div style={{ height: '2px', width: '24px', background: themes.sktec.secondary }} />
                                        Mission Statements
                                        <div style={{ height: '2px', width: '24px', background: themes.sktec.secondary }} />
                                    </h4>
                                    {sktecGroups.map((group, idx) => (
                                        <AccordionItem
                                            key={idx}
                                            items={group}
                                            index={idx}
                                            isOpen={openAccordion === idx}
                                            onToggle={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                            theme={currentTheme}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div>
                                {/* LKS Salience & Motto */}
                                <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        style={{
                                            background: `linear-gradient(135deg, ${themes.lks.bg} 0%, #FFFFFF 100%)`,
                                            padding: '60px 40px',
                                            borderRadius: '32px',
                                            color: themes.lks.text,
                                            marginBottom: '40px',
                                            boxShadow: '0 20px 50px -15px rgba(248, 113, 113, 0.1)',
                                            border: `1px solid ${themes.lks.primary}15`,
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{ position: 'relative', zIndex: 1 }}>
                                            <span style={{
                                                fontSize: '0.875rem',
                                                fontWeight: 800,
                                                letterSpacing: '0.25em',
                                                marginBottom: '24px',
                                                display: 'block',
                                                textTransform: 'uppercase',
                                                color: themes.lks.primary
                                            }}>
                                                OUR SACRED MOTTO
                                            </span>

                                            <h3 style={{
                                                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                                                fontWeight: 800,
                                                fontStyle: 'italic',
                                                lineHeight: 1.3,
                                                marginBottom: '40px',
                                                color: themes.lks.text,
                                                letterSpacing: '-0.01em'
                                            }}>
                                                "To Care the Pretty Kids<br />
                                                <span style={{ color: themes.lks.primary }}>beautifully shaped with Motherly Care."</span>
                                            </h3>

                                            <div style={{
                                                background: `${themes.lks.primary}08`,
                                                padding: '24px 32px',
                                                borderRadius: '24px',
                                                display: 'inline-block',
                                                border: `1px solid ${themes.lks.primary}10`
                                            }}>
                                                <p style={{
                                                    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                                    fontWeight: 800,
                                                    margin: 0,
                                                    color: themes.lks.text,
                                                    lineHeight: 1.4
                                                }}>
                                                    We believe that a <span style={{ color: themes.lks.primary }}>Happy Child</span><br />
                                                    is a Successful One.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <h4 style={{
                                        color: themes.lks.primary,
                                        fontWeight: 800,
                                        fontSize: '1.125rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        marginBottom: '24px'
                                    }}>
                                        Core Guiding Principles
                                    </h4>
                                </div>

                                {/* LKS Mission Points */}
                                <div>
                                    {lksData.points.map((point, idx) => (
                                        <AccordionItem
                                            key={idx}
                                            items={[point]}
                                            index={idx}
                                            isOpen={openAccordion === idx}
                                            onToggle={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                            theme={currentTheme}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

const TabButton = ({ label, isActive, theme, onClick }) => (
    <button
        onClick={onClick}
        style={{
            flex: 1,
            padding: '24px',
            background: isActive ? theme.primary : 'transparent',
            color: isActive ? 'white' : '#64748B',
            border: 'none',
            borderRadius: '16px',
            fontSize: '1.25rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            fontFamily: "'Nunito', sans-serif"
        }}
    >
        {label}
    </button>
);

TabButton.propTypes = {
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        primary: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

const AccordionItem = ({ items, isOpen, onToggle, theme }) => (
    <div style={{ marginBottom: '16px' }}>
        <button
            onClick={onToggle}
            style={{
                width: '100%',
                padding: '32px',
                background: 'white',
                border: `1px solid ${theme.primary}10`,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: isOpen ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ color: theme.secondary || theme.sky }}>{items[0].icon}</div>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: theme.text }}>
                    {items.length > 1 ? `${items[0].title} & ${items[items.length - 1].title}` : items[0].title}
                </span>
            </div>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDown size={24} color={theme.primary} />
            </motion.div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div style={{ padding: '32px', background: '#FFFFFF80', borderRadius: '0 0 24px 24px', border: `1px solid ${theme.primary}05`, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {items.map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ marginTop: '4px', color: theme.secondary || theme.mint }}>{item.icon}</div>
                                <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: theme.muted, margin: 0, fontWeight: 500 }}>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

AccordionItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        title: PropTypes.string,
        content: PropTypes.string
    })).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    theme: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string,
        sky: PropTypes.string,
        mint: PropTypes.string,
        text: PropTypes.string.isRequired,
        muted: PropTypes.string.isRequired
    }).isRequired
};

export default VisionMissionSection;
