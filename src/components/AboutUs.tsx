import React from 'react';
import Logo from './Logo';

const AboutUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Logo className="h-64 w-64 mx-auto lg:mx-0" />
            <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 to-transparent blur-2xl" />
          </div>
          
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                Pioneering the Future of AI
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6">
              At SAIGEsystems, we're revolutionizing business operations through advanced AI solutions. Our mission is to empower organizations with sovereign, intelligent automation that drives efficiency and innovation.
            </p>
            
            <p className="text-gray-300 text-lg">
              By combining cutting-edge AI technology with deep industry expertise, we deliver transformative solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;