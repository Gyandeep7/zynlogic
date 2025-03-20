
import React from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern online shopping experience with seamless checkout.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['Web', 'E-commerce']
  },
  {
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts and nutrition.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['Mobile', 'Health']
  },
  {
    title: 'Financial Dashboard',
    description: 'Analytics platform for monitoring financial performance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['Dashboard', 'Analytics']
  },
  {
    title: 'Social Networking App',
    description: 'Connect and share with friends and communities.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['Mobile', 'Social']
  }
];

const designCategories = [
  {
    title: 'Mobile App Design',
    description: 'Discover the latest innovations in mobile application development.',
    link: '#'
  },
  {
    title: 'Web App Design',
    description: 'Explore modern web application design patterns and best practices.',
    link: '#'
  },
  {
    title: 'UI/UX Design',
    description: 'Learn about user interface and experience design techniques.',
    link: '#'
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Latest Projects</h2>
          <p className="text-gray-600">
            Explore our recent work and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {designCategories.map((category, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-xl mb-2 text-purple-600">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                View Projects
              </Button>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <Button variant="link" className="text-purple-600 p-0 h-auto">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
