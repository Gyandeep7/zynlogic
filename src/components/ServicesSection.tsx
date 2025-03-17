
import React from 'react';
import { Code, Smartphone, Globe, Layout, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-softBlue" />,
    title: 'Custom Software Development',
    description: 'We build tailor-made software solutions designed specifically for your unique business needs.'
  },
  {
    icon: <Smartphone className="h-10 w-10 text-softBlue" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
  },
  {
    icon: <Globe className="h-10 w-10 text-softBlue" />,
    title: 'Web Development',
    description: 'Responsive, high-performance websites and web applications that engage your audience.'
  },
  {
    icon: <Layout className="h-10 w-10 text-softBlue" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging, and efficient user experiences.'
  },
  {
    icon: <Database className="h-10 w-10 text-softBlue" />,
    title: 'Cloud Solutions',
    description: 'Scalable, secure, and reliable cloud infrastructure and migration services.'
  },
  {
    icon: <Shield className="h-10 w-10 text-softBlue" />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security services and solutions.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-darkGray/80">
            We provide end-to-end solutions for businesses looking to build innovative software products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-4 p-3 bg-softGray rounded-lg inline-block group-hover:bg-softBlue/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-darkGray/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
