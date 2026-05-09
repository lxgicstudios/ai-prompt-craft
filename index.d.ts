/**
 * AI Prompt Craft - Transform basic prompts into elite structured prompts
 * Using Anthropic's 10-step framework for prompt engineering
 */

export interface PromptCraftConfig {
  framework: 'anthropic' | 'openai' | 'custom';
  temperature?: number;
  maxTokens?: number;
}

export interface PromptTemplate {
  id: string;
  name: string;
  template: string;
  variables: string[];
  category: string;
}

export interface PromptAnalysis {
  score: number;
  suggestions: string[];
  issues: string[];
  improved: string;
}

export interface PromptStep {
  step: number;
  title: string;
  description: string;
  example?: string;
}

export declare const AnthropicFramework: {
  steps: PromptStep[];
  template: (basePrompt: string) => string;
};

export declare function craftPrompt(
  basePrompt: string, 
  config?: PromptCraftConfig
): Promise<string>;

export declare function analyzePrompt(prompt: string): Promise<PromptAnalysis>;

export declare function loadTemplate(id: string): Promise<PromptTemplate>;
export declare function saveTemplate(template: PromptTemplate): Promise<void>;
export declare function listTemplates(category?: string): Promise<PromptTemplate[]>;

export declare function optimizePrompt(
  prompt: string,
  targetScore?: number
): Promise<{ optimized: string; score: number }>;

export { craftPrompt as default };