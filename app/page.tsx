"use client";

import { useAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import "./../app/app.css";

Amplify.configure(outputs);

const client = generateClient();

export default function HomePage() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const isAuthenticated = authStatus === "authenticated";

  // Fetch Exclusive Content
  const [exclusiveContent, setExclusiveContent] = useState<any[]>([]);

  useEffect(() => {
    const fetchExclusiveContent = async () => {
      try {
        const result = await client.models.ExclusiveContent.list();
        setExclusiveContent(result.data || []);
      } catch (error) {
        console.error("Failed to fetch exclusive content:", error);
      }
    };

    if (isAuthenticated) {
      fetchExclusiveContent();
    }
  }, [isAuthenticated]);

  return (
    <section>
      <h2>Welcome to the Official Str8hitz EPK</h2>
      <p>South Florida-based music producer making international waves. Check out my latest releases, videos, and exclusive content.</p>

      {/* Public Links */}
      <div>
        <a href="https://on.soundcloud.com/x2f9yS8fMnReyGhx5" target="_blank" rel="noopener noreferrer">
          Listen on SoundCloud
        </a>
      </div>
      <div>
        <a href="https://youtube.com/@str8hitz808" target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/str8hitzz" target="_blank" rel="noopener noreferrer">
          Follow on Instagram
        </a>
      </div>

      {/* Exclusive Content Section */}
      <div style={{ marginTop: "3rem" }}>
        <h3>Exclusive Content</h3>

        {!isAuthenticated && (
          <div style={{ 
            position: "relative", 
            padding: "2rem", 
            background: "#f9f9f9", 
            filter: "blur(4px)",
            opacity: 0.7
          }}>
            <p>🔒 This content is exclusive for subscribers. Please sign in to unlock!</p>
          </div>
        )}

        {isAuthenticated && (
          <div style={{ padding: "2rem", background: "#e0ffe0" }}>
            {exclusiveContent.length > 0 ? (
              exclusiveContent.map((item) => (
                <div key={item.id} style={{ marginBottom: "2rem" }}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p><strong>Release Date:</strong> {item.releaseDate}</p>
                  {item.mediaUrl && (
                    <div style={{ marginTop: "1rem" }}>
                      <a href={item.mediaUrl} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
                        View Media
                      </a>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No exclusive content available yet. Check back soon!</p>
            )}
          </div>
        )}

        {!isAuthenticated && (
          <div style={{ marginTop: "1rem" }}>
            <Authenticator />
          </div>
        )}
      </div>
    </section>
  );
}