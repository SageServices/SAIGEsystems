import { socialMediaServices } from './social-media';
import { virtualAssistantServices } from './virtual-assistants';
import { integrationServices } from './integrations';
import { aiInfrastructureServices } from './ai-infrastructure';

export const serviceCategories = [
  socialMediaServices,
  virtualAssistantServices,
  integrationServices,
  aiInfrastructureServices
];

export * from './social-media';
export * from './virtual-assistants';
export * from './integrations';
export * from './ai-infrastructure';