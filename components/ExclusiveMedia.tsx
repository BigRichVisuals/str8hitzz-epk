"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { uploadData } from "aws-amplify/storage";
import { client } from "@models";
import { listExclusiveContents } from "@/queries";
import { createExclusiveContent, deleteExclusiveContent } from "@/mutations";
import { ExclusiveContent as ECType } from "@root/API"; // Update the path to the correct location of the API module

export default function ExclusiveContent() {
  const router = useRouter();
  const { authStatus, user } = useAuthenticator((ctx) => [ctx.authStatus, ctx.user]);
  const isAdmin = user?.signInDetails?.loginId === "admin@str8hitz.com";

  const [exclusive, setExclusive] = useState<ECType[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (authStatus !== "authenticated") router.push("/login");
  }, [authStatus]);

  useEffect(() => {
    const load = async () => {
      const res = await client.graphql({ query: listExclusiveContents });
      if ("data" in res && res.data?.listExclusiveContents?.items) {
        setExclusive(res.data.listExclusiveContents.items.filter(Boolean));
      }
    };
    load();
  }, []);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const key = `exclusive/${Date.now()}.${ext}`;
      await uploadData({ path: key, data: file, options: { contentType: file.type } });
      const url = `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_S3_REGION}.amazonaws.com/public/${key}`;
      const res = await client.graphql({
        query: createExclusiveContent,
        variables: { input: { title, description, mediaUrl: url } },
      });
      if ("data" in res && res.data?.createExclusiveContent) {
        setExclusive((prev) => [...prev, res.data.createExclusiveContent]);
        setTitle(""); setDescription(""); setFile(null);
      }
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await client.graphql({ query: deleteExclusiveContent, variables: { input: { id } } });
      setExclusive((prev) => prev.filter((x) => x?.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  if (authStatus !== "authenticated") return null;

  return (
    <div className="space-y-10">
      {isAdmin && (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2 text-white">Upload Exclusive Content</h3>
          <input type="text" placeholder="Title" className="inputField w-full mb-2" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Description" className="inputField w-full mb-2" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="file" accept="image/*,video/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-3" />
          <button onClick={handleUpload} disabled={uploading || !file} className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition disabled:opacity-50">
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exclusive.map((item) => {
          const isVideo = item.mediaUrl?.endsWith(".mp4");
          return (
            <div key={item.id} className="relative group bg-white/10 rounded-lg p-2 shadow">
              {isVideo ? (
                <video controls className="w-full rounded">
                  <source src={item.mediaUrl!} type="video/mp4" />
                </video>
              ) : (
                <img src={item.mediaUrl!} alt={item.title || ""} className="w-full h-auto rounded" />
              )}
              <div className="text-white mt-2">
                <p className="font-semibold">{item.title}</p>
                {item.description && <p className="text-sm text-gray-300">{item.description}</p>}
              </div>
              {isAdmin && (
                <button onClick={() => handleDelete(item.id)} className="absolute top-2 right-2 bg-red-600 text-xs text-white px-2 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}