
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

const careers = [
  {
    id: 'engineering',
    name: 'Engineering',
    icon: <Briefcase className="h-5 w-5" />,
    description: 'Build the future of software alongside talented engineers.',
    positions: [
      {
        title: 'Senior Frontend Developer',
        type: 'Full-time',
        location: 'Remote / San Francisco',
        description: 'We are looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern web technologies to join our product team.'
      },
      {
        title: 'Backend Engineer',
        type: 'Full-time',
        location: 'Remote / New York',
        description: 'Join our team to build scalable, reliable backend services using Node.js, Python, and AWS infrastructure.'
      },
      {
        title: 'Mobile Developer',
        type: 'Full-time',
        location: 'Remote / London',
        description: 'Help us create beautiful, responsive mobile applications for iOS and Android using React Native and native technologies.'
      }
    ]
  },
  {
    id: 'design',
    name: 'Design',
    icon: <GraduationCap className="h-5 w-5" />,
    description: 'Create intuitive and beautiful experiences that users love.',
    positions: [
      {
        title: 'UX/UI Designer',
        type: 'Full-time',
        location: 'Remote / San Francisco',
        description: 'We are seeking a talented UX/UI Designer to create visually stunning and user-friendly interfaces for our products.'
      },
      {
        title: 'Product Designer',
        type: 'Full-time',
        location: 'Remote / Berlin',
        description: 'Work closely with product managers and engineers to design features that solve real user problems.'
      }
    ]
  },
  {
    id: 'management',
    name: 'Management',
    icon: <Users className="h-5 w-5" />,
    description: 'Lead teams to success and drive company vision.',
    positions: [
      {
        title: 'Engineering Manager',
        type: 'Full-time',
        location: 'Remote / Toronto',
        description: 'Lead a team of engineers, guide technical decisions, and help develop the careers of the engineers on your team.'
      },
      {
        title: 'Product Manager',
        type: 'Full-time',
        location: 'Remote / Sydney',
        description: 'Define product strategy, work with designers and engineers to build features, and ensure we're building the right things.'
      }
    ]
  }
];

const CareerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're looking for passionate people to join us on our mission to build exceptional software solutions.
            See where you fit in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Team collaboration" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold">Work With Us</h3>
            <p className="text-gray-600">
              At SoftHouse, we believe in creating an environment where talented people can thrive. 
              We offer competitive salaries, flexible work arrangements, continuous learning opportunities, 
              and a collaborative culture focused on innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Flexible hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Remote work options</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Professional development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Health benefits</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 md:p-8">
          <Tabs defaultValue="engineering" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {careers.map((career) => (
                <TabsTrigger key={career.id} value={career.id} className="flex gap-2 items-center">
                  {career.icon}
                  {career.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {careers.map((career) => (
              <TabsContent key={career.id} value={career.id} className="space-y-4">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{career.name} Opportunities</h3>
                  <p className="text-gray-600">{career.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {career.positions.map((position, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{position.title}</CardTitle>
                        <CardDescription>
                          <span className="block">{position.type}</span>
                          <span>{position.location}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          {position.description}
                        </p>
                        <Button variant="outline" className="w-full">
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Don't see a role that fits? We're always looking for talented people.</p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Send General Application
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
