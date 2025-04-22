'use client';

import VerticalNav from './VerticalNav';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <aside className="sticky top-0 h-screen overflow-y-auto hidden md:flex md:flex-col md:w-20 lg:w-64 bg-zinc-900 text-white p-4">
        <VerticalNav />
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}