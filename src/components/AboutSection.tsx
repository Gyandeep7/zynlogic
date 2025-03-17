
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    "10+ years of industry experience",
    "100+ successful projects delivered",
    "Cutting-edge technologies",
    "Dedicated support team",
    "On-time delivery",
    "Flexible engagement models"
  ];

  return (
    <section id="about" className="section-padding bg-softGray">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
            alt="Our Team" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
        
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold">About Our Company</h2>
          <p className="text-lg text-darkGray/80">
            We are a team of passionate developers, designers, and technology enthusiasts dedicated to creating exceptional software solutions that drive business growth and innovation.
          </p>
          
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-softBlue/20 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-softBlue" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <Button className="btn-primary mt-4">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
