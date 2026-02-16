import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';

import PreSchool from './pages/PreSchool';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="pre-school" element={<PreSchool />} />
                    {/* Add more routes as needed */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
