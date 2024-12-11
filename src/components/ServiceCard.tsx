import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="group p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
      <div className="mb-4 relative">
        <Icon className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;