import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onDecrement}
        className="w-8 h-8 rounded-full bg-navy-light border border-gold/30 flex items-center justify-center hover:bg-gold/20"
      >
        <Minus size={16} />
      </motion.button>
      
      <span className="text-xl font-bold text-gold">{count}</span>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onIncrement}
        className="w-8 h-8 rounded-full bg-navy-light border border-gold/30 flex items-center justify-center hover:bg-gold/20"
      >
        <Plus size={16} />
      </motion.button>
    </div>
  );
};

export default Counter;