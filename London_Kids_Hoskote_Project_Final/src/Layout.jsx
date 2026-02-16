import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BookingModal from './components/common/BookingModal';
import { ReactLenis } from 'lenis/react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const Layout = () => {
    useScrollAnimation();

    return (
        <ReactLenis root>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
                <BookingModal />
            </div>
        </ReactLenis>
    );
};

export default Layout;
