import React, { useState } from 'react';
import { serviceCategories } from '../data/services';
import ServiceCategory from './ServiceCategory';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <section className="py-24 bg-black" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our comprehensive suite of AI-powered solutions designed to transform your business operations
          </p>
        </div>
        
        <div className="space-y-6">
          {serviceCategories.map((category) => (
            <ServiceCategory
              key={category.title}
              category={category}
              isExpanded={expandedCategory === category.title}
              onToggle={() => toggleCategory(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;