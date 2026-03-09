# 🌙 Ramadan Legacy – 30 Days Spiritual Planner

![Ramadan Legacy Banner](https://via.placeholder.com/1200x600/0B1C2D/D4AF37?text=Ramadan+Legacy+Planner)

<div align="center">

[![Live Demo](https://img.shields.io/badge/demo-live-gold?style=for-the-badge&logo=vercel)](https://ramadan-legacy.vercel.app)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

**A modern, beautiful, fully responsive front-end web application for tracking your spiritual journey during Ramadan.**

[Features](#-features) • [Demo](#-live-demo) • [Installation](#-installation) • [Usage](#-usage) • [Technologies](#-technologies) • [Author](#-author)

</div>

---

## ✨ Features

### 🕌 Core Features

| Feature | Description |
|---------|-------------|
| **Hero Section** | Animated crescent moon, dynamic Ramadan greeting, real-time Maghrib countdown |
| **30-Day Interactive Planner** | Track prayers, Quran reading, dhikr, sadaqah, reflections for each day |
| **LocalStorage Integration** | All progress saved automatically in your browser |
| **Qur'an Section** | 7 essential verses with Arabic/English toggle and audio simulation |
| **Duas Collection** | Categorized duas with Arabic, transliteration, English meaning, and copy button |
| **Age-Based Guide** | Tailored content for Children, Youth, and Elderly |
| **Sahaba Inspiration** | Stories of 4 great companions with reflection boxes |
| **Laylatul Qadr Tracker** | Last 10 nights highlighted with special emphasis on odd nights |
| **Analytics Dashboard** | Track total prayers, dhikr count, sadaqah, and consistency percentage |
| **PDF Export** | Download complete planner with all sections and branding |
| **Personal Branding** | Professional footer with contact information and hire me button |

### 🎨 Design Features

- **Mobile-first responsive design** - Works flawlessly on all devices
- **Dark mode Islamic theme** - Elegant navy and gold color scheme
- **Glassmorphism cards** - Modern blur effects with golden borders
- **Smooth animations** - Framer Motion powered transitions
- **Beautiful typography** - Arabic font support with Amiri
- **Professional UI/UX** - Intuitive navigation and user experience

---

## 🚀 Live Demo

**[View Live Demo](https://ramadan-legacy.vercel.app)**

Experience the application in action:

| Device | Screenshot |
|--------|------------|
| Desktop | ![Desktop](https://via.placeholder.com/800x450/0B1C2D/D4AF37?text=Desktop+View) |
| Mobile | ![Mobile](https://via.placeholder.com/300x600/0B1C2D/D4AF37?text=Mobile+View) |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn** (v1.22 or higher)
- **Git** (for cloning the repository)

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ramadan-legacy.git
cd ramadan-legacy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Additional Packages

```bash
npm install tailwindcss postcss autoprefixer framer-motion html2pdf.js lucide-react
npx tailwindcss init -p
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

Navigate to `http://localhost:5173` (or the port shown in your terminal)

---

## 📁 Project Structure

```
ramadan-legacy/
├── public/
│   ├── profile-placeholder.jpg
│   ├── crescent-moon.svg
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── audio/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── DailyPlanner.jsx
│   │   │   ├── DayCard.jsx
│   │   │   ├── QuranSection.jsx
│   │   │   ├── DuasSection.jsx
│   │   │   ├── AgeGuide.jsx
│   │   │   ├── SahabaInspiration.jsx
│   │   │   ├── LaylatulQadr.jsx
│   │   │   └── AnalyticsDashboard.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Counter.jsx
│   │   │   └── StarRating.jsx
│   │   └── PDFExport.jsx
│   ├── data/
│   │   ├── quranData.js
│   │   ├── duasData.js
│   │   └── sahabaData.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   ├── pdfGenerator.js
│   │   └── helpers.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

## 🎯 Usage Guide

### 📅 Daily Planner

1. Navigate to the **Planner** section
2. Click on any day card to expand it
3. Track your:
   - ✅ **5 Daily Prayers** - Check off each prayer
   - 📖 **Qur'an Reading** - Mark when you complete the daily Juz
   - 📿 **Dhikr** - Use the counter to track your remembrances
   - 💰 **Sadaqah** - Record your charity given
   - ⭐ **Fasting Rating** - Rate the quality of your fast
   - 📝 **Reflection** - Write your daily thoughts

### 📊 Analytics Dashboard

View your progress with real-time statistics:
- Total prayers completed
- Total dhikr count
- Days with sadaqah
- Consistency percentage with progress bars

### 📄 PDF Export

1. Click the **"Download Ramadan Plan (PDF)"** button anywhere in the app
2. The complete planner will generate and download automatically
3. The PDF includes:
   - All 30 days template
   - Qur'an verses
   - Duas collection
   - Age guide sections
   - Sahaba stories
   - Your branding section

### 🔄 Data Persistence

- All your progress is automatically saved to **LocalStorage**
- Close and reopen the browser - your data remains intact
- Clear browser cache to reset (optional)

---

## 🎨 Color Scheme

```css
:root {
  --navy: #0B1C2D;      /* Primary background */
  --gold: #D4AF37;      /* Accents and highlights */
  --navy-light: #1A2F3F; /* Card backgrounds */
  --gold-light: #E5C55C; /* Hover states */
}
```

### Typography

- **English**: Inter - Clean, modern sans-serif
- **Arabic**: Amiri - Elegant, traditional Arabic font

---

## 🔧 Configuration Files

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1C2D",
        gold: "#D4AF37",
        "navy-light": "#1A2F3F",
      },
      fontFamily: {
        arabic: ['"Amiri"', "serif"],
      },
      animation: {
        "crescent-glow": "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
```

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click **Deploy**

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/ramadan-legacy/',
     // ... rest of config
   })
   ```
2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 📱 Responsive Breakpoints

| Device | Screen Size | Optimization |
|--------|-------------|--------------|
| Mobile | 320px - 640px | Single column, collapsible cards |
| Tablet | 641px - 1024px | 2-column grid, expanded cards |
| Desktop | 1025px+ | 3-column grid, full layout |

---

## 🔒 LocalStorage Structure

```javascript
{
  "ramadan-days": [
    {
      "id": 1,
      "prayers": {
        "Fajr": false,
        "Dhuhr": false,
        "Asr": false,
        "Maghrib": false,
        "Isha": false
      },
      "quranRead": false,
      "dhikrCount": 0,
      "sadaqah": "",
      "reflection": "",
      "fastingRating": 0
    },
    // ... days 2 through 30
  ]
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Anwar Dahir Yahaya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 👨‍💻 Author

<div align="center">
  
![Anwar Dahir Yahaya](https://via.placeholder.com/150/0B1C2D/D4AF37?text=Anwar)

### **Anwar Dahir Yahaya**
*Front-End Developer*

[![Email](https://img.shields.io/badge/Email-yourmail@email.com-gold?style=flat-square&logo=gmail)](mailto:yourmail@email.com)
[![Phone](https://img.shields.io/badge/Phone-%2B234-XXXXXXXXXX-gold?style=flat-square&logo=whatsapp)](tel:+234XXXXXXXXXX)
[![GitHub](https://img.shields.io/badge/GitHub-@yourgithub-gold?style=flat-square&logo=github)](https://github.com/yourgithub)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-@yourlinkedin-gold?style=flat-square&logo=linkedin)](https://linkedin.com/in/yourlinkedin)

**📍 Location:** Nigeria  
**💼 Available for:** Front-End Development Projects

</div>

---

## 🙏 Acknowledgments

- Inspired by the blessed month of Ramadan
- Islamic content verified from authentic sources
- UI/UX design principles from modern web applications
- Fonts provided by Google Fonts
- Icons by Lucide React

---

## 📞 Support

For support, email anwarcscience@email.com or create an issue on GitHub.

---

## 🎉 Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">

**Built with ❤️ for the sake of Allah 🤍**

*"The best of deeds are those that are consistent, even if small."* - Prophet Muhammad ﷺ

**[⬆ back to top](#-ramadan-legacy--30-days-spiritual-planner)**

</div>
