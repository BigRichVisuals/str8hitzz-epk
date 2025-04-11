import { api } from "@aws-amplify/backend";

/**
 * Create a public GraphQL API for Admin Dashboard
 * Secure with authentication for private queries
 */

export const adminApi = api.graphqlApi({
  name: "AdminDashboardApi",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
  schema: `
    type Click @model {
      id: ID!
      itemId: String!
      timestamp: AWSDateTime!
      userId: String
    }

    type Sale @model {
      id: ID!
      amount: Float!
      currency: String!
      timestamp: AWSDateTime!
      userId: String
    }

    type Contact @model {
      id: ID!
      name: String!
      email: AWSEmail!
      message: String!
      timestamp: AWSDateTime!
    }

    type Subscriber @model {
      id: ID!
      userId: String!
      email: AWSEmail!
      subscriptionDate: AWSDateTime!
    }

    type Query {
      listClicks: [Click] @auth(rules: [{ allow: groups, groups: ["Admin"] }])
      listSales: [Sale] @auth(rules: [{ allow: groups, groups: ["Admin"] }])
      listContacts: [Contact] @auth(rules: [{ allow: groups, groups: ["Admin"] }])
      listSubscribers: [Subscriber] @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }
  `,
});