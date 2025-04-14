import { defineData, a } from '@aws-amplify/backend';

export const data = defineData({
  schema: a.schema({
    PageView: a.model({
      page: a.string(),
      viewedAt: a.datetime(),
    }).authorization((allow) => [
      allow.guest().to(['create']),
      allow.group('Admin').to(['read'])
    ]),

    ExclusiveContent: a.model({
      title: a.string(),
      description: a.string(),
      releaseDate: a.datetime(),
      mediaUrl: a.url(),
    }).authorization((allow) => [
      allow.authenticated().to(['read']),
      allow.group('Admin').to(['create', 'update', 'delete'])
    ])
  })
});