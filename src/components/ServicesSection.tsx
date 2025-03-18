
import React from 'react';
import { GradientHeading } from '@/components/ui/gradient-heading';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <GradientHeading as="h2" className="text-3xl font-bold mb-4">Services we offer</GradientHeading>
          <p className="text-gray-600">
            We provide end-to-end solutions for businesses looking to build innovative digital products.
          </p>
        </div>

        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
};

export default ServicesSection;
