'use server';

/**
 * @fileOverview Optimizes website text for SEO using GenAI.
 *
 * - optimizeSEOText - A function that optimizes the given text using SEO-friendly keywords.
 * - OptimizeSEOTextInput - The input type for the optimizeSEOText function.
 * - OptimizeSEOTextOutput - The return type for the optimizeSEOText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeSEOTextInputSchema = z.object({
  text: z.string().describe('The text to optimize for SEO.'),
  keywords: z
    .string()
    .describe('Comma separated list of keywords to include in the optimized text.'),
});
export type OptimizeSEOTextInput = z.infer<typeof OptimizeSEOTextInputSchema>;

const OptimizeSEOTextOutputSchema = z.object({
  optimizedText: z.string().describe('The SEO-optimized text.'),
});
export type OptimizeSEOTextOutput = z.infer<typeof OptimizeSEOTextOutputSchema>;

export async function optimizeSEOText(input: OptimizeSEOTextInput): Promise<OptimizeSEOTextOutput> {
  return optimizeSEOTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeSEOTextPrompt',
  input: {schema: OptimizeSEOTextInputSchema},
  output: {schema: OptimizeSEOTextOutputSchema},
  prompt: `You are an SEO expert. Optimize the following text to include the given keywords.

Text: {{{text}}}

Keywords: {{{keywords}}}

Optimized Text:`,
});

const optimizeSEOTextFlow = ai.defineFlow(
  {
    name: 'optimizeSEOTextFlow',
    inputSchema: OptimizeSEOTextInputSchema,
    outputSchema: OptimizeSEOTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
