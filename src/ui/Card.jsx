// src/components/ui/Card.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Card Component
 * A reusable animated container for wrapping content.
 *
 * Props:
 * - children: React nodes to render inside the card
 * - className: optional extra Tailwind classes
 * - onClick: optional click handler
 */
const Card = ({ children, className = "", onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`glass-card rounded-lg shadow-md p-6 bg-navy-light border border-gold/30 transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
