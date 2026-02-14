import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Volume2, Languages } from 'lucide-react';
import Card from '../../ui/Card';
import { quranVerses } from '../../data/quranData';

const QuranSection = () => {
  const [showArabic, setShowArabic] = useState(true);
  const [playingAudio, setPlayingAudio] = useState(null);

  return (
    <section id="quran" className="py-20 bg-navy-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gold">Qur'an</span> Verses for Ramadan
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Reflect on the words of Allah during this blessed month
          </p>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowArabic(!showArabic)}
            className="flex items-center gap-2 bg-navy-light border border-gold/30 rounded-full px-4 py-2"
          >
            <Languages size={18} className="text-gold" />
            <span>{showArabic ? 'Show English' : 'Show Arabic'}</span>
          </button>
        </div>

        {/* Verses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quranVerses.map((verse, index) => (
            <motion.div
              key={verse.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gold">{verse.name}</h3>
                    <p className="text-sm text-gray-400">{verse.translation}</p>
                  </div>
                  <button
                    onClick={() => setPlayingAudio(playingAudio === verse.id ? null : verse.id)}
                    className="p-2 rounded-full hover:bg-gold/20 transition"
                  >
                    <Volume2 
                      size={20} 
                      className={playingAudio === verse.id ? 'text-gold' : 'text-gray-400'} 
                    />
                  </button>
                </div>

                <div className="font-arabic text-right text-2xl leading-loose mb-4">
                  {showArabic ? verse.arabic : verse.english}
                </div>

                {/* Audio Player Simulation */}
                {playingAudio === verse.id && (
                  <div className="mt-4 p-3 bg-navy-light rounded-lg">
                    <p className="text-sm text-gold/60 text-center">
                      🎵 Audio recitation would play here (demo)
                    </p>
                    <div className="w-full h-1 bg-navy mt-2 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-gold animate-pulse" />
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuranSection;