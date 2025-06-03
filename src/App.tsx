import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Audience from './components/Audience';
import DemoPreview from './components/DemoPreview';
import Vision from './components/Vision';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Audience />
        <DemoPreview />
        <Vision />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;