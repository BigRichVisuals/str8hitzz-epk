"use client";

import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="card mb-6">
      <div className="profile-wrapper flex flex-col items-center text-center px-4 py-6">
        <Image
          src="/images/logo.png"
          alt="Str8hitz Logo"
          width={160}
          height={160}
          priority
          className="rounded-lg shadow-md"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">
          Welcome to the Official<br />Str8hitzz EPK
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          South Florida-based music producer making international waves.
        </p>
      </div>
    </div>
  );
}