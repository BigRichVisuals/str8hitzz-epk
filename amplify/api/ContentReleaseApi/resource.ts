import { api } from "@aws-amplify/backend";

/**
 * API for Content Releases (exclusive EPK, music, videos)
 */
export const contentReleaseApi = api.graphqlApi({
  name: "ContentReleaseApi",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
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
      listContentReleases: [ContentRelease] @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }

    type Mutation {
      createContentRelease(
        title: String!, 
        description: String, 
        releaseDate: AWSDateTime!, 
        mediaUrl: AWSURL!
      ): ContentRelease @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }
  `,
});
