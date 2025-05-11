import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('pain-points');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80 mix-blend-multiply"
          aria-hidden="true"
        ></div>
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Work Less, Achieve More: Automate Your Business Like a 4-Hour Work Week Pro
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Reclaim 20+ hours every week through strategic business automation. 
            Build systems that work for you, not the other way around.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#get-started" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md text-center transition-colors"
            >
              Start Automating Today
            </a>
            <a 
              href="#how-it-works" 
              className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-md text-center hover:bg-white/10 transition-colors"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;