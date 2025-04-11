import { api } from "@aws-amplify/backend";

/**
 * API for Media Upload Metadata
 */
export const mediaUploadApi = api.graphqlApi({
  name: "MediaUploadApi",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
  schema: `
    type MediaUpload @model {
      id: ID!
      fileName: String!
      fileType: String!
      uploadedBy: String!
      uploadTimestamp: AWSDateTime!
      url: AWSURL!
    }

    type Query {
      listMediaUploads: [MediaUpload] @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }

    type Mutation {
      createMediaUpload(
        fileName: String!, 
        fileType: String!, 
        uploadedBy: String!, 
        url: AWSURL!
      ): MediaUpload @auth(rules: [{ allow: groups, groups: ["Admin"] }])
    }
  `,
});
