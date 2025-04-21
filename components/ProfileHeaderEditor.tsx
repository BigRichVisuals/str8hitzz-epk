"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { uploadData } from "aws-amplify/storage";
import { client } from "@/models";
import outputs from "../amplify_outputs.json"; // Added import for outputs
import { getProfileHeader } from "../src/queries";
import { updateProfileHeader } from "../src/mutations";

export default function ProfileHeaderSettings() {
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const [subHeadline, setSubHeadline] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);

  // Load existing values
  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await client.graphql({ query: getProfileHeader });
        if (!("data" in res)) return;
        const data = res.data?.getProfileHeader;
        if (data) {
          setLogoUrl(data.logoUrl || "");
          setHeadline(data.headline || "");
          setSubHeadline(data.subHeadline || "");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchHeader();
  }, []);

  // Handle logo file uploads
  const handleLogoUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      await uploadData({
        path: `profile-header/${file.name}`,
        data: file,
        options: { contentType: file.type },
      });
      const url = `https://${outputs.storage.bucket_name}.s3.${outputs.storage.aws_region}.amazonaws.com/public/profile-header/${file.name}`;
      setLogoUrl(url);
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  // Save updates back to GraphQL
  const handleSave = async () => {
    try {
      await client.graphql({
        query: updateProfileHeader,
        variables: {
          input: {
            id: "profile-header", // placeholder ID; replace with dynamic value if needed
            logoUrl,
            headline,
            subHeadline,
          },
        },
      });
      alert("Profile header updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile header.");
    }
  };

  return (
    <div className="card mb-6">
      <h3 className="text-lg font-semibold mb-4">Profile Header Settings</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Logo</label>
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo Preview"
            className="w-24 h-24 object-cover rounded mb-2"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoUpload}
          disabled={uploading}
          className="inputField"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Headline</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="inputField w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Sub-headline</label>
        <textarea
          value={subHeadline}
          onChange={(e) => setSubHeadline(e.target.value)}
          className="inputField w-full"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
      >
        Save Settings
      </button>
    </div>
  );
}