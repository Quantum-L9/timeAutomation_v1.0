import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Transformation = () => {
  const [hover, setHover] = useState(false);
  
  const beforeTasks = [
    "Manually scheduling client meetings (3h/week)",
    "Creating and sending proposals (5h/week)",
    "Following up on unpaid invoices (4h/week)",
    "Customer support emails and calls (10h/week)",
    "Manual social media posting (8h/week)",
    "Weekly reporting and data entry (6h/week)"
  ];
  
  const afterTasks = [
    "Automated scheduling system (0.5h/week)",
    "Proposal template system (1h/week)",
    "Automated payment reminders (0.5h/week)",
    "Tiered support system with templates (3h/week)",
    "Batched content creation and scheduling (2h/week)",
    "Automated reporting dashboards (1h/week)"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Freedom Transformation
          </h2>
          <p className="text-xl text-gray-600">
            See how automation systematically transforms your workweek, freeing you for what truly matters.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative grid md:grid-cols-2 gap-4 md:gap-16 transition-all duration-500"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* Before Column */}
            <div 
              className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 ${
                hover ? 'opacity-50 scale-95' : 'opacity-100'
              }`}
            >
              <div className="bg-red-100 text-red-800 font-medium inline-block px-4 py-1 rounded-full mb-6">
                BEFORE
              </div>
              <h3 className="text-2xl font-bold mb-6">36+ Hours on Low-Value Tasks</h3>
              <div className="space-y-5">
                {beforeTasks.map((task, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-red-100 text-red-800 rounded-full p-1 mt-0.5">
                      <div className="h-4 w-4 flex items-center justify-center">✗</div>
                    </div>
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 border border-red-200 bg-red-50 rounded-lg">
                <p className="text-gray-700 italic">
                  "I was working IN my business 60+ hours a week with no time to work ON it."
                </p>
              </div>
            </div>

            {/* Arrow for desktop */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-blue-600 rounded-full p-3">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Arrow for mobile */}
            <div className="md:hidden flex justify-center my-2">
              <div className="bg-blue-600 rounded-full p-2 transform rotate-90">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* After Column */}
            <div 
              className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 ${
                hover ? 'opacity-100 scale-105 shadow-xl' : 'opacity-100'
              }`}
            >
              <div className="bg-green-100 text-green-800 font-medium inline-block px-4 py-1 rounded-full mb-6">
                AFTER
              </div>
              <h3 className="text-2xl font-bold mb-6">8 Hours on Optimized Systems</h3>
              <div className="space-y-5">
                {afterTasks.map((task, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mt-0.5">
                      <div className="h-4 w-4 flex items-center justify-center">✓</div>
                    </div>
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 border border-green-200 bg-green-50 rounded-lg">
                <p className="text-gray-700 italic">
                  "Now I work 15-20 hours a week and my business runs smoother than ever before."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">What will you do with 28 extra hours every week?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: "Family Time", emoji: "👨‍👩‍👧‍👦" },
                { label: "Travel", emoji: "✈️" },
                { label: "Hobbies", emoji: "🎨" },
                { label: "Strategic Growth", emoji: "📈" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <div className="font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;