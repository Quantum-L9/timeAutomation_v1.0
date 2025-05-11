import React from 'react';
import { Clock, Battery, Briefcase, HeartPulse } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "Trapped in Time-Consuming Tasks",
      description: "You're spending 60+ hours weekly on repetitive work that doesn't grow your business"
    },
    {
      icon: <Battery className="h-10 w-10 text-orange-500" />,
      title: "Energy Depleted",
      description: "You're exhausted from constant firefighting and have no creative energy left for vision"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-orange-500" />,
      title: "Business Owns You",
      description: "Your business demands constant attention, making true freedom impossible"
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-orange-500" />,
      title: "Life-Work Imbalance",
      description: "Your personal life and health take a backseat to business demands"
    }
  ];

  return (
    <section id="pain-points" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Does Your Business Run You, Instead of You Running It?
          </h2>
          <p className="text-xl text-gray-600">
            Most entrepreneurs find themselves trapped in the very businesses they created to find freedom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 md:p-10 bg-blue-900 rounded-xl text-white max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">The Freedom Paradox</h3>
          <p className="text-lg mb-6">
            You started your business to gain freedom, but now you're working longer hours than ever before. 
            The entrepreneurial dream has turned into an around-the-clock commitment with no end in sight.
          </p>
          <p className="text-lg font-medium">
            What if you could build systems that work <span className="italic">for</span> you instead of <span className="italic">because</span> of you?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;