import { defineStorage, a } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'str8hitzzepkmedia',
  access: (allow) => ({
    'media/admin/*': [
      allow.groups(['Admin']).to(['read', 'write', 'delete'])
    ],
    'media/public/*': [
      allow.guest.to(['read'])
    ]
  }),
});