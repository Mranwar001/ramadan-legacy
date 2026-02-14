import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, onRate }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRate(star)}
          className="focus:outline-none"
        >
          <Star
            size={20}
            className={`transition-colors ${
              star <= rating 
                ? 'fill-gold text-gold' 
                : 'text-gray-400 hover:text-gold/50'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;