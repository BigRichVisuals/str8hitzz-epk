"use client";

import { useAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { client } from "@/models"; // Updated import
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import "./../app/app.css";
import { listExclusiveContents } from "@/queries";
import { signOut } from "@aws-amplify/auth";
const Spinner = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
    <div style={{
      border: "4px solid #ccc",
      borderTop: "4px solid #333",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      animation: "spin 1s linear infinite"
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

Amplify.configure(outputs);

export default function HomePage() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const isAuthenticated = authStatus === "authenticated";

  // Fetch Exclusive Content
  const [exclusiveContent, setExclusiveContent] = useState<any[]>([]);
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    const fetchExclusiveContent = async () => {
      try {
        setLoadingContent(true);
        const result = await client.graphql({ query: listExclusiveContents });
        const items = result.data?.listExclusiveContents?.items || [];
        setExclusiveContent(items);
      } catch (error) {
        console.error("Failed to fetch exclusive content:", error);
      } finally {
        setLoadingContent(false);
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
            {loadingContent ? (
              <Spinner />
            ) : exclusiveContent.length > 0 ? (
              exclusiveContent.map((item) => (
                <div
                  key={item.id}
                  className="fade-in-item"
                  style={{
                    marginBottom: "2rem",
                    padding: "1.5rem",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    animation: "fadeIn 0.6s ease-in-out"
                  }}
                >
                  <h4 style={{ marginBottom: "0.5rem", color: "#333" }}>{item.title}</h4>
                  <p style={{ marginBottom: "0.5rem", color: "#555" }}>{item.description}</p>
                  <p style={{ fontSize: "0.9rem", color: "#777" }}>
                    <strong>Release Date:</strong> {item.releaseDate}
                  </p>
                  {item.mediaUrl && (
                    <div style={{ marginTop: "1rem" }}>
                      <a
                        href={item.mediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          padding: "0.5rem 1rem",
                          backgroundColor: "#6649AE",
                          color: "#fff",
                          borderRadius: "6px",
                          textDecoration: "none",
                          fontWeight: "bold"
                        }}
                      >
                        View Media
                      </a>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No exclusive content available yet. Check back soon!</p>
            )}
            {/* Subscription Management */}
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <button
               onClick={() => signOut()}                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginBottom: "1rem"
                }}
              >
                Sign Out
              </button>
              <br />
              <a
                href="/manage-subscription" // Replace with your actual subscription management route or link
                style={{
                  color: "#6649AE",
                  textDecoration: "underline",
                  fontSize: "0.9rem"
                }}
              >
                Manage your subscription
              </a>
            </div>
          </div>
        )}

        {!isAuthenticated && (
          <div style={{ marginTop: "1rem" }}>
            <Authenticator />
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-item {
          animation: fadeIn 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}