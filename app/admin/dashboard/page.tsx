"use client";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, Auth } from "aws-amplify";
import { Storage } from "@aws-amplify/storage";
import { generateClient } from "aws-amplify/api";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";

Amplify.configure(outputs);

const client = generateClient();

export default function AdminDashboard() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Stats
  const [pageViews, setPageViews] = useState(0);
  const [subscribers, setSubscribers] = useState(0); // If you track subscribers later.

  // Upload
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [category, setCategory] = useState("music");

  // Create Exclusive Content
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [contentUpload, setContentUpload] = useState<File | null>(null);
  const [contentUploadStatus, setContentUploadStatus] = useState("");

  // Error handling state
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const session = await Auth.currentSession();
        const groups = session.getAccessToken().payload["cognito:groups"] || [];
        setIsAdmin(groups.includes("Admin"));
      } catch (error) {
        console.error("Error fetching groups:", error);
        setErrorMessage("Failed to fetch user groups. Please try again later.");
      }
    };

    const fetchStats = async () => {
      try {
        const viewsResult = await client.models.PageView.list();
        setPageViews(viewsResult.data?.length || 0);

        // OPTIONAL: If you later add a Subscriber model
        // const subscribersResult = await client.models.Subscriber.list();
        // setSubscribers(subscribersResult.data?.length || 0);

      } catch (error) {
        console.error("Error fetching stats:", error);
        setErrorMessage("Failed to fetch site statistics. Please try again later.");
      }
    };

    if (authStatus === "authenticated") {
      fetchGroups();
      fetchStats();
    }
  }, [authStatus]);

  if (authStatus !== "authenticated") {
    return (
      <section>
        <h2>Admin Dashboard</h2>
        <p>You must sign in to access this page.</p>
        <Authenticator />
      </section>
    );
  }

  if (!isAdmin) {
    return (
      <section>
        <h2>Access Denied</h2>
        <p>You do not have permission to view this page.</p>
      </section>
    );
  }

  const handleFileUpload = async () => {
    if (!file) return;
    setUploadStatus("Uploading...");
    try {
      const filePath = `uploads/${category}/${file.name}`;
      await Storage.put(filePath, file, {
        contentType: file.type,
      });
      setUploadStatus("Upload successful!");
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("Upload failed.");
    }
  };

  const handleCreateExclusiveContent = async () => {
    if (!title || !releaseDate) {
      alert("Please fill out title and release date.");
      return;
    }

    let uploadedContentUrl = "";

    if (contentUpload) {
      try {
        const filePath = `uploads/exclusive/${contentUpload.name}`;
        const uploadResult = await Storage.put(filePath, contentUpload, {
          contentType: contentUpload.type,
        });
        uploadedContentUrl = `https://${outputs.storage.bucket_name}.s3.${outputs.storage.aws_region}.amazonaws.com/public/${filePath}`;
        setContentUploadStatus("Upload successful!");
      } catch (error) {
        console.error("Failed uploading content media", error);
        setContentUploadStatus("Upload failed.");
      }
    }

    try {
      await client.models.ExclusiveContent.create({
        title,
        description,
        releaseDate,
        mediaUrl: uploadedContentUrl,
      });
      alert("Exclusive content created!");
      setTitle("");
      setDescription("");
      setReleaseDate("");
      setContentUpload(null);
    } catch (error) {
      console.error("Error creating exclusive content", error);
      alert("Failed to create exclusive content.");
    }
  };

  return (
    <section>
      <h2>Welcome, Admin!</h2>

      {/* Site Analytics */}
      <div className="analytics-section">
        <h3>Site Analytics</h3>
        <p><strong>Page Views:</strong> {pageViews}</p>
        <p><strong>Subscribers:</strong> {subscribers}</p> {/* Optional */}
        <p><strong>Sales:</strong> (Static for now)</p>
      </div>

      {/* Upload New Media */}
      <div className="upload-section">
        <h3>Upload New Media</h3>

        <div className="category-selector">
          <label htmlFor="category">Choose Upload Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="music">Music</option>
            <option value="images">Images</option>
            <option value="videos">Videos</option>
            <option value="documents">Documents</option>
          </select>
        </div>

        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button onClick={handleFileUpload} style={{ marginLeft: "1rem" }}>
          Upload
        </button>

        {uploadStatus && <p>{uploadStatus}</p>}
      </div>

      {/* Create Exclusive Content */}
      <div>
        <h3>Create Exclusive Content</h3>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", marginBottom: "1rem" }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
        />
        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          style={{ display: "block", marginBottom: "1rem" }}
        />
        <input
          type="file"
          onChange={(e) => setContentUpload(e.target.files?.[0] || null)}
        />
        <button onClick={handleCreateExclusiveContent} style={{ marginTop: "1rem" }}>
          Publish Exclusive Content
        </button>

        {contentUploadStatus && <p>{contentUploadStatus}</p>}
      </div>
    </section>
  );
}