import React from 'react';
import { Search, FileText, Clock, Shield, Tags, Users, FileCheck, Brain } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-gold-500" />,
      title: "Smart Clause Detection",
      description: "Automatically identify and extract key clauses, obligations, and terms from any legal document."
    },
    {
      icon: <Brain className="h-6 w-6 text-gold-500" />,
      title: "AI-Powered Summaries",
      description: "Convert lengthy legal documents into concise, actionable summaries you can understand at a glance."
    },
    {
      icon: <Search className="h-6 w-6 text-gold-500" />,
      title: "Semantic Search",
      description: "Find exactly what you need with intelligent search that understands legal concepts, not just keywords."
    },
    {
      icon: <Shield className="h-6 w-6 text-gold-500" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with legal industry standards keeps your documents safe."
    },
    {
      icon: <Tags className="h-6 w-6 text-gold-500" />,
      title: "Smart Tagging",
      description: "Organize documents with AI-suggested tags based on content, case relevance, and document type."
    },
    {
      icon: <Clock className="h-6 w-6 text-gold-500" />,
      title: "Deadline Tracking",
      description: "Never miss important dates with automatic extraction and notification of critical deadlines."
    },
    {
      icon: <Users className="h-6 w-6 text-gold-500" />,
      title: "Collaborative Analysis",
      description: "Share insights, annotations, and summaries securely with your team or clients."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-gold-500" />,
      title: "Compliance Verification",
      description: "Automatically check documents against regulatory requirements and internal policies."
    }
  ];

  return (
    <section id="features" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-navy-900">
            Powerful Features That <span className="text-gold-600">Transform</span> Legal Work
          </h2>
          <p className="text-lg text-slate-600">
            Daksha combines cutting-edge AI with deep legal understanding to deliver tools that make a real difference in your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center mb-6 group-hover:bg-navy-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#demo" 
            className="inline-flex items-center px-6 py-3 bg-navy-800 text-white rounded-md hover:bg-navy-700 transition-colors font-medium"
          >
            See Features in Action
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;