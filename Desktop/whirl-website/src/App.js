// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import TrustSection from './components/TrustSection/TrustSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import WhatIsWhirlSection from './components/WhatIsWhirlSection/WhatIsWhirlSection';
import BlueSection from './components/BlueSection/BlueSection';
import TasksAutomatedSection from './components/TasksAutomatedSection/TasksAutomatedSection';
import BlogSection from './components/BlogSection/BlogSection';
import GetStartedSection from './components/GetStartedSection/GetStartedSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <WhatIsWhirlSection />
      <BlueSection />
      <TasksAutomatedSection />
      <BlogSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}

export default App;