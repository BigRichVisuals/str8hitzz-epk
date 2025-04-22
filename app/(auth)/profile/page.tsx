'use client';

import { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { client } from '../../../src/client';
import { UpdateProfileHeaderDocument } from '../../../src/graphql/generated/graphql';

export default function ProfilePage() {
  const { user } = useAuthenticator();

  const [formData, setFormData] = useState({
    id: '',
    headline: '',
    subHeadline: '',
    logoUrl: '',
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubscriber, setIsSubscriber] = useState(false);

  useEffect(() => {
    if (user) {
      const groups = (user as any)?.signInUserSession?.accessToken?.payload["cognito:groups"] || [];
      setIsAdmin(groups.includes("Admin"));
      setIsSubscriber(groups.includes("Subscriber"));
      setFormData((prev) => ({ ...prev, id: user.username }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await client.graphql({
        query: UpdateProfileHeaderDocument,
        variables: { input: formData },
      });
      alert('Profile updated!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const renderField = (label: string, name: keyof typeof formData) => (
    <label className="block">
      <span className="text-sm">{label}</span>
      <input
        type="text"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        readOnly={!isAdmin}
        className={`w-full mt-1 p-2 rounded ${
          isAdmin ? 'bg-black/30 border border-white/20' : 'bg-black/20 border border-white/10 text-gray-400'
        }`}
      />
    </label>
  );

  return (
  <div className="max-w-xl mx-auto mt-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>
      
      {isAdmin && (
        <div className="mb-4 text-right">
          <a href="/admin/dashboard" className="text-sm underline text-purple-300 hover:text-purple-400">
            ← Back to Dashboard
          </a>
        </div>
      )}
 
      <div className="space-y-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
        {renderField("Headline", "headline")}
        {renderField("Subheadline", "subHeadline")}
        {renderField("Logo URL", "logoUrl")}

        {isAdmin && (
          <button
            onClick={handleSave}
            className="mt-4 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded font-semibold"
          >
            Save Changes
          </button>
        )}

        {isSubscriber && !isAdmin && (
          <button
            className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold"
            onClick={() => {
              const confirmed = confirm("Are you sure you want to cancel your membership?");
              if (confirmed) {
                alert("Membership cancellation submitted. Your account will be downgraded.");
                // Simulated logic - real API call would go here
              }
            }}
          >
            Cancel Membership
          </button>
        )}
      </div>
    </div>
  );
}