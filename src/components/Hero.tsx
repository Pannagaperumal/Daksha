import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-block px-4 py-1 rounded-full bg-gold-500/20 text-gold-400 font-medium text-sm">
              AI-Powered Legal Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Meet Daksha – Your Intelligent Legal Assistant
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Revolutionizing legal document analysis for lawyers, law firms, and corporate teams. Streamline your workflow and gain deeper insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#try-free" 
                className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-md font-medium text-center transition-all transform hover:translate-y-[-2px]"
              >
                Try Daksha Free
              </a>
              <a 
                href="#learn-more" 
                className="px-8 py-3 border border-white/30 hover:border-white/60 text-white rounded-md font-medium text-center transition-all"
              >
                Learn More
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-white/70">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span>Secure & Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-amber-500 mr-2"></div>
                <span>Time-Saving</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Daksha AI Legal Assistant Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-gold-500/30 rounded-full filter blur-3xl -z-0"></div>
            <div className="absolute -left-8 -top-8 w-48 h-48 bg-blue-500/20 rounded-full filter blur-3xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;