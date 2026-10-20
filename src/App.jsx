import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import RoutesPage from './pages/Routes';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#111827] antialiased selection:bg-[#2567A8] selection:text-white font-sans">
        {/* Navigation Header */}
        <Header />

        {/* Main Route Content */}
        <main className="flex-grow transition-opacity duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Actions (WhatsApp & Call) */}
        <FloatingActions />

        {/* Scroll To Top Floating Trigger */}
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
