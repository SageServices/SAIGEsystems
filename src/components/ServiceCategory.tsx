import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ServiceCategory as ServiceCategoryType } from '../types/services';
import DetailedServiceCard from './DetailedServiceCard';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  category,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="mb-12">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
      >
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
          <p className="text-gray-400">{category.description}</p>
        </div>
        <ChevronDown
          className={`h-6 w-6 text-gray-400 transform transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {category.services.map((service) => (
            <DetailedServiceCard key={service.title} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCategory;