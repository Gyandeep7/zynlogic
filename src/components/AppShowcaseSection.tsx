import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const apps = [
  {
    title: 'Mobile App Design Trends',
    description: 'Discover the latest design trends in mobile application development.',
    images: ['/src/images/p1.jpg'],
    color: 'bg-purple-100'
  },
  {
    title: 'Web App Design Trends',
    description: 'Explore modern web application design patterns and best practices.',
    images: ['/src/images/webapp.jpg'],
    color: 'bg-blue-100'
  },
  {
    title: 'UI/UX Design Trends',
    description: 'Learn about user interface and experience design techniques.',
    images: ['/src/images/uiuxl.png'],
    color: 'bg-pink-100'
  },
  {
    title: 'Medical Coding Solutions',
    description: 'Streamline healthcare billing with advanced medical coding applications and tools.',
    images: ['/src/images/medi2.png'],
    color: 'bg-green-100'
  },
  {
    title: 'Cybersecurity Platforms',
    description: 'Protect your digital assets with enterprise-grade cybersecurity solutions and monitoring tools.',
    images: ['/src/images/cyber.jpg'],
    color: 'bg-blue-50'
  }
];

const AppShowcaseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="space-y-16">
          {apps.map((app, index) => (
            <div key={index} className={`rounded-3xl ${app.color} p-8 grid md:grid-cols-2 gap-8 items-center`}>
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold">{app.title}</h3>
                <p className="text-gray-700">{app.description}</p>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="flex gap-2">
                  {app.images.map((img, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={img} 
                      alt={app.title} 
                      className="rounded-lg shadow-xl max-w-full h-auto"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
