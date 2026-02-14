import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Button from '../../ui/Button';

const Footer = () => {
  return (
    <footer className="border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div id="pdf-content" className="space-y-12">
          {/* Branding Section */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <img
                src="https://i.ibb.co/YB7krFJd/Beauty-Plus-20250612114734874-save.jpg"
                alt="Anwar Dahir Yahaya"
                className="w-32 h-32 rounded-full mx-auto border-4 border-gold mb-4"
              />
              <h3 className="text-2xl font-bold text-gold">Anwar Dahir Yahaya</h3>
              <p className="text-gray-400">Front-End Developer</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <span>+234 8109770991</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <span>anwarcscience@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https:                        
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gold/20 transition"
              >
                <Github size={20} className="text-gold" />
              </a>
              <a
                href="https://www.linkedin.com/in/anwar-dahiru-yahaya-3a21492a1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gold/20 transition"
              >
                <Linkedin size={20} className="text-gold" />
              </a>
            </div>

            <div className="mt-6">
              <Button
                onClick={() => (window.location.href = 'mailto:anwarcscience@gmail.com')}
                variant="primary"
                className="mx-auto"
              >
                Hire Me For Your Website
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Ramadan Legacy. All rights reserved.</p>
            <p className="mt-2">Built with ❤️ for the sake of Allah 🤍</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
