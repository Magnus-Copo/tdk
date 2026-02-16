import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BookingModal from './components/common/BookingModal';
import WhatsAppWidget from './components/common/WhatsAppWidget';
import { ReactLenis } from 'lenis/react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const Layout = () => {
    useScrollAnimation();

    return (
        <ReactLenis 
            root 
            options={{
                lerp: 0.05,
                duration: 1.2,
                smoothWheel: true,
                smoothTouch: false,
                wheelMultiplier: 0.8,
                touchMultiplier: 1.5,
                infinite: false,
            }}
        >
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
                <BookingModal />
                <WhatsAppWidget />
            </div>
        </ReactLenis>
    );
};

export default Layout;

