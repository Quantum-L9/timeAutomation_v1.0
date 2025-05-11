import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import AutomationExamples from './components/AutomationExamples';
import ImpactMetrics from './components/ImpactMetrics';
import Transformation from './components/Transformation';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <AutomationExamples />
        <ImpactMetrics />
        <Transformation />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;