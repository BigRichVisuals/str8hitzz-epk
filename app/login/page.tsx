 // app/login/page.tsx
'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6 bg-white/10 backdrop-blur rounded-lg">
        <Authenticator />
      </div>
    </div>
  );
}