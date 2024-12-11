import { Share2, PenTool, MessageSquare, Bot } from 'lucide-react';
import { ServiceCategory } from '../../types/services';

export const socialMediaServices: ServiceCategory = {
  title: 'Social Media Automation',
  description: 'Complete AI-driven social media management and automation',
  services: [
    {
      title: 'Self-Running Social Media',
      description: 'Fully automated social media management system',
      icon: Share2,
      features: [
        'Multi-platform content management',
        'Automated posting schedules',
        'Real-time engagement monitoring',
        'Performance analytics dashboard',
        'Audience insights and targeting'
      ]
    },
    {
      title: 'Content Generation Engine',
      description: 'AI-powered content creation system',
      icon: PenTool,
      features: [
        'AI-driven content writing',
        'Image and video generation',
        'Multi-format content adaptation',
        'Brand voice consistency',
        'SEO optimization'
      ]
    },
    {
      title: 'Engagement Automation',
      description: 'Intelligent social media interaction system',
      icon: MessageSquare,
      features: [
        'Automated comment responses',
        'Smart DM management',
        'Sentiment analysis',
        'Custom response templates',
        '24/7 engagement monitoring'
      ]
    }
  ]
};