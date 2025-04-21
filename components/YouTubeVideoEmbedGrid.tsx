
"use client";

export default function LatestVideos() {
  const videoIds = [
    "EvViEVrtTG0", // Replace these with your actual YouTube video IDs
    "EvViEVrtTG0",
    "lFknJN8s09Y",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videoIds.map((id) => (
        <div key={id} className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={`YouTube video ${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      ))}
    </div>
  );
}