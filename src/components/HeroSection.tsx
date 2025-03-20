
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section id="home" className="py-20 md:py-28 bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
            We Build <span className="text-purple-600"></span> That Solve Problems
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Our team of experts uses a methodology to identify the software solutions exactly aligned with your business needs.
          </p>
          <div className="flex gap-4 pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 rounded-md text-base transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-5 rounded-md text-base transition-all duration-300">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-1 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((_, i) => <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                </div>)}
            </div>
            <span className="ml-4 text-sm font-medium">Trusted by <span className="text-purple-600">500+</span> companies</span>
          </div>
        </div>
        <div className="relative">
          <img alt="Software development workspace" className="rounded-lg shadow-xl mx-auto" src="/lovable-uploads/93a74424-5852-483c-8d14-faee26ae29a8.jpg" />
        </div>
      </div>
    </section>;
};
export default HeroSection;
