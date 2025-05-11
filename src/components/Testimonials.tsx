import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      quote: "I've reclaimed 25 hours every week through these automation systems. My business now runs whether I'm at my desk or on a beach in Bali.",
      name: "Michael Thompson",
      title: "E-commerce Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The systems thinking approach completely transformed my consulting practice. I'm earning more while working 50% less than before.",
      name: "Sarah Johnson",
      title: "Marketing Consultant",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a digital agency owner, I was drowning in client work. Now I have systems that handle 80% of the day-to-day, giving me freedom to focus on strategy.",
      name: "David Rodriguez",
      title: "Agency Owner",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "I was skeptical about automation, but after implementing these systems, my productivity skyrocketed. I now have a true 'passive income' business.",
      name: "Jennifer Chen",
      title: "SaaS Entrepreneur",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Location independence was always my goal. Thanks to these automation frameworks, I can run my 7-figure business from anywhere in the world.",
      name: "Robert Miller",
      title: "Digital Nomad & Founder",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="success-stories" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Business Owners Who Reclaimed Their Time
          </h2>
          <p className="text-xl text-gray-600">
            These entrepreneurs automated their way to freedom—you can too.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block"
            onClick={scrollRight}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Testimonial Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto space-x-6 py-8 px-4 -mx-4 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-[400px] bg-white rounded-xl shadow-lg overflow-hidden snap-start"
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-500">Success Story #{index + 1}</div>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 border-t border-blue-100">
                  <div className="flex items-center justify-between">
                    <div className="text-blue-800 font-medium">Hours reclaimed:</div>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      20+ weekly
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;