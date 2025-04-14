"use client";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

export default function ExclusiveContentPage() {
  const { authStatus, user } = useAuthenticator((context) => [context.authStatus, context.user]);

  if (authStatus !== "authenticated") {
    return (
      <section>
        <h2>Exclusive Content</h2>
        <p>You must sign in to access this page.</p>
        <Authenticator />
      </section>
    );
  }

  const groups = user?.signInUserSession?.accessToken?.payload["cognito:groups"] || [];
  const isAdmin = groups.includes("Admin");

  return (
    <section>
      <h2>Exclusive Content Area</h2>
      <p>Welcome, subscriber! Here’s your early access to unreleased tracks, videos, and media from Str8hitz.</p>
      <div>
        <a href="https://on.soundcloud.com/x2f9yS8fMnReyGhx5" target="_blank" rel="noopener noreferrer">
          Listen to Unreleased SoundCloud Tracks
        </a>
      </div>
      <div>
        <a href="https://youtube.com/@str8hitz808" target="_blank" rel="noopener noreferrer">
          Watch Private YouTube Releases
        </a>
      </div>

      {isAdmin && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Admin Controls</h3>
          <a href="/admin/dashboard" style={{ color: "blue", textDecoration: "underline" }}>
            Go to Admin Dashboard
          </a>
        </div>
      )}
    </section>
  );
}
