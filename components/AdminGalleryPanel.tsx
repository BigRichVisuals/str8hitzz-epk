"use client";

import { useState, ChangeEvent } from "react";
import { uploadData } from "aws-amplify/storage";

export default function AdminGallery() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
    setMessage(null);
  };

  const handleUpload = async () => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setMessage(null);

    try {
    // upload each file under the "gallery/" prefix in your S3 bucket
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      await uploadData({
        path: `gallery/${file.name}`,
        data: file,
        options: { contentType: file.type },
      });
    }
      setMessage("✅ Upload successful!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed. See console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="card mb-6">
      <h3 className="text-lg font-semibold mb-2">
        Admin: Upload Photo(s)
      </h3>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        disabled={uploading || !files}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition disabled:opacity-50"
      >
        {uploading ? "Uploading…" : "Upload"}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}