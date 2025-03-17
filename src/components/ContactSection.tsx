
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-darkBlue text-white">
      <div className="container-custom grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-white/80">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-softBlue/20 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-softBlue" />
              </div>
              <span>+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-softBlue/20 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-softBlue" />
              </div>
              <span>contact@softhouse.com</span>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-softBlue/20 flex items-center justify-center mr-4">
                <MapPin className="h-5 w-5 text-softBlue" />
              </div>
              <span>123 Technology Ave, Silicon Valley, CA 94043</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white text-darkGray p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
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
            
            <Button className="btn-primary w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
