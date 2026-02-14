import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Baby, Users, Heart } from 'lucide-react';
import Card from '../../ui/Card';

const AgeGuide = () => {
  const [activeAge, setActiveAge] = useState('children');

  const ageGroups = [
    {
      id: 'children',
      name: 'Children',
      icon: Baby,
      color: 'text-green-400',
      content: {
        explanation: "Fasting is not obligatory for children until puberty, but they can practice gradually.",
        tips: [
          "Start with half-day fasts",
          "Use a reward star chart for encouragement",
          "Teach through stories and fun activities",
          "Celebrate their small achievements"
        ],
        starChart: "⭐ Track daily: Prayers, Good deeds, Kindness",
        parentAdvice: "Make Ramadan special with treats, gifts, and family iftar parties."
      }
    },
    {
      id: 'youth',
      name: 'Youth',
      icon: Users,
      color: 'text-blue-400',
      content: {
        explanation: "A critical age for building strong Islamic habits and identity.",
        tips: [
          "Limit social media during fasting hours",
          "Attend Taraweeh prayers at the mosque",
          "Read Quran with translation daily",
          "Volunteer for community iftars"
        ],
        productivity: "Use Ramadan to break bad habits and build discipline",
        motivation: "The youth of Jannah are those who worshipped Allah in their prime."
      }
    },
    {
      id: 'elderly',
      name: 'Elderly',
      icon: Heart,
      color: 'text-gold',
      content: {
        explanation: "Those with health conditions may be exempt from fasting, but can still earn rewards.",
        tips: [
          "Feed a poor person each day (Fidya)",
          "Make abundant dhikr (SubhanAllah, Alhamdulillah, Allahu Akbar)",
          "Listen to Quran recitation",
          "Give charity, even if small"
        ],
        health: "Consult your doctor about safe fasting. Stay hydrated at night.",
        charity: "Sponsor an iftar or provide meals to those in need."
      }
    }
  ];

  const activeData = ageGroups.find(g => g.id === activeAge);
  const ActiveIcon = activeData?.icon;

  return (
    <section className="py-20 bg-navy-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ramadan Guide <span className="text-gold">by Age</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Spiritual guidance tailored for every stage of life
          </p>
        </div>

        {/* Age Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ageGroups.map(group => {
            const Icon = group.icon;
            return (
              <button
                key={group.id}
                onClick={() => setActiveAge(group.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                  activeAge === group.id
                    ? 'bg-gold text-navy'
                    : 'glass-card hover:border-gold/50'
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <motion.div
          key={activeAge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
              <div className="flex items-center gap-3 mb-6">
              {ActiveIcon && <ActiveIcon size={24} className={activeData.color} />}
              <h3 className="text-2xl font-bold">{activeData?.name} Guide</h3>
            </div>

            <p className="text-gray-300 mb-6">{activeData?.content.explanation}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-gold font-semibold mb-2">📋 Practical Tips</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {activeData?.content.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>

              {activeAge === 'children' && (
                <div className="mt-4 p-4 bg-navy-light rounded-lg">
                  <h4 className="text-gold font-semibold mb-2">⭐ Reward Star Chart</h4>
                  <p className="text-gray-300">{activeData?.content.starChart}</p>
                  <p className="text-gray-300 mt-2">{activeData?.content.parentAdvice}</p>
                </div>
              )}

              {activeAge === 'youth' && (
                <div className="mt-4 p-4 bg-navy-light rounded-lg">
                  <h4 className="text-gold font-semibold mb-2">🚀 Productivity Plan</h4>
                  <p className="text-gray-300">{activeData?.content.productivity}</p>
                  <p className="text-gray-300 mt-2 italic">{activeData?.content.motivation}</p>
                </div>
              )}

              {activeAge === 'elderly' && (
                <div className="mt-4 p-4 bg-navy-light rounded-lg">
                  <h4 className="text-gold font-semibold mb-2">💚 Health & Charity</h4>
                  <p className="text-gray-300">{activeData?.content.health}</p>
                  <p className="text-gray-300 mt-2">{activeData?.content.charity}</p>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AgeGuide;