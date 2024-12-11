import { Network, Puzzle, Database } from 'lucide-react';
import { ServiceCategory } from '../../types/services';

export const integrationServices: ServiceCategory = {
  title: 'Platform Integrations',
  description: 'Seamless integration solutions for your existing systems',
  services: [
    {
      title: 'Custom API Integration',
      description: 'Tailored API development and integration services',
      icon: Network,
      features: [
        'Custom API development',
        'Third-party integrations',
        'Data synchronization',
        'Real-time updates',
        'Secure data transfer'
      ]
    },
    {
      title: 'Workflow Automation',
      description: 'End-to-end business process automation',
      icon: Puzzle,
      features: [
        'Process optimization',
        'Custom workflow design',
        'Integration with existing tools',
        'Automated reporting',
        'Performance monitoring'
      ]
    },
    {
      title: 'Data Pipeline Integration',
      description: 'Seamless data flow between systems',
      icon: Database,
      features: [
        'ETL process automation',
        'Real-time data sync',
        'Data validation',
        'Error handling',
        'Performance optimization'
      ]
    }
  ]
};