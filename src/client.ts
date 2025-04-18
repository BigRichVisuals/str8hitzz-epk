import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { generateClient } from "aws-amplify/api";
import * as schema from "../schema";

Amplify.configure(outputs);

export const client = generateClient();