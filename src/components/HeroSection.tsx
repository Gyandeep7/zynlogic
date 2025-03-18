
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-28 bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
            Your Product
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            built by <span className="text-purple-600">great talents</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            We help you build modern web applications that deliver exceptional user experiences and drive business growth.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/68d3984b-0945-4d5f-a0e5-cba87a6165b2.png" 
            alt="Product Illustration" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
