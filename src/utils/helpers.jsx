export const getMaghribCountdown = () => {
  const now = new Date();
  const maghrib = new Date();
  
  // Set Maghrib to 6:30 PM local time (adjust as needed)
  maghrib.setHours(18, 30, 0);
  
  if (now > maghrib) {
    maghrib.setDate(maghrib.getDate() + 1);
  }
  
  const diff = maghrib - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { hours, minutes, seconds };
};

export const getRamadanGreeting = () => {
  const hour = new Date().getHours();
  
  if (hour < 12) return "Ramadan Mubarak! 🌙";
  if (hour < 17) return "Blessed Afternoon ☀️";
  if (hour < 20) return "Peaceful Evening 🌆";
  return "Taraweeh Prayers Tonight 🕌";
};

export const calculateConsistency = (days) => {
  const totalPrayers = days.reduce((acc, day) => {
    const completedPrayers = Object.values(day.prayers).filter(Boolean).length;
    return acc + completedPrayers;
  }, 0);
  
  const totalPossible = days.length * 5;
  return totalPossible > 0 ? ((totalPrayers / totalPossible) * 100).toFixed(1) : 0;
};