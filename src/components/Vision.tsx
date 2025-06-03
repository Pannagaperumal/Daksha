import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Future of legal practice"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 to-transparent pointer-events-none rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xl font-medium text-white font-serif">
                  "The future of law is intelligent, efficient, and accessible."
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Our Vision: <span className="text-gold-400">The Future of Legal Practice</span>
            </h2>
            <p className="text-lg text-white/80">
              Daksha represents our vision of a legal industry transformed by AI – where technology handles the routine, allowing legal professionals to focus on strategy, advocacy, and client relationships.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gold-500 pl-4 py-2">
                <h3 className="text-xl font-bold mb-2">Democratizing Legal Expertise</h3>
                <p className="text-white/70">
                  Making expert legal analysis accessible to organizations of all sizes, not just those with massive legal departments.
                </p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4 py-2">
                <h3 className="text-xl font-bold mb-2">Enhancing Human Judgment</h3>
                <p className="text-white/70">
                  AI-powered tools that augment – not replace – the critical thinking and strategic judgment that makes great lawyers invaluable.
                </p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4 py-2">
                <h3 className="text-xl font-bold mb-2">Continuous Evolution</h3>
                <p className="text-white/70">
                  Building a learning system that continuously improves through collaboration with legal experts.
                </p>
              </div>
            </div>
            
            <a 
              href="#join-vision" 
              className="inline-flex items-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-md font-medium transition-colors"
            >
              Join Our Vision
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;