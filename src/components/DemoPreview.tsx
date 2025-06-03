import React, { useState } from 'react';

const DemoPreview = () => {
  const [activeTab, setActiveTab] = useState('document-analysis');
  
  const tabs = [
    { id: 'document-analysis', label: 'Document Analysis' },
    { id: 'clause-extraction', label: 'Clause Extraction' },
    { id: 'summary-generation', label: 'Summary Generation' },
    { id: 'obligation-tracking', label: 'Obligation Tracking' }
  ];
  
  const tabContent = {
    'document-analysis': {
      title: "AI-Powered Document Analysis",
      description: "Upload any legal document and Daksha instantly identifies document type, parties, key dates, and critical provisions.",
      image: "https://images.pexels.com/photos/7792546/pexels-photo-7792546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Automatic document classification",
        "Party and entity recognition",
        "Critical date identification",
        "Risk assessment"
      ]
    },
    'clause-extraction': {
      title: "Intelligent Clause Extraction",
      description: "Daksha recognizes and extracts over 50 different clause types across contracts, briefs, and other legal documents.",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "50+ pre-trained clause categories",
        "Custom clause training capability",
        "Clause comparison across documents",
        "Version change tracking"
      ]
    },
    'summary-generation': {
      title: "Comprehensive Summary Generation",
      description: "Transform lengthy documents into concise, actionable summaries tailored to your specific needs and audience.",
      image: "https://images.pexels.com/photos/4143798/pexels-photo-4143798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Executive, detailed, and technical summaries",
        "Plain language translation",
        "Key point extraction",
        "Summary export options"
      ]
    },
    'obligation-tracking': {
      title: "Proactive Obligation Tracking",
      description: "Never miss a deadline with automatic extraction and tracking of obligations, deadlines, and requirements.",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Calendar integration",
        "Team assignment capabilities",
        "Notification system",
        "Compliance status tracking"
      ]
    }
  };
  
  return (
    <section id="demo" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-navy-900">
            See <span className="text-gold-600">Daksha</span> in Action
          </h2>
          <p className="text-lg text-slate-600">
            Experience how Daksha's AI transforms complex legal documents into actionable insights.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-slate-200">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-b-2 border-gold-500 text-navy-800'
                      : 'text-slate-600 hover:text-navy-800'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {tabContent[activeTab].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-gold-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#try-feature" 
                  className="inline-flex items-center px-5 py-2.5 bg-navy-800 text-white rounded-md hover:bg-navy-700 transition-colors text-sm font-medium"
                >
                  Try This Feature
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-md border border-slate-200">
                  <img 
                    src={tabContent[activeTab].image} 
                    alt={`Daksha ${tabContent[activeTab].title} feature`}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent pointer-events-none rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;