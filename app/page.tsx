 'use client';
 
import Hero from '../components/LandingHero';
import MusicPlayer from '../components/PublicMusicPlayer';
import LatestVideos from '../components/YouTubeVideoEmbedGrid';
import ExclusiveContent from '../components/ExclusiveMedia';
import AdminMusicUploadPanel from '../components/AdminMusicUploadPanel';
 
 export default function Page() {
   return (
     <div className="space-y-16">
      <Hero />
      <section id="player" className="p-6 max-w-4xl mx-auto text-white">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-8 shadow-md">
          <MusicPlayer />
        </div>
      </section>
       <section id="bio" className="p-6 max-w-4xl mx-auto text-white">
         <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-10 shadow-md">
           <h2 className="text-3xl font-bold mb-4 text-center">Bio</h2>
           <p className="text-sm sm:text-base text-gray-100 leading-relaxed text-center">
             Str8Hitzz is a visionary music producer fusing sound from South Florida with global influence.
             His work blends deep bass, melodic tones, and infectious rhythms that move crowds from coast to coast.
           </p>
         </div>
       </section>

       <section id="gallery" className="p-6 max-w-6xl mx-auto text-white">
         <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-10 shadow-md">
           <h2 className="text-2xl font-semibold mb-6 text-center">Photo Gallery</h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
             {[
               "gallery1.jpg",
               "gallery2.jpg",
               "gallery3.jpg",
               "gallery5.jpg",
               "gallery6.jpg"
             ].map((filename) => (
               <a
                 key={filename}
                 href={`/images/${filename}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block overflow-hidden rounded shadow hover:shadow-xl transition-all"
               >
                 <img
                   src={`/images/${filename}`}
                   alt={filename}
                   className="w-full h-48 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                 />
               </a>
             ))}
           </div>
         </div>
       </section>
 
       <section id="music" className="p-6 max-w-4xl mx-auto">
         {/* MusicUploadPanel is only visible when integrated with admin view */}
         <div className="hidden">
           <AdminMusicUploadPanel authStatus="authenticated" />
         </div>
       </section>
 
       <section id="videos" className="p-6 max-w-6xl mx-auto text-white">
         <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-10 shadow-md">
           <h2 className="text-2xl font-semibold mb-6 text-center">Latest Videos</h2>
           <LatestVideos />
         </div>
       </section>
 
      <section id="contact-cta" className="p-6 max-w-4xl mx-auto text-white">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-10 shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
          <p className="text-sm mb-6 text-zinc-300">
            Whether you're looking for production, collaboration, or booking — reach out and connect directly.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            📩 Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}