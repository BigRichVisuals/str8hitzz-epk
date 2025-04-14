import { Amplify } from 'aws-amplify';
import amplifyOutputs from '../amplify_outputs.json'; // Path to your generated outputs
import { createServerRunner } from '@aws-amplify/adapter-nextjs';

Amplify.configure(amplifyOutputs);

// Optional: Next.js server-side rendering support
export const { withSSRContext } = createServerRunner({
  config: amplifyOutputs
});