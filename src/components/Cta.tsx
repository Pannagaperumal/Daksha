import React from 'react';

const Cta = () => {
  return (
    <section id="try-free" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Start Your <span className="text-gold-400">Daksha</span> Journey Today
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join forward-thinking legal professionals who are transforming their practice with AI-powered document analysis.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-gold-400 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">Create Your Account</h3>
                    <p className="text-white/70">Quick setup with your work email</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-gold-400 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">Upload Documents</h3>
                    <p className="text-white/70">Start with your most complex contracts</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center text-gold-400 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">Experience the Difference</h3>
                    <p className="text-white/70">See immediate insights and time savings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 bg-white p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 font-serif">Request Early Access</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Work Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="john@lawfirm.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">
                    Organization
                  </label>
                  <input 
                    type="text" 
                    id="organization" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Smith & Associates"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-md font-medium transition-colors mt-4"
                >
                  Request Early Access
                </button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;