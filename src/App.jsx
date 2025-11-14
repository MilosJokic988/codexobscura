// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // <-- import
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-logo">
        <span className="logo-icon">☿</span> Codex <span>Obscura</span>
      </div>
      <div className="loading-text">Učitavanje...</div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <HelmetProvider> {/* <-- wrapuje sve */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}
