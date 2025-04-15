import { Amplify } from 'aws-amplify';
import amplifyOutputs from '../amplify_outputs.json'; // Ensure the path is correct
// Removed 'withSSRContext' as it is not exported by 'aws-amplify'

Amplify.configure(amplifyOutputs);

// Removed 'withSSRContext' export as it is not available