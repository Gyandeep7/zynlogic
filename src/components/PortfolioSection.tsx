
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'ui-ux', label: 'UI/UX Design' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'dashboard', label: 'Dashboards' }
];

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern online shopping experience with seamless checkout.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['web', 'ecommerce'],
    link: '#'
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts and nutrition.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['mobile', 'ui-ux'],
    link: '#'
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'Analytics platform for monitoring financial performance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['web', 'dashboard'],
    link: '#'
  },
  {
    id: 4,
    title: 'Social Networking App',
    description: 'Connect and share with friends and communities.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['mobile', 'ui-ux'],
    link: '#'
  },
  {
    id: 5,
    title: 'Restaurant Ordering System',
    description: 'Digital menu and ordering system for restaurants.',
    image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['web', 'mobile', 'ui-ux'],
    link: '#'
  },
  {
    id: 6,
    title: 'Real Estate Marketplace',
    description: 'Platform for buying, selling, and renting properties.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    tags: ['web', 'ecommerce'],
    link: '#'
  }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeCategory));

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Latest Projects</h2>
          <p className="text-gray-600 mb-8">
            Explore our recent work and see how we've helped businesses achieve their goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeCategory === category.id 
                    ? "bg-purple-600 hover:bg-purple-700 text-white" 
                    : "border-purple-600 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    size="sm"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {categories.find(c => c.id === tag)?.label || tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Button variant="link" className="text-purple-600 p-0 h-auto">
                    Learn more
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-purple-600">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category. Please check back later!</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
