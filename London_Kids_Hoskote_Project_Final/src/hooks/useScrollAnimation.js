import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollAnimation = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (prefersReducedMotion) {
                        entry.target.classList.add('active');
                    } else {
                        // Small delay to ensure smooth rendering before animation
                        setTimeout(() => {
                            entry.target.classList.add('active');
                        }, 50);
                    }
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Small timeout to allow DOM to update after route change
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => revealObserver.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            revealObserver.disconnect();
        };
    }, [pathname]); // Re-run when path changes
};
