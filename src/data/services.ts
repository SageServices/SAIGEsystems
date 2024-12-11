import {
  Bot,
  MessageCircle,
  Headphones,
  Calendar,
  Puzzle,
  HardDrive,
  Share2,
  PenTool,
  Megaphone,
  BrainCircuit,
  MessageSquare,
  HelpCircle,
  Phone,
  Clock,
  Network,
  Database,
  Bot as AIBot,
  Mail,
  Calendar as CalendarIcon,
  Settings,
  Cpu,
  HardDrive as Storage
} from 'lucide-react';

export const serviceCategories = [
  {
    title: 'Social Media Automation',
    description: 'Complete AI-driven social media management and automation',
    services: [
      {
        title: 'Self-Running Social Media',
        description: 'Fully automated social media management system',
        icon: Share2,
        features: [
          'Automated content scheduling',
          'Cross-platform posting',
          'Analytics and reporting',
          'Audience engagement tracking'
        ]
      },
      {
        title: 'Content Generation Engine',
        description: 'AI-powered content creation system',
        icon: PenTool,
        features: [
          'Automated post writing',
          'Image generation',
          'Video content creation',
          'Multi-format content adaptation'
        ]
      },
      {
        title: 'Social Media Engagement',
        description: 'Comprehensive social media interaction management',
        icon: MessageSquare,
        features: [
          'Automated comment responses',
          'DM management system',
          'Engagement pattern analysis',
          'Custom response templates'
        ]
      }
    ]
  },
  {
    title: 'Virtual Assistant Solutions',
    description: 'Comprehensive AI-powered assistance systems',
    services: [
      {
        title: 'Website Tour Guide',
        description: 'Interactive AI-powered website navigation assistance',
        icon: HelpCircle,
        features: [
          'Guided website tours',
          'Interactive help system',
          'Context-aware assistance',
          'User behavior analysis'
        ]
      },
      {
        title: 'Voice Communication System',
        description: 'Advanced voice-based interaction system',
        icon: Phone,
        features: [
          'Inbound call handling',
          'Outbound call automation',
          'Voice recognition',
          'Natural language processing'
        ]
      },
      {
        title: 'Scheduling Assistant',
        description: 'Intelligent appointment and schedule management',
        icon: Clock,
        features: [
          'Automated scheduling',
          'Smart rescheduling',
          'Calendar optimization',
          'Conflict resolution'
        ]
      }
    ]
  },
  {
    title: 'Technical Infrastructure',
    description: 'Advanced AI implementation and integration solutions',
    services: [
      {
        title: 'Platform Integrations',
        description: 'Comprehensive integration solutions',
        icon: Network,
        features: [
          'Multi-platform connectivity',
          'Custom API development',
          'Data synchronization',
          'Workflow automation'
        ]
      },
      {
        title: 'Local LLM Deployment',
        description: 'On-premise language model implementation',
        icon: Database,
        features: [
          'Local model installation',
          'Performance optimization',
          'Security hardening',
          'Custom model training'
        ]
      },
      {
        title: 'AI System Architecture',
        description: 'Custom AI infrastructure development',
        icon: BrainCircuit,
        features: [
          'System design',
          'Infrastructure setup',
          'Performance monitoring',
          'Scalability planning'
        ]
      }
    ]
  },
  {
    title: 'Specialized Virtual Assistants',
    description: 'Purpose-built AI assistants for specific tasks',
    services: [
      {
        title: 'Voice Agent System',
        description: 'Advanced voice-based communication system',
        icon: Headphones,
        features: [
          'Inbound call management',
          'Outbound call automation',
          'Natural voice interaction',
          'Multi-language support'
        ]
      },
      {
        title: 'Rescheduling Service',
        description: 'Intelligent appointment management system',
        icon: CalendarIcon,
        features: [
          'Smart scheduling algorithms',
          'Conflict resolution',
          'Multi-timezone support',
          'Integration with popular calendar systems'
        ]
      },
      {
        title: 'Custom AI Integration',
        description: 'Tailored AI solutions for specific needs',
        icon: Puzzle,
        features: [
          'Custom workflow automation',
          'API integration',
          'Business process optimization',
          'Scalable solutions'
        ]
      }
    ]
  },
  {
    title: 'Advanced AI Infrastructure',
    description: 'Enterprise-grade AI implementation solutions',
    services: [
      {
        title: 'Local LLM Installation',
        description: 'On-premise AI model deployment',
        icon: Storage,
        features: [
          'Secure local installation',
          'Performance optimization',
          'Custom model training',
          'Resource management'
        ]
      },
      {
        title: 'Device Integration',
        description: 'Seamless AI integration with local devices',
        icon: Cpu,
        features: [
          'Hardware optimization',
          'Cross-device compatibility',
          'Resource monitoring',
          'Performance tuning'
        ]
      },
      {
        title: 'System Configuration',
        description: 'Comprehensive system setup and maintenance',
        icon: Settings,
        features: [
          'Initial setup and configuration',
          'System optimization',
          'Regular maintenance',
          'Performance monitoring'
        ]
      }
    ]
  }
];