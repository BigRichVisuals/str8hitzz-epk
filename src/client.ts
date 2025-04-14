import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import amplifyOutputs from '../amplify_outputs.json';

Amplify.configure(amplifyOutputs);

export const client = generateClient();