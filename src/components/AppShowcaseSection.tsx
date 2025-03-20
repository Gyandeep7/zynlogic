
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const apps = [
  {
    title: 'Mobile App Design',
    description: 'Discover the latest design trends in mobile application development.',
    images: ['/lovable-uploads/84ed0c89-8bcf-4a04-b523-f3495d257191.png'],
    color: 'bg-purple-100'
  },
  {
    title: 'Web App Design',
    description: 'Explore modern web application design patterns and best practices.',
    images: ['/lovable-uploads/323fe03e-cc5b-4f10-b842-4fe839f3f201.png'],
    color: 'bg-blue-100'
  },
  {
    title: 'UI/UX Design',
    description: 'Learn about user interface and experience design techniques.',
    images: ['https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80'],
    color: 'bg-pink-100'
  },
  {
    title: 'Medical Coding Solutions',
    description: 'Streamline healthcare billing with advanced medical coding applications and tools.',
    images: ['https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&q=80'],
    color: 'bg-green-100'
  },
  {
    title: 'Cybersecurity Platforms',
    description: 'Protect your digital assets with enterprise-grade cybersecurity solutions and monitoring tools.',
    images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80'],
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
