import { api } from "@aws-amplify/backend";

/**
 * API for Tracking Page Views
 */

export const pageViewApi = api.graphqlApi({
  name: "PageViewApi",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
  schema: `
    type PageView @model {
      id: ID!
      page: String!
      timestamp: AWSDateTime!
      userId: String
    }

    type Query {
      listPageViews: [PageView] @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }

    type Mutation {
      createPageView(
        page: String!, 
        timestamp: AWSDateTime!, 
        userId: String
      ): PageView @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }
  `,
});