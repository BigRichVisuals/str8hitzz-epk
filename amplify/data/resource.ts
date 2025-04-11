import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/**
 * Full production schema for the Str8hitz Admin Dashboard
 * Tracking Clicks, Sales, Contacts, Subscribers, Media Uploads, Content Releases, Event Logs, Page Views
 */

const schema = a.schema({
  Click: a
    .model({
      itemId: a.string(),
      timestamp: a.datetime(),
      userId: a.string().optional(),
    })
    .authorization((allow) => [
      allow.authenticated(),
      allow.guest().read(),
    ]),

  Sale: a
    .model({
      amount: a.float(),
      currency: a.string(),
      timestamp: a.datetime(),
      userId: a.string().optional(),
    })
    .authorization((allow) => [
      allow.authenticated(),
      allow.guest().read(),
    ]),

  Contact: a
    .model({
      name: a.string(),
      email: a.email(),
      message: a.string(),
      timestamp: a.datetime(),
    })
    .authorization((allow) => [
      allow.guest(),
    ]),

  Subscriber: a
    .model({
      userId: a.string(),
      email: a.email(),
      subscriptionDate: a.datetime(),
    })
    .authorization((allow) => [
      allow.authenticated(),
      allow.group("Admin").read(),
    ]),

  MediaUpload: a
    .model({
      fileName: a.string(),              // Name of uploaded file
      fileType: a.string(),              // File type (image, video, etc.)
      uploadedBy: a.string(),            // User ID of uploader
      uploadTimestamp: a.datetime(),     // When uploaded
      url: a.url(),                      // Public URL or S3 reference
    })
    .authorization((allow) => [
      allow.authenticated(),             // Only logged-in users can upload
      allow.group("Admin").read(),        // Admins can read all uploads
    ]),

  ContentRelease: a
    .model({
      title: a.string(),                 // Title of content (EP, single, press kit)
      description: a.string().optional(),// Description (optional)
      releaseDate: a.datetime(),         // Release date
      mediaUrl: a.url(),                 // URL to the exclusive content
    })
    .authorization((allow) => [
      allow.group("Admin"),              // Only Admins can create releases
      allow.guest().read(),              // Public can view released content
    ]),

  EventLog: a
    .model({
      eventType: a.string(),             // Login, Upload, Click, etc.
      userId: a.string().optional(),     // Optional: who did it
      timestamp: a.datetime(),           // When the event happened
      details: a.string().optional(),    // Extra details if needed
    })
    .authorization((allow) => [
      allow.authenticated(),
      allow.group("Admin").read(),
    ]),

  PageView: a
    .model({
      page: a.string(),                  // Page visited
      timestamp: a.datetime(),           // When visited
      userId: a.string().optional(),      // Who visited
    })
    .authorization((allow) => [
      allow.authenticated(),
      allow.guest().read(),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});