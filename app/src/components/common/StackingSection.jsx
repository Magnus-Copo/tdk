import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

// Optimized version - removed heavy scroll transforms for performance
const StackingSection = ({ children, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative ${className}`}
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
