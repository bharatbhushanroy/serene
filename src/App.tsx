"use client";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import LoanSimulatorPage from './pages/LoanSimulatorPage';
import ApplyLoanPage from './pages/ApplyLoanPage';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider> {/* Wrap the entire application with ThemeProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loan-simulator" element={<LoanSimulatorPage />} />
            <Route path="/apply-loan" element={<ApplyLoanPage />} />
          </Routes>
        </Router>
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;