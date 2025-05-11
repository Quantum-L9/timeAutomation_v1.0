import React, { useState } from 'react';
import { CalendarClock, MailCheck, CreditCard, Users } from 'lucide-react';

const AutomationExamples = () => {
  const [activeTab, setActiveTab] = useState(0);

  const automations = [
    {
      icon: <CalendarClock className="h-12 w-12 text-blue-600" />,
      title: "Client Scheduling & Follow-ups",
      timeSaved: "8+ hours weekly",
      description: "Eliminate back-and-forth emails with intelligent scheduling that handles everything from booking to reminders to post-meeting follow-ups.",
      features: [
        "AI-powered scheduling that finds optimal meeting times",
        "Automated reminders with personalized messaging",
        "Smart follow-up sequences based on meeting outcomes",
        "Client information collection without manual data entry"
      ]
    },
    {
      icon: <MailCheck className="h-12 w-12 text-blue-600" />,
      title: "Email & Communication Management",
      timeSaved: "12+ hours weekly",
      description: "Implement intelligent email filtering, response templates, and delegation workflows that drastically reduce your time in the inbox.",
      features: [
        "Smart inbox prioritization and categorization",
        "Templated responses for common inquiries",
        "Automated delegation to team members",
        "Client communication triggers based on project milestones"
      ]
    },
    {
      icon: <CreditCard className="h-12 w-12 text-blue-600" />,
      title: "Invoicing & Payment Collection",
      timeSaved: "5+ hours weekly",
      description: "Set up systems that automate the entire billing cycle from invoice creation to payment reminders to receipt generation.",
      features: [
        "Recurring billing with automatic invoicing",
        "Intelligent payment reminders with escalation paths",
        "Automated reconciliation with accounting software",
        "Client payment portal with self-service options"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Client Onboarding Experience",
      timeSaved: "10+ hours weekly",
      description: "Create a remarkable, hands-off client onboarding experience that collects information, sets expectations, and builds excitement.",
      features: [
        "Smart questionnaires that adapt based on client responses",
        "Automated resource delivery based on client needs",
        "Sequential welcome sequence with personalized touchpoints",
        "Progress tracking dashboard for clients and team members"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Systems That Work While You're Sleeping
          </h2>
          <p className="text-xl text-gray-600">
            These key automation workflows deliver measurable time savings and transform how your business operates.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {automations.map((automation, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {automation.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                {automations[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {automations[activeTab].title}
              </h3>
              <div className="inline-block bg-green-100 text-green-800 font-medium text-sm px-4 py-1 rounded-full mb-4">
                {automations[activeTab].timeSaved}
              </div>
              <p className="text-gray-600 mb-6">
                {automations[activeTab].description}
              </p>
              <ul className="space-y-3">
                {automations[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-8 md:p-12 flex items-center justify-center">
              <div className="max-w-md">
                <div className="relative border-4 border-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/296115/pexels-photo-296115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                    alt="Automation workflow visualization"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-900/60">
                    <div className="text-center text-white p-4">
                      <p className="text-lg font-bold mb-2">Time Reclaimed</p>
                      <p className="text-3xl font-bold">{automations[activeTab].timeSaved}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-blue-800 font-medium">
                    "I used to spend 10+ hours a week just on {automations[activeTab].title.toLowerCase()}. Now it's almost entirely hands-off."
                  </p>
                  <p className="text-sm text-blue-600 mt-2">— Amanda H., Agency Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationExamples;