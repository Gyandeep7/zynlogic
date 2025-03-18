
import React from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    icon: "🔍",
    title: 'Research',
    description: 'We research your target audience and competitors to create effective solutions.'
  },
  {
    icon: "💡",
    title: 'Design',
    description: 'Our UI/UX design focuses on creating intuitive and engaging user experiences.'
  },
  {
    icon: "⚙️",
    title: 'Development',
    description: 'We build scalable applications using modern technologies and best practices.'
  },
  {
    icon: "🚀",
    title: 'Launch',
    description: 'We ensure a smooth deployment and provide ongoing support after launch.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Services we offer</h2>
          <p className="text-gray-600">
            We provide end-to-end solutions for businesses looking to build innovative digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
