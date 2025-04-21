'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaMusic,
  FaVideo,
  FaLock,
  FaImage,
  FaUser,
} from 'react-icons/fa';

const navItems = [
  { href: '/', label: 'Home', icon: <FaHome /> },
  { href: '/music', label: 'Music', icon: <FaMusic /> },
  { href: '/#videos', label: 'Videos', icon: <FaVideo /> },
  { href: '/exclusive', label: 'Exclusive', icon: <FaLock /> },
  { href: '/#gallery', label: 'Gallery', icon: <FaImage /> },
  { href: '/profile', label: 'Profile', icon: <FaUser /> },
];

export default function VerticalNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-20 lg:w-64 bg-zinc-900 text-white p-4">
        <div className="text-xl font-bold tracking-wider mb-6 hidden lg:block">Str8hitzz</div>
        <nav className="flex flex-col gap-4 items-center lg:items-start">
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-2 py-2 rounded-md hover:bg-zinc-800 w-full justify-center lg:justify-start transition-colors ${
                pathname === href ? 'bg-zinc-800' : ''
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span className="hidden lg:inline text-sm">{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 text-white p-2 flex justify-around md:hidden">
        {navItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center text-xs ${
              pathname === href ? 'text-purple-400' : 'text-white'
            }`}
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}