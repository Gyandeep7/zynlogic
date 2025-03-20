import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories?: string[];
  tags: string[];
  link: string;
  buttonText?: string;
}

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'ui-ux', label: 'UI/UX Design' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'dashboard', label: 'Dashboards' }
];

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern online shopping experience featuring Health & Beauty, Gadgets & Electronics, Pet Essentials, and Home Essentials.',
    image: '/src/images/p1.jpg',
    categories: ['Web Development', 'E-commerce'],
    tags: ['web', 'ecommerce'],
    link: '#',
    buttonText: 'View Details'
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts and nutrition.',
    image: '/src/images/h&f.avif',
    categories: ['Mobile App Development', 'UI/UX Design'],
    tags: ['mobile', 'ui-ux'],
    link: '#',
    buttonText: 'Learn more'
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'Analytics platform for monitoring financial performance.',
    image: '/src/images/fd.jpeg',
    categories: ['Web Development', 'Dashboards'],
    tags: ['web', 'dashboard'],
    link: '#',
    buttonText: 'Learn more'
  }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeCategory));

  return (
    <section id="portfolio" className="py-6 md:py-12 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-3">Our Latest Projects</h2>
          <p className="text-gray-600 mb-6">
            Explore our recent work and see how we've helped businesses achieve their goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-5 py-1.5 text-sm ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories?.map((cat, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-purple-100 text-purple-600 px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  {project.buttonText || 'Learn more'} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
