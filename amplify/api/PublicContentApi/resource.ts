import { api } from "@aws-amplify/backend";

/**
 * API for Public Content Access (EPK, Exclusive Drops)
 */
export const publicContentApi = api.graphqlApi({
  name: "PublicContentApi",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
  },
  schema: `
    type ContentRelease @model {
      id: ID!
      title: String!
      description: String
      releaseDate: AWSDateTime!
      mediaUrl: AWSURL!
    }

    type Query {
      listPublicContentReleases: [ContentRelease]
    }
  `,
});
