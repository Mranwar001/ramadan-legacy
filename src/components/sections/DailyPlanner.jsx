import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const prayersList = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

const createInitialDays = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    prayers: prayersList.map((p) => ({
      name: p,
      completed: false,
    })),
    dhikr: 0,
    sadaqah: "",
    reflection: "",
  }));
};

const DailyPlanner = () => {
  const [days, setDays] = useLocalStorage("ramadan-days", createInitialDays());

  const togglePrayer = (dayIndex, prayerIndex) => {
    const updated = [...days];
    updated[dayIndex].prayers[prayerIndex].completed =
      !updated[dayIndex].prayers[prayerIndex].completed;
    setDays(updated);
  };

  const increaseDhikr = (dayIndex) => {
    const updated = [...days];
    updated[dayIndex].dhikr += 1;
    setDays(updated);
  };

  const updateSadaqah = (dayIndex, value) => {
    const updated = [...days];
    updated[dayIndex].sadaqah = value;
    setDays(updated);
  };

  const updateReflection = (dayIndex, value) => {
    const updated = [...days];
    updated[dayIndex].reflection = value;
    setDays(updated);
  };

  const resetAll = () => {
    if (window.confirm("Are you sure you want to reset all progress?")) {
      setDays(createInitialDays());
    }
  };

  return (
    <section id="planner" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              <span className="text-gold">30 Days</span> Planner
            </h2>
            <p className="text-sm text-gray-300">Your progress is saved locally on your device. Clearing browser data will reset it.</p>
          </div>

          <div>
            <button
              onClick={resetAll}
              className="bg-red-500 px-4 py-2 rounded-lg text-white"
            >
              Reset All Progress
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {days.map((day, dayIndex) => (
            <div
              key={day.day}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gold mb-4">Day {day.day}</h2>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Prayers</h3>
                {day.prayers.map((prayer, prayerIndex) => (
                  <label key={prayer.name} className="block">
                    <input
                      type="checkbox"
                      checked={prayer.completed}
                      onChange={() => togglePrayer(dayIndex, prayerIndex)}
                      className="mr-2"
                    />
                    {prayer.name}
                  </label>
                ))}
              </div>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Dhikr Count</h3>
                <p className="mb-2">{day.dhikr}</p>
                <button
                  onClick={() => increaseDhikr(dayIndex)}
                  className="bg-gold text-black px-4 py-2 rounded-lg"
                >
                  + Add Dhikr
                </button>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Sadaqah</h3>
                <input
                  type="text"
                  value={day.sadaqah}
                  onChange={(e) => updateSadaqah(dayIndex, e.target.value)}
                  placeholder="Amount or description"
                  className="w-full p-2 rounded-lg text-black"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-2">Reflection</h3>
                <textarea
                  value={day.reflection}
                  onChange={(e) => updateReflection(dayIndex, e.target.value)}
                  placeholder="How was your fasting today?"
                  className="w-full p-2 rounded-lg text-black"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyPlanner;
