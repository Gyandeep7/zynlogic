
import React from 'react';

const clients = [
  { name: 'Client 1', logo: 'https://via.placeholder.com/100x40' },
  { name: 'Client 2', logo: 'https://via.placeholder.com/100x40' },
  { name: 'Client 3', logo: 'https://via.placeholder.com/100x40' },
  { name: 'Client 4', logo: 'https://via.placeholder.com/100x40' },
  { name: 'Client 5', logo: 'https://via.placeholder.com/100x40' },
  { name: 'Client 6', logo: 'https://via.placeholder.com/100x40' },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <h3 className="text-center text-lg font-medium text-gray-700 mb-8">Trusted by top companies</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src={client.logo} alt={client.name} className="h-8 md:h-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
