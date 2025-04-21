/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation UpdateProfileHeader($input: UpdateProfileHeaderInput!) {\n    updateProfileHeader(input: $input) {\n      id\n      logoUrl\n      headline\n      subHeadline\n      updatedAt\n    }\n  }\n": typeof types.UpdateProfileHeaderDocument,
    "\n  mutation UpdateProfileLinks($input: UpdateProfileLinksInput!) {\n    updateProfileLinks(input: $input) {\n      id\n      youtube\n      instagram\n      spotify\n      updatedAt\n    }\n  }\n": typeof types.UpdateProfileLinksDocument,
    "\n  mutation CreateExclusiveContent($input: CreateExclusiveContentInput!) {\n    createExclusiveContent(input: $input) {\n      id\n      title\n      description\n      mediaUrl\n      releaseDate\n      createdAt\n    }\n  }\n": typeof types.CreateExclusiveContentDocument,
    "\n  mutation UpdateExclusiveContent($input: UpdateExclusiveContentInput!) {\n    updateExclusiveContent(input: $input) {\n      id\n      title\n      description\n      mediaUrl\n      releaseDate\n      updatedAt\n    }\n  }\n": typeof types.UpdateExclusiveContentDocument,
    "\n  mutation DeleteExclusiveContent($input: DeleteExclusiveContentInput!) {\n    deleteExclusiveContent(input: $input) {\n      id\n    }\n  }\n": typeof types.DeleteExclusiveContentDocument,
    "\n  mutation CreateMusicTrack($input: CreateMusicTrackInput!) {\n    createMusicTrack(input: $input) {\n      id\n      title\n      audioUrl\n      isExclusive\n      createdAt\n    }\n  }\n": typeof types.CreateMusicTrackDocument,
    "\n  mutation UpdateMusicTrack($input: UpdateMusicTrackInput!) {\n    updateMusicTrack(input: $input) {\n      id\n      title\n      audioUrl\n      isExclusive\n      updatedAt\n    }\n  }\n": typeof types.UpdateMusicTrackDocument,
    "\n  mutation DeleteMusicTrack($input: DeleteMusicTrackInput!) {\n    deleteMusicTrack(input: $input) {\n      id\n    }\n  }\n": typeof types.DeleteMusicTrackDocument,
};
const documents: Documents = {
    "\n  mutation UpdateProfileHeader($input: UpdateProfileHeaderInput!) {\n    updateProfileHeader(input: $input) {\n      id\n      logoUrl\n      headline\n      subHeadline\n      updatedAt\n    }\n  }\n": types.UpdateProfileHeaderDocument,
    "\n  mutation UpdateProfileLinks($input: UpdateProfileLinksInput!) {\n    updateProfileLinks(input: $input) {\n      id\n      youtube\n      instagram\n      spotify\n      updatedAt\n    }\n  }\n": types.UpdateProfileLinksDocument,
    "\n  mutation CreateExclusiveContent($input: CreateExclusiveContentInput!) {\n    createExclusiveContent(input: $input) {\n      id\n      title\n      description\n      mediaUrl\n      releaseDate\n      createdAt\n    }\n  }\n": types.CreateExclusiveContentDocument,
    "\n  mutation UpdateExclusiveContent($input: UpdateExclusiveContentInput!) {\n    updateExclusiveContent(input: $input) {\n      id\n      title\n      description\n      mediaUrl\n      releaseDate\n      updatedAt\n    }\n  }\n": types.UpdateExclusiveContentDocument,
    "\n  mutation DeleteExclusiveContent($input: DeleteExclusiveContentInput!) {\n    deleteExclusiveContent(input: $input) {\n      id\n    }\n  }\n": types.DeleteExclusiveContentDocument,
    "\n  mutation CreateMusicTrack($input: CreateMusicTrackInput!) {\n    createMusicTrack(input: $input) {\n      id\n      title\n      audioUrl\n      isExclusive\n      createdAt\n    }\n  }\n": types.CreateMusicTrackDocument,
    "\n  mutation UpdateMusicTrack($input: UpdateMusicTrackInput!) {\n    updateMusicTrack(input: $input) {\n      id\n      title\n      audioUrl\n      isExclusive\n      updatedAt\n    }\n  }\n": types.UpdateMusicTrackDocument,
    "\n  mutation DeleteMusicTrack($input: DeleteMusicTrackInput!) {\n    deleteMusicTrack(input: $input) {\n      id\n    }\n  }\n": types.DeleteMusicTrackDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProfileHeader($input: UpdateProfileHeaderInput!) {\n    updateProfileHeader(input: $input) {\n      id\n      logoUrl\n      headline\n      subHeadline\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfileHeader($input: UpdateProfileHeaderInput!) {\n    updateProfileHeader(input: $input) {\n      id\n      logoUrl\n      headline\n      subHeadline\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProfileLinks($input: UpdateProfileLinksInput!) {\n    updateProfileLinks(input: $input) {\n      id\n      youtube\n      instagram\n      spotify\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfileLinks($input: UpdateProfileLinksInput!) {\n    updateProfileLinks(input: $input) {\n      id\n      youtube\n      instagram\n      spotify\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateExclusiveContent($input: CreateExclusiveContentInput!) {\n    createExclusiveContent(input: $input) {\n      id\n      title\n      description\n      mediaUrl\n      releaseDate\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateExclusiveContent($input: CreateExclusiveContentInput!) {\n    createExclusiveContent(input: $input) {\n      id\n      title\n      description\n      mediaUrl\n      releaseDate\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateExclusiveContent($input: UpdateExclusiveContentInput!) {\n    updateExclusiveContent(input: $input) {\n      id\n      title\n      description\n      mediaUrl\n      releaseDate\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateExclusiveContent($input: UpdateExclusiveContentInput!) {\n    updateExclusiveContent(input: $input) {\n      id\n      title\n      description\n      mediaUrl\n      releaseDate\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteExclusiveContent($input: DeleteExclusiveContentInput!) {\n    deleteExclusiveContent(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteExclusiveContent($input: DeleteExclusiveContentInput!) {\n    deleteExclusiveContent(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMusicTrack($input: CreateMusicTrackInput!) {\n    createMusicTrack(input: $input) {\n      id\n      title\n      audioUrl\n      isExclusive\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMusicTrack($input: CreateMusicTrackInput!) {\n    createMusicTrack(input: $input) {\n      id\n      title\n      audioUrl\n      isExclusive\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateMusicTrack($input: UpdateMusicTrackInput!) {\n    updateMusicTrack(input: $input) {\n      id\n      title\n      audioUrl\n      isExclusive\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateMusicTrack($input: UpdateMusicTrackInput!) {\n    updateMusicTrack(input: $input) {\n      id\n      title\n      audioUrl\n      isExclusive\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMusicTrack($input: DeleteMusicTrackInput!) {\n    deleteMusicTrack(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMusicTrack($input: DeleteMusicTrackInput!) {\n    deleteMusicTrack(input: $input) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;