import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import PropTypes from 'prop-types';

const StackingSection = ({ children, className = '' }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start 0.2"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    const smoothY = useSpring(y, { stiffness: 80, damping: 20 });
    const smoothScale = useSpring(scale, { stiffness: 80, damping: 20 });

    return (
        <motion.div
            ref={ref}
            style={{
                y: smoothY,
                opacity,
                scale: smoothScale,
            }}
            className={`relative will-change-transform ${className}`}
        >
            <div
                className="absolute -top-12 left-0 right-0 h-12 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.05))',
                    zIndex: 10
                }}
            />
            {children}
        </motion.div>
    );
};

StackingSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default StackingSection;
