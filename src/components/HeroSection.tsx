
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-28 bg-white">
      <div className="container-custom flex justify-center items-center">
        <div className="space-y-6 text-center max-w-3xl">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
            Your Product
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            built by <span className="text-purple-600">great</span><br /><span className="text-purple-600">talents</span>
          </h1>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            We help you build modern web applications that deliver exceptional user experiences and drive business growth.
          </p>
          <div className="flex justify-center pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded-md text-lg transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
