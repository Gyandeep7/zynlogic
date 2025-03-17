
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-darkBlue">
            Soft<span className="text-softBlue">House</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-darkGray hover:text-softBlue transition-colors">Home</a>
          <a href="#services" className="text-darkGray hover:text-softBlue transition-colors">Services</a>
          <a href="#about" className="text-darkGray hover:text-softBlue transition-colors">About</a>
          <a href="#testimonials" className="text-darkGray hover:text-softBlue transition-colors">Testimonials</a>
          <a href="#contact" className="text-darkGray hover:text-softBlue transition-colors">Contact</a>
          <Button className="btn-primary">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-darkGray p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 absolute top-16 left-0 right-0 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-darkGray hover:text-softBlue transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-darkGray hover:text-softBlue transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-darkGray hover:text-softBlue transition-colors" onClick={toggleMenu}>About</a>
            <a href="#testimonials" className="text-darkGray hover:text-softBlue transition-colors" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="text-darkGray hover:text-softBlue transition-colors" onClick={toggleMenu}>Contact</a>
            <Button className="btn-primary w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
