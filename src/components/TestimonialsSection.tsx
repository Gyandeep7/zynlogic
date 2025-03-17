
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with SoftHouse was a game-changer for our business. They delivered a custom software solution that streamlined our operations and increased our productivity by 40%.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "The mobile app developed by SoftHouse exceeded our expectations. Their team was professional, responsive, and delivered the project on time and within budget.",
    author: "Michael Chen",
    position: "CTO, MobiConnect",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "SoftHouse helped us transform our outdated systems into a modern, cloud-based solution. Their expertise and attention to detail were impressive.",
    author: "Emily Rodriguez",
    position: "Operations Director, CloudSys",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5
  },
  {
    id: 4,
    content: "Their cybersecurity solutions gave us peace of mind. The team at SoftHouse is knowledgeable, thorough, and truly cares about protecting their clients.",
    author: "David Kim",
    position: "Security Lead, SecureNet",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 2;
  const maxIndex = testimonials.length - visibleTestimonials;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-darkGray/80">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] p-6 shadow-md">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-darkGray mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-darkGray/80">{testimonial.position}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-softBlue text-softBlue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext} 
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full border border-softBlue text-softBlue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
