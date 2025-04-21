export const updateProfileHeader = /* GraphQL */ `
  mutation UpdateProfileHeader($input: UpdateProfileHeaderInput!) {
    updateProfileHeader(input: $input) {
      id
      logoUrl
      headline
      subHeadline
      updatedAt
    }
  }
`;

export const updateProfileLinks = /* GraphQL */ `
  mutation UpdateProfileLinks($input: UpdateProfileLinksInput!) {
    updateProfileLinks(input: $input) {
      id
      youtube
      instagram
      spotify
      updatedAt
    }
  }
`;

export const createProfileLinks = /* GraphQL */ `
  mutation CreateProfileLinks($input: CreateProfileLinksInput!) {
    createProfileLinks(input: $input) {
      id
      youtube
      instagram
      spotify
      createdAt
      updatedAt
    }
  }
`;

export const createExclusiveContent = /* GraphQL */ `
  mutation CreateExclusiveContent($input: CreateExclusiveContentInput!) {
    createExclusiveContent(input: $input) {
      id
      title
      description
      mediaUrl
      releaseDate
      createdAt
    }
  }
`;

export const updateExclusiveContent = /* GraphQL */ `
  mutation UpdateExclusiveContent($input: UpdateExclusiveContentInput!) {
    updateExclusiveContent(input: $input) {
      id
      title
      description
      mediaUrl
      releaseDate
      updatedAt
    }
  }
`;

export const deleteExclusiveContent = /* GraphQL */ `
  mutation DeleteExclusiveContent($input: DeleteExclusiveContentInput!) {
    deleteExclusiveContent(input: $input) {
      id
    }
  }
`;

export const createMusicTrack = /* GraphQL */ `
  mutation CreateMusicTrack($input: CreateMusicTrackInput!) {
    createMusicTrack(input: $input) {
      id
      title
      audioUrl
      isExclusive
      createdAt
    }
  }
`;

export const updateMusicTrack = /* GraphQL */ `
  mutation UpdateMusicTrack($input: UpdateMusicTrackInput!) {
    updateMusicTrack(input: $input) {
      id
      title
      audioUrl
      isExclusive
      updatedAt
    }
  }
`;

export const deleteMusicTrack = /* GraphQL */ `
  mutation DeleteMusicTrack($input: DeleteMusicTrackInput!) {
    deleteMusicTrack(input: $input) {
      id
    }
  }
`;
