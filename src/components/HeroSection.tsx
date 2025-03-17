
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-32 bg-gradient-to-b from-white to-softGray">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Build <span className="gradient-text">Software Solutions</span> That Solve Problems
          </h1>
          <p className="text-lg text-darkGray/80 max-w-lg">
            Our team of experts uses a methodology to identify the software solutions exactly aligned with your business needs.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="btn-primary">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="btn-secondary">
              Learn More
            </Button>
          </div>
          <div className="pt-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item} 
                    className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${item + 20}.jpg`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium">Trusted by <span className="text-softBlue">500+</span> companies</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
            alt="Software Development Team" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
