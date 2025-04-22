"use client";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { fetchAuthSession } from "@aws-amplify/auth"; 
import { uploadData } from "aws-amplify/storage"; // Amplify Gen2 v6+ import
import outputs from "../../../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";
import { client } from "@/models"; // Updated import
import { createExclusiveContent } from "@/mutations";
import { GraphQLResult } from "@aws-amplify/api";
import { listExclusiveContents } from "@/queries";
import { updateExclusiveContent } from "@/mutations";
import ProfileHeaderEditor from "../../../components/ProfileHeaderEditor";
import AdminGalleryPanel from "../../../components/AdminGalleryPanel";

Amplify.configure(outputs);

export default function AdminDashboard() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const session = await fetchAuthSession();
        const groups = session.tokens?.accessToken?.payload["cognito:groups"];

        if (Array.isArray(groups) && groups.includes("Admin")) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    if (authStatus === "authenticated") {
      fetchGroups();
    }
  }, [authStatus, isAdmin]);

  // Stats
  const [subscribers, setSubscribers] = useState(0); 

  // Upload
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [category, setCategory] = useState("music");

  // Early return for non-admin users
  if (authStatus === "unauthenticated" || !isAdmin) {
    return (
      <div className="text-white text-center mt-10">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="mt-2">You do not have permission to view this page.</p>
      </div>
    );
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [contentUpload, setContentUpload] = useState<File | null>(null);
  const [contentUploadStatus, setContentUploadStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [exclusiveList, setExclusiveList] = useState<any[]>([]);
  const [editForms, setEditForms] = useState<Record<string, {
    title: string;
    description: string;
    releaseDate: string;
    mediaUrl?: string;
  }>>({});
  const [creating, setCreating] = useState(false);

  const fetchStats = async () => {
    try {
      // Page view tracking is no longer used. This section is intentionally left blank.
    } catch (error) {
      console.error("Error fetching stats:", error);
      setErrorMessage("Failed to fetch site statistics. Please try again later.");
    }
  };
  // Handler to update existing exclusive content items
  const handleUpdateExclusive = async (id: string) => {
    const form = editForms[id];
    try {
      await client.graphql({
        query: updateExclusiveContent,
        variables: { input: { id, ...form } },
      });
      alert("Exclusive content updated!");
      // Refresh the list after update
      const result = await client.graphql({ query: listExclusiveContents });
      if ("data" in result) {
        setExclusiveList(result.data?.listExclusiveContents?.items || []);
      } else {
        console.error("Unexpected result type:", result);
      }
    } catch (error) {
      console.error(error);
      alert("Update failed. Check console for details.");
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;
    setUploadStatus("Uploading...");
    try {
      const filePath = `uploads/${category}/${file.name}`;
      await uploadData({
      path: filePath,
        data: file,
        options: {
          contentType: file.type,
        },
      });
      setUploadStatus("Upload successful!");
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("Upload failed. Please try again.");
      setErrorMessage(`File upload failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  const handleCreateExclusiveContent = async () => {
    setCreating(true);
    if (!title || !releaseDate) {
      alert("Please fill out title and release date.");
      setCreating(false);
      return;
    }

    let uploadedContentUrl = "";

    if (contentUpload) {
      try {
        const filePath = `uploads/exclusive/${contentUpload.name}`;
        await uploadData({
        path: filePath,
          data: contentUpload,
          options: {
            contentType: contentUpload.type,
          },
        });
        uploadedContentUrl = `https://${outputs.storage.bucket_name}.s3.${outputs.storage.aws_region}.amazonaws.com/public/${filePath}`;
        setContentUploadStatus("Upload successful!");
      } catch (error) {
        console.error("Failed uploading content media", error);
        setContentUploadStatus("Upload failed.");
      }
    }

    try {
      await client.graphql({
        query: createExclusiveContent,
        variables: {
          input: {
            title,
            description,
            releaseDate,
            mediaUrl: uploadedContentUrl,
          }
        }
      });
      alert("Exclusive content created!");
      setTitle("");
      setDescription("");
      setReleaseDate("");
      setContentUpload(null);
      setCreating(false);
    } catch (error) {
      console.error("Error creating exclusive content", error);
      alert("Failed to create exclusive content.");
      setCreating(false);
    }
  };

  return (
    <section>
      <h2>Welcome, Admin!</h2>

      {/* Site Analytics */}
      <div className="analytics-section">
        <h3>Site Analytics</h3>
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
          onChange={e => setTitle(e.target.value)}
          className="inputField"
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
        <button
          onClick={handleCreateExclusiveContent}
          disabled={creating}
          style={{ marginTop: "1rem" }}>
          Publish Exclusive Content
        </button>

        {contentUploadStatus && <p>{contentUploadStatus}</p>}
      </div>
      {/* Manage Exclusive Content */}
      {isAdmin && exclusiveList.length > 0 && (
        <div className="card mt-8 p-6">
          <h3 className="text-lg font-semibold mb-4">Manage Exclusive Content</h3>
          {exclusiveList.map(item => (
            <div key={item.id} className="mb-6">
              <h4 className="font-medium mb-2">Editing: {item.title}</h4>
              <input
                type="text"
                value={editForms[item.id]?.title}
                onChange={e =>
                  setEditForms(prev => ({
                    ...prev,
                    [item.id]: { ...prev[item.id], title: e.target.value }
                  }))
                }
                placeholder="Title"
                className="inputField mb-2 w-full"
              />
              <textarea
                value={editForms[item.id]?.description}
                onChange={e =>
                  setEditForms(prev => ({
                    ...prev,
                    [item.id]: { ...prev[item.id], description: e.target.value }
                  }))
                }
                placeholder="Description"
                className="inputField mb-2 w-full"
              />
              <input
                type="date"
                value={editForms[item.id]?.releaseDate}
                onChange={e =>
                  setEditForms(prev => ({
                    ...prev,
                    [item.id]: { ...prev[item.id], releaseDate: e.target.value }
                  }))
                }
                className="inputField mb-2"
              />
              <button
                onClick={() => handleUpdateExclusive(item.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      )}
      {isAdmin && (
        <>
          <ProfileHeaderEditor />
          <AdminGalleryPanel />
        </>
      )}
    </section>
  );
}