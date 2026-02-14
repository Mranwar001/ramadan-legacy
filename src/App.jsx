import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import DailyPlanner from './components/sections/DailyPlanner';
import QuranSection from './components/sections/QuranSection';
import DuasSection from './components/sections/DuasSection';
import AgeGuide from './components/sections/AgeGuide';
import SahabaInspiration from './components/sections/SahabaInspiration';
import LaylatulQadr from './components/sections/LaylatulQadr';
import AnalyticsDashboard from './components/sections/AnalyticsDashboard';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Update document title and meta tags
    document.title = 'Ramadan Legacy - 30 Days Spiritual Planner';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Track your prayers, Quran reading, and spiritual goals this Ramadan with the complete 30-day spiritual planner.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <DailyPlanner />
        <AnalyticsDashboard />
        <QuranSection />
        <DuasSection />
        <AgeGuide />
        <SahabaInspiration />
        <LaylatulQadr />
        <Footer />
      </motion.main>
    </div>
  );
}

export default App;