import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, ChevronDown } from 'lucide-react';
import Button from '../../ui/Button';
import { getMaghribCountdown, getRamadanGreeting } from '../../utils/helpers';
import PDFExport from '../PDFExport';

const Hero = () => {
  const [greeting] = useState(getRamadanGreeting());
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getMaghribCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPlanner = () => {
    document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Crescent Moon Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="mb-8"
          >
            <Moon className="w-24 h-24 text-gold mx-auto" fill="#D4AF37" />
          </motion.div>

          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {greeting}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gold/80 mb-8"
          >
            Your 30-Day Spiritual Journey to Transform Your Soul
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 mb-8 inline-block mx-auto"
          >
            <p className="text-sm text-gold/60 mb-2">Time until Maghrib</p>
            <div className="flex gap-4 text-2xl font-bold">
              <div>
                <span className="text-gold">{countdown.hours.toString().padStart(2, '0')}</span>
                <span className="text-sm ml-1">h</span>
              </div>
              <span className="text-gold">:</span>
              <div>
                <span className="text-gold">{countdown.minutes.toString().padStart(2, '0')}</span>
                <span className="text-sm ml-1">m</span>
              </div>
              <span className="text-gold">:</span>
              <div>
                <span className="text-gold">{countdown.seconds.toString().padStart(2, '0')}</span>
                <span className="text-sm ml-1">s</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button onClick={scrollToPlanner}>
              Start My Ramadan Journey
            </Button>
            <PDFExport variant="secondary" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToPlanner}
      >
        <ChevronDown className="text-gold" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;