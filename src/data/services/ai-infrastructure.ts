import { HardDrive, Cpu, BrainCircuit } from 'lucide-react';
import { ServiceCategory } from '../../types/services';

export const aiInfrastructureServices: ServiceCategory = {
  title: 'AI Infrastructure',
  description: 'Enterprise-grade AI implementation solutions',
  services: [
    {
      title: 'Local LLM Deployment',
      description: 'On-premise language model implementation',
      icon: HardDrive,
      features: [
        'Local model installation',
        'Hardware optimization',
        'Security hardening',
        'Custom model training',
        'Performance tuning'
      ]
    },
    {
      title: 'Device Integration',
      description: 'Seamless AI integration with local devices',
      icon: Cpu,
      features: [
        'Cross-device compatibility',
        'Resource optimization',
        'Real-time processing',
        'Edge computing setup',
        'Hardware acceleration'
      ]
    },
    {
      title: 'AI System Architecture',
      description: 'Custom AI infrastructure development',
      icon: BrainCircuit,
      features: [
        'System design',
        'Scalability planning',
        'Infrastructure setup',
        'Performance monitoring',
        'Resource management'
      ]
    }
  ]
};