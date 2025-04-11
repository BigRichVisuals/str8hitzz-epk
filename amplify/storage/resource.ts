import { storage } from "@aws-amplify/backend";

/**
 * Create an S3 bucket for media uploads
 * ONLY Admin group members can upload
 * Public (guests) can read/download only
 */

export const mediaStorage = storage.createS3Bucket({
  name: "str8hitzz-epk-media",
  accessControl: {
    groupAccess: {
      Admin: ["read", "write"],   // Only Admin group users can upload (write) and read
    },
    guest: ["read"],              // Guests can only read (view/download)
  },
});