import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import Card from '../../ui/Card';
import { duasByCategory } from '../../data/duasData';

const DuasSection = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('fasting');

  const categories = [
    { id: 'fasting', name: 'Fasting Duas', icon: '🤲' },
    { id: 'laylatulQadr', name: 'Laylatul Qadr', icon: '🌙' },
    { id: 'forgiveness', name: 'Forgiveness', icon: '🕊️' },
    { id: 'protection', name: 'Protection', icon: '🛡️' }
  ];

  const handleCopy = async (text, id) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="duas" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Essential <span className="text-gold">Duas</span> for Ramadan
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Supplications to strengthen your connection with Allah
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-gold text-navy'
                  : 'bg-navy-light hover:bg-gold/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Duas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {duasByCategory[activeCategory]?.map((dua, index) => (
            <motion.div
              key={dua.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gold">{dua.name}</h3>
                  <button
                    onClick={() => handleCopy(dua.arabic, dua.id)}
                    className="p-2 rounded-lg hover:bg-gold/20 transition relative"
                  >
                    {copiedId === dua.id ? (
                      <Check size={18} className="text-green-500" />
                    ) : (
                      <Copy size={18} className="text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="font-arabic text-right text-xl mb-3">
                  {dua.arabic}
                </div>

                <div className="text-sm text-gray-300 mb-2 italic">
                  {dua.transliteration}
                </div>

                <div className="text-sm text-gray-400">
                  {dua.english}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuasSection;