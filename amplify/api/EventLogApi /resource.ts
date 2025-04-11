import { api } from "@aws-amplify/backend";

/**
 * API for Admin Event Logs (user actions)
 */
export const eventLogApi = api.graphqlApi({
  name: "EventLogApi",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
  schema: `
    type EventLog @model {
      id: ID!
      eventType: String!
      userId: String
      timestamp: AWSDateTime!
      details: String
    }

    type Query {
      listEventLogs: [EventLog] @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }

    type Mutation {
      logEvent(
        eventType: String!, 
        userId: String, 
        details: String
      ): EventLog @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }
  `,
});
