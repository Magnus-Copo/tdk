import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component - Scrolls to top of page on route change
 * This ensures users always start at the top when navigating to a new page
 */
const ScrollToTop = () => {
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        if (hash) return;

        const scrollTopNow = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        scrollTopNow();
        requestAnimationFrame(scrollTopNow);
        setTimeout(scrollTopNow, 0);
    }, [pathname, search, hash]);

    return null;
};

export default ScrollToTop;
