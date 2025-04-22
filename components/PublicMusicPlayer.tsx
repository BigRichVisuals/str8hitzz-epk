

 "use client";
 
 import { useEffect, useState, useRef } from "react";
 import { fetchAuthSession } from 'aws-amplify/auth';
 import { client } from "@models";
 import { listMusicTracks } from "@/queries";
 import { useAuthenticator } from "@aws-amplify/ui-react";
 
 type Track = {
   id: string;
   title: string;
   audioUrl: string;
   isExclusive: boolean;
 };
 
 export default function MusicPlayer() {
   let authStatus: string = "unauthenticated";
   try {
     const result = useAuthenticator((context) => [context.authStatus]);
     authStatus = result.authStatus;
   } catch {
     // fallback for unauthenticated or missing provider context
   }
   const [tracks, setTracks] = useState<Track[]>([]);
   const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
   const audioRef = useRef<HTMLAudioElement | null>(null);
 
   useEffect(() => {
     const loadTracks = async () => {
       try {
         const session = await fetchAuthSession();
         const credentials = session.credentials;
 
         if (!credentials) {
           console.warn("No AWS credentials available.");
           return;
         }
 
         const res = await client.graphql({ query: listMusicTracks });
         if ("data" in res && res.data?.listMusicTracks?.items) {
           setTracks(res.data.listMusicTracks.items.filter(Boolean));
         }
       } catch (error) {
         console.error("Error loading tracks:", error);
       }
     };
 
     loadTracks();
   }, []);
 
   const playTrack = (track: Track) => {
     setCurrentTrack(track);
     setTimeout(() => {
       audioRef.current?.play();
     }, 100);
   };
 
   return (
     <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white max-w-3xl mx-auto">
       <h3 className="text-xl font-bold mb-4">🎧 Music Player</h3>
       <ul className="space-y-3 mb-4">
         {tracks.map((track) => (
           <li
             key={track.id}
             className={`cursor-pointer p-2 rounded hover:bg-white/20 ${
               currentTrack?.id === track.id ? "bg-purple-600" : "bg-white/5"
             }`}
             onClick={() => playTrack(track)}
           >
             <div className="flex justify-between items-center">
               <span>
                 🎵 {track.title}{" "}
                 {track.isExclusive && (
                   <span className="text-purple-300 ml-1">(Exclusive)</span>
                 )}
               </span>
               {track.isExclusive && authStatus !== "authenticated" && (
                 <span className="text-xs text-red-400 italic">Locked</span>
               )}
             </div>
           </li>
         ))}
       </ul>
       
       <div className="mt-8">
         <h4 className="text-lg font-semibold mb-2">Featured Track</h4>
         <iframe
           width="100%"
           height="166"
           scrolling="no"
           frameBorder="no"
           allow="autoplay"
           className="rounded"
           src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/str8hitz/cook-1&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
         ></iframe>
       </div>
       
       {currentTrack && (!currentTrack.isExclusive || authStatus === "authenticated") && (
         <audio ref={audioRef} controls className="w-full">
           <source src={currentTrack.audioUrl} type="audio/mpeg" />
           Your browser does not support the audio element.
         </audio>
       )}
 
       {currentTrack?.isExclusive && authStatus !== "authenticated" && (
         <p className="text-sm text-yellow-400 mt-2">
           Please sign in to listen to exclusive content.
         </p>
       )}
     </div>
   );
 }