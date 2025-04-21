export const getProfileHeader = /* GraphQL */ `
  query GetProfileHeader($id: ID!) {
    getProfileHeader(id: $id) {
      id
      logoUrl
      headline
      subHeadline
      createdAt
      updatedAt
    }
  }
`;
 
export const listExclusiveContents = /* GraphQL */ `
  query ListExclusiveContents {
    listExclusiveContents {
      items {
        id
        title
        description
        mediaUrl
        releaseDate
        updatedAt
        createdAt
      }
    }
  }
`;
 
export const listMusicTracks = /* GraphQL */ `
  query ListMusicTracks {
    listMusicTracks {
      items {
        id
        title
        audioUrl
        isExclusive
        createdAt
        updatedAt
      }
    }
  }
`;
 
export const getProfileLinks = /* GraphQL */ `
  query GetProfileLinks($id: ID!) {
    getProfileLinks(id: $id) {
      id
      youtube
      instagram
      spotify
      createdAt
      updatedAt
    }
  }
`;