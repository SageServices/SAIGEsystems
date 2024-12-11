import { HelpCircle, Headphones, Calendar, Clock } from 'lucide-react';
import { ServiceCategory } from '../../types/services';

export const virtualAssistantServices: ServiceCategory = {
  title: 'Virtual Assistant Solutions',
  description: 'Comprehensive AI-powered assistance systems',
  services: [
    {
      title: 'Website Tour Guide',
      description: 'Interactive AI-powered website navigation assistance',
      icon: HelpCircle,
      features: [
        'Contextual help system',
        'Interactive tutorials',
        'User behavior analysis',
        'Personalized guidance',
        'Multi-language support'
      ]
    },
    {
      title: 'Voice Communication System',
      description: 'Advanced voice-based interaction system',
      icon: Headphones,
      features: [
        'Natural language processing',
        'Multi-language support',
        'Voice recognition',
        'Call routing and management',
        'Real-time transcription'
      ]
    },
    {
      title: 'Smart Scheduling Assistant',
      description: 'Intelligent appointment and calendar management',
      icon: Clock,
      features: [
        'Automated scheduling',
        'Smart rescheduling',
        'Multi-timezone support',
        'Calendar integration',
        'Conflict resolution'
      ]
    }
  ]
};