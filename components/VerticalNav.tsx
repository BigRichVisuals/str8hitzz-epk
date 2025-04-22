'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  FaHome,
  FaMusic,
  FaVideo,
  FaLock,
  FaImage,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaTools,
  FaEnvelope,
} from 'react-icons/fa';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function VerticalNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { authStatus, signOut, user } = useAuthenticator((context) => [
    context.authStatus,
    context.user,
  ]);

  const isAdmin = (user as any)?.signInUserSession?.accessToken?.payload["cognito:groups"]?.includes("Admin");

  const navItems = [
    { href: '/', label: 'Home', icon: <FaHome /> },
    { href: '/music', label: 'Music', icon: <FaMusic /> },
    { href: '/#videos', label: 'Videos', icon: <FaVideo /> },
    { href: '/exclusive', label: 'Exclusive', icon: <FaLock /> },
    { href: '/#gallery', label: 'Gallery', icon: <FaImage /> },
    { href: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  if (authStatus === 'authenticated') {
    if (isAdmin) {
      navItems.push({ href: '/admin/dashboard', label: 'Dashboard', icon: <FaTools /> });
    }
    navItems.push({ href: '/profile', label: 'Profile', icon: <FaUser /> });
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-20 lg:w-64 bg-zinc-900 text-white p-4">
        <div className="text-xl font-bold tracking-wider mb-6 hidden lg:block">
          Str8hitz
          {authStatus === 'authenticated' && user && (
            <div className="text-sm mt-2 text-zinc-300">Welcome, {user.username}</div>
          )}
        </div>
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
          {authStatus === 'authenticated' ? (
            <button
              onClick={() => {
                signOut();
                router.push('/login');
              }}
              className="flex items-center gap-3 px-2 py-2 mt-4 text-left w-full hover:bg-zinc-800 rounded-md justify-center lg:justify-start"
            >
              <FaSignOutAlt className="text-lg" />
              <span className="hidden lg:inline text-sm">Logout</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-3 px-2 py-2 mt-4 hover:bg-zinc-800 rounded-md justify-center lg:justify-start"
            >
              <FaSignInAlt className="text-lg" />
              <span className="hidden lg:inline text-sm">Login</span>
            </Link>
          )}
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
        {authStatus === 'authenticated' ? (
          <button
            onClick={() => {
              signOut();
              router.push('/login');
            }}
            className="flex flex-col items-center text-xs text-white"
          >
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        ) : (
          <Link
            href="/login"
            className="flex flex-col items-center text-xs text-white"
          >
            <FaSignInAlt className="text-lg" />
            <span>Login</span>
          </Link>
        )}
      </div>
    </>
  );
}