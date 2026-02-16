import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PreSchool = lazy(() => import('./pages/PreSchool'));
const PrimarySchool = lazy(() => import('./pages/PrimarySchool'));
const PreUniversity = lazy(() => import('./pages/PreUniversity'));

// Loading fallback component
const LoadingFallback = () => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontSize: '1.5rem',
        color: '#64748b'
    }}>
        Loading...
    </div>
);

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <Suspense fallback={<LoadingFallback />}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="about" element={
                        <Suspense fallback={<LoadingFallback />}>
                            <About />
                        </Suspense>
                    } />
                    <Route path="contact" element={
                        <Suspense fallback={<LoadingFallback />}>
                            <Contact />
                        </Suspense>
                    } />
                    <Route path="pre-school" element={
                        <Suspense fallback={<LoadingFallback />}>
                            <PreSchool />
                        </Suspense>
                    } />
                    <Route path="primary-school" element={
                        <Suspense fallback={<LoadingFallback />}>
                            <PrimarySchool />
                        </Suspense>
                    } />
                    <Route path="pre-university" element={
                        <Suspense fallback={<LoadingFallback />}>
                            <PreUniversity />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
