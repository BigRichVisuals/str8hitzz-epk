"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { client } from "@/models";
import {
  createMusicTrack,
  updateMusicTrack,
  deleteMusicTrack,
} from "../src/mutations";
import { uploadData } from "aws-amplify/storage";
import outputs from "../amplify_outputs.json";
// Removed unused useAuthenticator import

type MusicTrack = {
  id: string;
  title: string;
  audioUrl: string;
  isExclusive: boolean;
};

export default function MusicUploadPanel({ authStatus }: { authStatus?: string }) {
  const [tracks, setTracks] = useState<MusicTrack[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newIsExclusive, setNewIsExclusive] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !newTitle) return;

    setUploading(true);
    try {
      await uploadData({
        path: `tracks/${file.name}`,
        data: file,
        options: { contentType: file.type },
      });
      const url = `https://${outputs.storage.bucket_name}.s3.${outputs.storage.aws_region}.amazonaws.com/public/tracks/${file.name}`;

      const res = await client.graphql({
        query: createMusicTrack,
        variables: {
          input: {
            title: newTitle,
            audioUrl: url,
            isExclusive: newIsExclusive,
          },
        },
      });

      if (!("data" in res)) return;
      const created = res.data?.createMusicTrack;
      if (created) {
        setTracks((prev) => [...prev, created]);
        setNewTitle("");
        setNewIsExclusive(false);
      }
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await client.graphql({
        query: deleteMusicTrack,
        variables: { input: { id } },
      });
      setTracks((prev) => prev.filter((track) => track.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="card mb-6">
      <h3 className="text-lg font-semibold mb-4">Upload Music</h3>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="inputField w-full"
        />
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            checked={newIsExclusive}
            onChange={(e) => setNewIsExclusive(e.target.checked)}
          />
          <span>Exclusive?</span>
        </label>
      </div>

      <div className="mb-4">
        <input
          type="file"
          accept="audio/*"
          onChange={handleUpload}
          disabled={uploading}
        />
      </div>

      <div>
        <h4 className="font-semibold mt-6 mb-2">Tracks</h4>
        <ul className="space-y-4">
          {tracks.map((track) => (
            <li key={track.id} className="border rounded p-3 shadow flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-medium">
                  🎵 {track.title} {track.isExclusive && <span className="text-purple-500 ml-1">(Exclusive)</span>}
                </div>
              {track.isExclusive && authStatus !== "authenticated" ? (
                <p className="mt-2 text-sm text-gray-500 italic">Subscribe to access this track.</p>
              ) : (
                <audio controls className="mt-2 w-full max-w-xs">
                  <source src={track.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
              </div>
              <button
                onClick={() => handleDelete(track.id)}
                className="text-sm text-red-500 hover:underline mt-2 sm:mt-0"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}