export interface ServiceCategory {
  title: string;
  description: string;
  services: Service[];
}

export interface Service {
  title: string;
  description: string;
  features?: string[];
  icon: string;
}

export interface ServiceCardProps {
  category: ServiceCategory;
  isExpanded: boolean;
  onToggle: () => void;
}