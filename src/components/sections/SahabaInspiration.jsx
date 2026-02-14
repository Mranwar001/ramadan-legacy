import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../ui/Card';
import { sahabaStories } from '../../data/sahabaData';

const SahabaInspiration = () => {
  const [reflections, setReflections] = useState({});

  const handleReflectionChange = (id, text) => {
    setReflections(prev => ({ ...prev, [id]: text }));
  };

  return (
    <section id="sahaba" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gold">Sahaba</span> Inspiration
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Timeless lessons from the companions of Prophet Muhammad ﷺ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sahabaStories.map((sahaba, index) => (
            <motion.div
              key={sahaba.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{sahaba.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gold">{sahaba.name}</h3>
                    <p className="text-sm text-gray-400">{sahaba.title}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-3">{sahaba.biography}</p>

                <div className="bg-navy-light p-4 rounded-lg mb-4">
                  <p className="text-sm italic text-gray-300">"{sahaba.story}"</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-gold font-semibold mb-2">📖 Ramadan Lesson</h4>
                  <p className="text-sm text-gray-300">{sahaba.lesson}</p>
                </div>

                <div>
                  <h4 className="text-gold font-semibold mb-2">💭 What can we learn today?</h4>
                  <textarea
                    value={reflections[sahaba.id] || ''}
                    onChange={(e) => handleReflectionChange(sahaba.id, e.target.value)}
                    placeholder="Write your reflection..."
                    rows={3}
                    className="w-full bg-navy-light border border-gold/30 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SahabaInspiration;