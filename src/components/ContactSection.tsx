
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: <Phone className="h-5 w-5 text-purple-600" />,
    title: 'Call us',
    description: '+1 (555) 123-4567',
    color: 'bg-orange-100'
  },
  {
    icon: <Mail className="h-5 w-5 text-purple-600" />,
    title: 'Email us',
    description: 'contact@softhouse.com',
    color: 'bg-blue-100'
  },
  {
    icon: <MapPin className="h-5 w-5 text-purple-600" />,
    title: 'Visit us',
    description: '123 Tech Street, Silicon Valley, CA',
    color: 'bg-green-100'
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className={`p-6 rounded-lg ${method.color} flex flex-col items-center text-center`}>
              <div className="mb-4 p-3 bg-white rounded-full">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-700">{method.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us about your project" rows={4} />
              </div>
              
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
