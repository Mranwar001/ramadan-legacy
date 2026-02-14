import React from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Sparkles } from 'lucide-react';
import Card from '../../ui/Card';

const LaylatulQadr = () => {
  const lastTenDays = Array.from({ length: 10 }, (_, i) => 21 + i);
  
  const isOddNight = (day) => {
    return day % 2 === 1;
  };

  return (
    <section className="py-20 bg-navy-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-gold mx-auto" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gold">Laylatul Qadr</span> Tracker
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The Night of Power is better than a thousand months
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Last 10 Nights</h3>
              <p className="text-gold/60">Focus on odd nights: 21, 23, 25, 27, 29</p>
            </div>

            <div className="grid grid-cols-5 gap-3 mb-6">
              {lastTenDays.map(day => (
                <motion.div
                  key={day}
                  whileHover={{ scale: 1.05 }}
                  className={`text-center p-3 rounded-lg ${
                    isOddNight(day)
                      ? 'bg-gold text-navy animate-pulse'
                      : 'bg-navy-light border border-gold/30'
                  }`}
                >
                  <div className="text-lg font-bold">{day}</div>
                  <div className="text-xs">
                    {isOddNight(day) ? '✨ Odd' : 'Even'}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-navy-light p-6 rounded-lg text-center">
              <Moon className="w-12 h-12 text-gold mx-auto mb-3" />
              <h4 className="text-xl font-bold text-gold mb-2">Special Dua for Laylatul Qadr</h4>
              <p className="font-arabic text-2xl mb-3">
                اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
              </p>
              <p className="text-gray-300 mb-2">
                Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni
              </p>
              <p className="text-sm text-gray-400">
                O Allah, You are Forgiving and love forgiveness, so forgive me
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LaylatulQadr;