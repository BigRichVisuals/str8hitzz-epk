"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Dark overlay removed */}

      {/* Logo (top-left, clickable) */}
      <div className="absolute top-4 left-4 z-20">
        <Link href="#hero">
          <Image
            src="/images/logo.jpg"
            alt="Str8Hitz Logo"
            width={40}
            height={40}
            className="rounded-full border border-white"
          />
        </Link>
      </div>

      {/* Centered content */}
      <div className="relative z-20 flex h-full flex-col justify-center items-center text-center text-white px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-16 max-w-[95%] sm:max-w-xl mx-auto mb-24 mt-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">Str8Hitz</h1>
            <h2 className="text-xl sm:text-2xl mt-2 font-medium">EPK • Music Producer</h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-200">
              Known for crafting world-class sounds and unforgettable beats. Str8Hitz blends international energy with South Florida fire.
            </p>
            <div className="mt-8">
              <Link
                href="#music"
                className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition-all duration-300"
              >
                LISTEN
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}