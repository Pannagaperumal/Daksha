import React from 'react';
import { FileSearch, Clock, FileCheck, AlertTriangle } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-navy-900">
            Legal Document Analysis: <span className="text-gold-600">Reimagined</span>
          </h2>
          <p className="text-lg text-slate-600">
            Modern legal practice demands modern solutions. See how Daksha transforms your document workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-800 font-serif">The Challenge</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Clock className="w-5 h-5 text-red-500" />,
                    title: "Time-Consuming Reviews",
                    description: "Lawyers spend 30+ hours per week reviewing documents manually"
                  },
                  {
                    icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                    title: "High Risk of Oversight",
                    description: "Critical clauses and deadlines can be missed in lengthy contracts"
                  },
                  {
                    icon: <FileSearch className="w-5 h-5 text-purple-500" />,
                    title: "Knowledge Silos",
                    description: "Valuable insights remain trapped in disconnected documents"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-800">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-800 font-serif">Daksha's Solution</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <FileCheck className="w-5 h-5 text-green-500" />,
                    title: "Automated Analysis",
                    description: "Instantly extract key clauses, obligations, and deadlines"
                  },
                  {
                    icon: <FileSearch className="w-5 h-5 text-blue-500" />,
                    title: "Intelligent Summarization",
                    description: "Convert complex legalese into clear, actionable insights"
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-gold-500" />,
                    title: "Proactive Alerts",
                    description: "Never miss a critical deadline with intelligent notifications"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-800">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden border border-slate-200">
              <img 
                src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Legal document analysis comparison"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 transform translate-x-6 translate-y-6 bg-gold-500/10 rounded-lg -z-10"></div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-navy-500/10 rounded-full -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;