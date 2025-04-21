"use client";
 
import { useEffect, useState, ChangeEvent } from "react";
import { client } from "@/models";
import { updateProfileLinks, createProfileLinks } from "../src/mutations";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

export default function ProfileLinksSettings() {
   const { authStatus, signOut } = useAuthenticator((context) => [context.authStatus]);
   const router = useRouter();
   
   const [youtube, setYouTube] = useState("");
   const [instagram, setInstagram] = useState("");
   const [spotify, setSpotify] = useState("");
 
   useEffect(() => {
     const fetchLinks = async () => {
       try {
         const res = await client.graphql({
           query: /* GraphQL */ `
             query GetProfileLinks($id: ID!) {
               getProfileLinks(id: $id) {
                 id
                 youtube
                 instagram
                 spotify
               }
             }
           `,
           variables: { id: "profile-links" },
         });
 
         if (!("data" in res)) return;
 
         const data = res.data?.getProfileLinks;
         if (data) {
           setYouTube(data.youtube || "");
           setInstagram(data.instagram || "");
           setSpotify(data.spotify || "");
         } else {
           // fallback: create default profile links record
           const createRes = await client.graphql({
             query: createProfileLinks,
             variables: {
               input: {
                 id: "profile-links",
                 youtube: "",
                 instagram: "",
                 spotify: "",
               },
             },
           });
           if (!("data" in createRes)) return;
           const newLinks = createRes.data?.createProfileLinks;
           setYouTube(newLinks.youtube || "");
           setInstagram(newLinks.instagram || "");
           setSpotify(newLinks.spotify || "");
         }
       } catch (err) {
         console.error("Failed to fetch profile links:", err);
       }
     };
     fetchLinks();
   }, []);
 
   const handleSave = async () => {
     try {
       await client.graphql({
         query: updateProfileLinks,
         variables: {
           input: {
             id: "profile-links", // Replace if using dynamic ID
             youtube,
             instagram,
             spotify,
           },
         },
       });
       alert("Profile links updated!");
     } catch (err) {
       console.error("Failed to update profile links:", err);
       alert("Update failed.");
     }
   };
 
   return (
     <div className="card mb-6">
       <h3 className="text-lg font-semibold mb-4">Profile Links Settings</h3>
       <div className="mb-4">
         <label className="block mb-1 font-medium">YouTube URL</label>
         <input
           type="text"
           value={youtube}
           onChange={(e) => setYouTube(e.target.value)}
           className="inputField w-full"
         />
       </div>
       <div className="mb-4">
         <label className="block mb-1 font-medium">Instagram URL</label>
         <input
           type="text"
           value={instagram}
           onChange={(e) => setInstagram(e.target.value)}
           className="inputField w-full"
         />
       </div>
       <div className="mb-4">
         <label className="block mb-1 font-medium">Spotify URL</label>
         <input
           type="text"
           value={spotify}
           onChange={(e) => setSpotify(e.target.value)}
           className="inputField w-full"
         />
       </div>
       <button
         onClick={handleSave}
         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
       >
         Save Links
       </button>
       <div className="flex gap-4 mb-6">
         <button
           onClick={() => router.push("/exclusive")}
           className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500"
         >
           View Exclusive Gallery
         </button>
         <button
           onClick={() => router.push("/thank-you")}
           className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
         >
           Go to Thank You Page
         </button>
       </div>
       <nav className="flex justify-end items-center p-4 bg-black text-white">
         <div className="relative">
           <button
             className="rounded-full bg-white text-black px-2 py-1"
             onClick={() => {
               if (authStatus === "authenticated") {
                 signOut();
               } else {
                 import("aws-amplify/auth").then(({ signInWithRedirect }) => {
                   signInWithRedirect();
                 });
               }
             }}
           >
             {authStatus === "authenticated" ? "Logout" : "Login"}
           </button>
         </div>
       </nav>
     </div>
   );
 }