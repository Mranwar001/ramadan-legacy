import React from 'react';
import { motion } from 'framer-motion';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { calculateConsistency } from '../../utils/helpers';
import { BarChart2, TrendingUp, Heart, DollarSign } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [days] = useLocalStorage('ramadan-days', []);

  const totalPrayers = days.reduce((acc, day) => {
    return acc + Object.values(day.prayers).filter(Boolean).length;
  }, 0);

  const totalDhikr = days.reduce((acc, day) => acc + (day.dhikrCount || 0), 0);
  
  const totalSadaqah = days.reduce((acc, day) => {
    return acc + (day.sadaqah ? 1 : 0);
  }, 0);

  const consistency = calculateConsistency(days);

  const stats = [
    {
      icon: BarChart2,
      label: 'Prayers Completed',
      value: totalPrayers,
      target: days.length * 5,
      color: 'text-blue-400'
    },
    {
      icon: Heart,
      label: 'Total Dhikr',
      value: totalDhikr,
      target: 1000,
      color: 'text-green-400'
    },
    {
      icon: DollarSign,
      label: 'Days with Sadaqah',
      value: totalSadaqah,
      target: days.length,
      color: 'text-gold'
    },
    {
      icon: TrendingUp,
      label: 'Consistency',
      value: `${consistency}%`,
      target: '100%',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="text-gold">Ramadan</span> Analytics
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track your spiritual progress throughout the month
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const progress = typeof stat.value === 'number' 
              ? (stat.value / stat.target) * 100 
              : parseFloat(stat.value);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} className={stat.color} />
                  <h3 className="text-sm text-gray-400">{stat.label}</h3>
                </div>

                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                
                <div className="w-full h-2 bg-navy-light rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${
                      index === 0 ? 'bg-blue-400' :
                      index === 1 ? 'bg-green-400' :
                      index === 2 ? 'bg-gold' :
                      'bg-purple-400'
                    }`}
                  />
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Target: {stat.target}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;