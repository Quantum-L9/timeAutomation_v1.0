import React, { useState } from 'react';
import { Download, Calendar, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [activeTab, setActiveTab] = useState<'download' | 'schedule'>('download');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit to an API endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds for demo purposes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        employees: '',
      });
    }, 3000);
  };

  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl text-blue-100">
            Choose your path to freedom through strategic business automation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-6 font-medium flex items-center justify-center ${
                activeTab === 'download' 
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('download')}
            >
              <Download className="h-5 w-5 mr-2" />
              <span>Download Automation Roadmap</span>
            </button>
            <button
              className={`flex-1 py-4 px-6 font-medium flex items-center justify-center ${
                activeTab === 'schedule' 
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('schedule')}
            >
              <Calendar className="h-5 w-5 mr-2" />
              <span>Schedule a Strategy Call</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="p-8">
            {activeTab === 'download' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Your 5-Step Business Automation Roadmap
                  </h3>
                  <p className="text-gray-600">
                    Get instant access to our proven framework for identifying and implementing the highest-impact automation opportunities in your business.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-bold mb-3">What's Inside:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>The Business Freedom Framework</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>Time-Saving Automation Templates</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>ROI Calculator for Automation Projects</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>Implementation Checklist & Timeline</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>Case Studies: 20+ Hours Reclaimed</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-800 font-medium">
                        "This roadmap helped me identify $50,000 worth of time I was wasting every year on tasks that could be automated."
                      </p>
                      <p className="text-sm text-orange-600 mt-2">— Chris L., CEO</p>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="bg-green-50 p-8 rounded-lg flex flex-col items-center justify-center text-center">
                      <div className="bg-green-100 text-green-700 rounded-full p-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                      <p className="text-gray-600 mb-4">
                        Your automation roadmap is on its way to your inbox. Check your email in the next few minutes.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Business Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="john@yourcompany.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Company"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Size
                          </label>
                          <select
                            name="employees"
                            id="employees"
                            value={formData.employees}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="">Select company size</option>
                            <option value="1">Just me</option>
                            <option value="2-10">2-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201+">201+ employees</option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                        >
                          <span>Download Now</span>
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-4">
                        By submitting this form, you agree to receive emails from us about business automation. You can unsubscribe at any time.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Schedule Your Business Automation Strategy Call
                  </h3>
                  <p className="text-gray-600">
                    Book a 30-minute call with one of our automation specialists to identify your biggest time-saving opportunities.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-bold mb-3">What to Expect:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>30-Minute Focused Strategy Session</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>Review of Your Current Workflows</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>Identification of Automation Opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>Customized Implementation Recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-2 mt-1">✓</div>
                          <span>Clear Next Steps for Reclaiming Your Time</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-800 font-medium">
                        "This 30-minute call saved me dozens of hours. They showed me automation opportunities I never would have considered."
                      </p>
                      <p className="text-sm text-orange-600 mt-2">— Melissa T., Agency Owner</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="mb-6">
                      <h4 className="font-bold mb-2">Available Time Slots</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Select a date and time that works for your schedule.
                      </p>
                      
                      <div className="space-y-3">
                        {['Tomorrow', 'In 2 days', 'Next week'].map((day, i) => (
                          <div key={i} className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-gray-100 px-4 py-2 font-medium">
                              {day}
                            </div>
                            <div className="grid grid-cols-2 gap-2 p-3">
                              {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time, j) => (
                                <button
                                  key={j}
                                  className="bg-white border border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-sm rounded px-3 py-2 transition-colors"
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href="#"
                      className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors text-center flex items-center justify-center"
                    >
                      <span>Check Full Calendar</span>
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;