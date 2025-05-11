import React from 'react';
import { TrendingUp, Clock, Sparkles, DollarSign } from 'lucide-react';

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      value: "80%",
      label: "Administrative Tasks Reduced",
      description: "Automation eliminates repetitive tasks that drain your energy and creativity"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-green-500" />,
      value: "35%",
      label: "Revenue Growth Increase",
      description: "More time for high-value activities leads to significant revenue growth"
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      value: "24+",
      label: "Hours Reclaimed Weekly",
      description: "Our clients consistently win back a full day or more each week"
    },
    {
      icon: <DollarSign className="h-10 w-10 text-amber-500" />,
      value: "3.2x",
      label: "Return on Investment",
      description: "The average ROI for our automation systems within the first year"
    }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Measurable Impact of Automation
          </h2>
          <p className="text-xl text-blue-100">
            These aren't just promises—they're real metrics from business owners who've implemented our systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-xl font-medium mb-3">{metric.label}</div>
              <p className="text-blue-100">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;