import React from 'react';
import { Check } from 'lucide-react';
import { Service } from '../types/services';

interface DetailedServiceCardProps {
  service: Service;
}

const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300">
      <div className="mb-4">
        <Icon className="h-12 w-12 text-blue-400" />
      </div>
      
      <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
      <p className="text-gray-400 mb-4">{service.description}</p>
      
      {service.features && (
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start space-x-2">
              <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DetailedServiceCard;