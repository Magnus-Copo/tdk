import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BookingModal from './components/common/BookingModal';
import WhatsAppWidget from './components/common/WhatsAppWidget';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const Layout = () => {
    useScrollAnimation();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <BookingModal />
            <WhatsAppWidget />
        </div>
    );
};

export default Layout;

