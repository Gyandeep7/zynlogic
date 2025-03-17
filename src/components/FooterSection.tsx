
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-darkBlue text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              Soft<span className="text-softBlue">House</span>
            </h3>
            <p className="text-white/80">
              We build software solutions that solve real-world problems and drive business growth.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/80 hover:text-softBlue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-softBlue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-softBlue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-softBlue">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-white">Software Development</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white">Mobile App Development</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white">Web Development</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} SoftHouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
