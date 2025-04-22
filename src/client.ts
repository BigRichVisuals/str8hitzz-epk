import { Amplify } from 'aws-amplify';
import amplifyOutputs from '../amplify_outputs.json';
import { generateClient } from 'aws-amplify/api';
import * as schema from '../schema';

Amplify.configure(amplifyOutputs);

export const client = generateClient();