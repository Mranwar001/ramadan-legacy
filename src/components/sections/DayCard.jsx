import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Book, DollarSign, Edit2, ChevronDown } from 'lucide-react';
import Card from '../../ui/Card';
import Counter from '../../ui/Counter';
import StarRating from '../../ui/StarRating';

const DayCard = ({ day, onUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  const [reflection, setReflection] = useState(day.reflection || '');

  const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  const togglePrayer = (prayer) => {
    onUpdate({
      prayers: {
        ...day.prayers,
        [prayer]: !day.prayers[prayer]
      }
    });
  };

  const completedPrayers = Object.values(day.prayers).filter(Boolean).length;

  return (
    <Card className="hover:border-gold/50 transition-all">
      {/* Day Header */}
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h3 className="text-xl font-bold">Day {day.id}</h3>
          <p className="text-sm text-gold/60">
            {completedPrayers}/5 Prayers • {day.dhikrCount} Dhikr
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold" />
          <ChevronDown 
            size={20} 
            className={`text-gold transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4"
          >
            {/* Prayers Checklist */}
            <div>
              <h4 className="text-sm font-semibold text-gold mb-2">Daily Prayers</h4>
              <div className="grid grid-cols-5 gap-1">
                {prayers.map(prayer => (
                  <button
                    key={prayer}
                    onClick={() => togglePrayer(prayer)}
                    className={`p-2 rounded-lg text-center transition-all ${
                      day.prayers[prayer]
                        ? 'bg-gold text-navy'
                        : 'bg-navy-light hover:bg-gold/20'
                    }`}
                  >
                    <div className="text-xs">{prayer.substring(0, 2)}</div>
                    {day.prayers[prayer] && <Check size={12} className="mx-auto" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Qur'an Reading */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Book size={16} className="text-gold" />
                <span className="text-sm">Qur'an Reading (Juz {day.id})</span>
              </div>
              <button
                onClick={() => onUpdate({ quranRead: !day.quranRead })}
                className={`px-3 py-1 rounded-lg text-sm transition ${
                  day.quranRead
                    ? 'bg-gold text-navy'
                    : 'border border-gold/30'
                }`}
              >
                {day.quranRead ? 'Completed' : 'Mark Read'}
              </button>
            </div>

            {/* Dhikr Counter */}
            <div className="flex items-center justify-between">
              <span className="text-sm">Dhikr Count</span>
              <Counter
                count={day.dhikrCount}
                onIncrement={() => onUpdate({ dhikrCount: day.dhikrCount + 1 })}
                onDecrement={() => onUpdate({ dhikrCount: Math.max(0, day.dhikrCount - 1) })}
              />
            </div>

            {/* Sadaqah Tracker */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={16} className="text-gold" />
                <span className="text-sm">Sadaqah Given</span>
              </div>
              <input
                type="text"
                placeholder="e.g., $5, meals, etc."
                value={day.sadaqah}
                onChange={(e) => onUpdate({ sadaqah: e.target.value })}
                className="w-full bg-navy-light border border-gold/30 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Fasting Rating */}
            <div>
              <span className="text-sm block mb-2">Fasting Quality</span>
              <StarRating 
                rating={day.fastingRating}
                onRate={(rating) => onUpdate({ fastingRating: rating })}
              />
            </div>

            {/* Reflection */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Edit2 size={16} className="text-gold" />
                <span className="text-sm">Daily Reflection</span>
              </div>
              <textarea
                value={reflection}
                onChange={(e) => {
                  setReflection(e.target.value);
                  onUpdate({ reflection: e.target.value });
                }}
                placeholder="What did you learn today? How was your fast?"
                rows={3}
                className="w-full bg-navy-light border border-gold/30 rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default DayCard;