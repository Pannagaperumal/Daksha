import React from 'react';
import { UserCheck, Building, Briefcase, Scale } from 'lucide-react';

const Audience = () => {
  const audiences = [
    {
      icon: <UserCheck className="h-8 w-8 text-navy-700" />,
      title: "Law Firm Associates",
      description: "Save hundreds of hours on document review and due diligence. Focus on analysis and client service instead of tedious manual review.",
      benefits: ["60% faster document review", "Improved accuracy", "Better work-life balance"]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-navy-700" />,
      title: "Legal Researchers",
      description: "Extract insights across thousands of documents to identify trends, legal precedents, and establish stronger case strategies.",
      benefits: ["Comprehensive data extraction", "Pattern identification", "Precedent tracking"]
    },
    {
      icon: <Building className="h-8 w-8 text-navy-700" />,
      title: "In-House Counsel",
      description: "Manage contract obligations, track deadlines, and ensure compliance across your entire organization without expanding your team.",
      benefits: ["Centralized obligation tracking", "Compliance monitoring", "Risk mitigation"]
    },
    {
      icon: <Scale className="h-8 w-8 text-navy-700" />,
      title: "Legal Department Heads",
      description: "Improve department efficiency, reduce outside counsel expenses, and maintain better oversight of all legal matters.",
      benefits: ["Department productivity metrics", "Resource optimization", "Cost reduction"]
    }
  ];

  return (
    <section id="audience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-navy-900">
            Who Benefits from <span className="text-gold-600">Daksha</span>
          </h2>
          <p className="text-lg text-slate-600">
            From solo practitioners to AmLaw 100 firms and corporate legal departments, Daksha is designed for legal professionals at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="bg-navy-50 rounded-lg p-8 hover:bg-navy-100 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">{audience.title}</h3>
              <p className="text-slate-600 mb-6">{audience.description}</p>
              <ul className="space-y-2">
                {audience.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-gold-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy-800 to-navy-900 rounded-lg p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
                Ready to transform your legal workflow?
              </h3>
              <p className="text-white/80 mb-6">
                Join leading law firms and corporate legal departments already benefiting from Daksha's AI-powered legal intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#try-free" 
                  className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-md font-medium transition-colors"
                >
                  Try Daksha Free
                </a>
                <a 
                  href="#schedule-demo" 
                  className="px-6 py-3 border border-white/30 hover:border-white/60 text-white rounded-md font-medium transition-colors"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="w-32 h-32 rounded-full bg-gold-500/20 flex items-center justify-center">
                <Scale className="h-16 w-16 text-gold-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;