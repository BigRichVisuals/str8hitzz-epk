/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AWSDate: { input: string; output: string; }
  AWSDateTime: { input: any; output: any; }
  AWSEmail: { input: string; output: string; }
  AWSJSON: { input: any; output: any; }
  AWSPhone: { input: string; output: string; }
  AWSTimestamp: { input: number; output: number; }
  AWSURL: { input: string; output: string; }
};

export type AmplifyAiConversationTurnErrorInput = {
  errorType: Scalars['String']['input'];
  message: Scalars['String']['input'];
};

export type CreateExclusiveContentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mediaUrl?: InputMaybe<Scalars['AWSURL']['input']>;
  releaseDate?: InputMaybe<Scalars['AWSDateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMusicTrackInput = {
  audioUrl: Scalars['AWSURL']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isExclusive: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreatePageViewInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  viewedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type DeleteExclusiveContentInput = {
  id: Scalars['ID']['input'];
};

export type DeleteMusicTrackInput = {
  id: Scalars['ID']['input'];
};

export type DeletePageViewInput = {
  id: Scalars['ID']['input'];
};

export type ExclusiveContent = {
  __typename?: 'ExclusiveContent';
  createdAt: Scalars['AWSDateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mediaUrl?: Maybe<Scalars['AWSURL']['output']>;
  releaseDate?: Maybe<Scalars['AWSDateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['AWSDateTime']['output'];
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModelExclusiveContentConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelExclusiveContentConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  mediaUrl?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelExclusiveContentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelExclusiveContentConditionInput>>>;
  releaseDate?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelExclusiveContentConnection = {
  __typename?: 'ModelExclusiveContentConnection';
  items: Array<Maybe<ExclusiveContent>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelExclusiveContentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelExclusiveContentFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  mediaUrl?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelExclusiveContentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelExclusiveContentFilterInput>>>;
  releaseDate?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type ModelPageViewConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPageViewConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelPageViewConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPageViewConditionInput>>>;
  page?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  viewedAt?: InputMaybe<ModelStringInput>;
};

export type ModelPageViewConnection = {
  __typename?: 'ModelPageViewConnection';
  items: Array<Maybe<PageView>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelPageViewFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPageViewFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPageViewFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPageViewFilterInput>>>;
  page?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  viewedAt?: InputMaybe<ModelStringInput>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModelSubscriptionExclusiveContentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionExclusiveContentFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  mediaUrl?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionExclusiveContentFilterInput>>>;
  releaseDate?: InputMaybe<ModelSubscriptionStringInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ModelSubscriptionPageViewFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionPageViewFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionPageViewFilterInput>>>;
  page?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  viewedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MusicTrack = {
  __typename?: 'MusicTrack';
  audioUrl: Scalars['AWSURL']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  isExclusive: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createExclusiveContent?: Maybe<ExclusiveContent>;
  createMusicTrack?: Maybe<MusicTrack>;
  createPageView?: Maybe<PageView>;
  deleteExclusiveContent?: Maybe<ExclusiveContent>;
  deleteMusicTrack?: Maybe<MusicTrack>;
  deletePageView?: Maybe<PageView>;
  updateExclusiveContent?: Maybe<ExclusiveContent>;
  updateMusicTrack?: Maybe<MusicTrack>;
  updatePageView?: Maybe<PageView>;
  updateProfileHeader?: Maybe<ProfileHeader>;
  updateProfileLinks?: Maybe<ProfileLinks>;
};


export type MutationCreateExclusiveContentArgs = {
  condition?: InputMaybe<ModelExclusiveContentConditionInput>;
  input: CreateExclusiveContentInput;
};


export type MutationCreateMusicTrackArgs = {
  input: CreateMusicTrackInput;
};


export type MutationCreatePageViewArgs = {
  condition?: InputMaybe<ModelPageViewConditionInput>;
  input: CreatePageViewInput;
};


export type MutationDeleteExclusiveContentArgs = {
  condition?: InputMaybe<ModelExclusiveContentConditionInput>;
  input: DeleteExclusiveContentInput;
};


export type MutationDeleteMusicTrackArgs = {
  input: DeleteMusicTrackInput;
};


export type MutationDeletePageViewArgs = {
  condition?: InputMaybe<ModelPageViewConditionInput>;
  input: DeletePageViewInput;
};


export type MutationUpdateExclusiveContentArgs = {
  condition?: InputMaybe<ModelExclusiveContentConditionInput>;
  input: UpdateExclusiveContentInput;
};


export type MutationUpdateMusicTrackArgs = {
  input: UpdateMusicTrackInput;
};


export type MutationUpdatePageViewArgs = {
  condition?: InputMaybe<ModelPageViewConditionInput>;
  input: UpdatePageViewInput;
};


export type MutationUpdateProfileHeaderArgs = {
  input: UpdateProfileHeaderInput;
};


export type MutationUpdateProfileLinksArgs = {
  input: UpdateProfileLinksInput;
};

export type PageView = {
  __typename?: 'PageView';
  createdAt: Scalars['AWSDateTime']['output'];
  id: Scalars['ID']['output'];
  page?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['AWSDateTime']['output'];
  viewedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type ProfileHeader = {
  __typename?: 'ProfileHeader';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logoUrl?: Maybe<Scalars['AWSURL']['output']>;
  subHeadline?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type ProfileLinks = {
  __typename?: 'ProfileLinks';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['AWSURL']['output']>;
  spotify?: Maybe<Scalars['AWSURL']['output']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  youtube?: Maybe<Scalars['AWSURL']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getExclusiveContent?: Maybe<ExclusiveContent>;
  getPageView?: Maybe<PageView>;
  listExclusiveContents?: Maybe<ModelExclusiveContentConnection>;
  listPageViews?: Maybe<ModelPageViewConnection>;
};


export type QueryGetExclusiveContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPageViewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryListExclusiveContentsArgs = {
  filter?: InputMaybe<ModelExclusiveContentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPageViewsArgs = {
  filter?: InputMaybe<ModelPageViewFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateExclusiveContent?: Maybe<ExclusiveContent>;
  onCreatePageView?: Maybe<PageView>;
  onDeleteExclusiveContent?: Maybe<ExclusiveContent>;
  onDeletePageView?: Maybe<PageView>;
  onUpdateExclusiveContent?: Maybe<ExclusiveContent>;
  onUpdatePageView?: Maybe<PageView>;
};


export type SubscriptionOnCreateExclusiveContentArgs = {
  filter?: InputMaybe<ModelSubscriptionExclusiveContentFilterInput>;
};


export type SubscriptionOnCreatePageViewArgs = {
  filter?: InputMaybe<ModelSubscriptionPageViewFilterInput>;
};


export type SubscriptionOnDeleteExclusiveContentArgs = {
  filter?: InputMaybe<ModelSubscriptionExclusiveContentFilterInput>;
};


export type SubscriptionOnDeletePageViewArgs = {
  filter?: InputMaybe<ModelSubscriptionPageViewFilterInput>;
};


export type SubscriptionOnUpdateExclusiveContentArgs = {
  filter?: InputMaybe<ModelSubscriptionExclusiveContentFilterInput>;
};


export type SubscriptionOnUpdatePageViewArgs = {
  filter?: InputMaybe<ModelSubscriptionPageViewFilterInput>;
};

export type UpdateExclusiveContentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mediaUrl?: InputMaybe<Scalars['AWSURL']['input']>;
  releaseDate?: InputMaybe<Scalars['AWSDateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMusicTrackInput = {
  audioUrl?: InputMaybe<Scalars['AWSURL']['input']>;
  id: Scalars['ID']['input'];
  isExclusive?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePageViewInput = {
  id: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['String']['input']>;
  viewedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateProfileHeaderInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  logoUrl?: InputMaybe<Scalars['AWSURL']['input']>;
  subHeadline?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileLinksInput = {
  id: Scalars['ID']['input'];
  instagram?: InputMaybe<Scalars['AWSURL']['input']>;
  spotify?: InputMaybe<Scalars['AWSURL']['input']>;
  youtube?: InputMaybe<Scalars['AWSURL']['input']>;
};

export type UpdateProfileHeaderMutationVariables = Exact<{
  input: UpdateProfileHeaderInput;
}>;


export type UpdateProfileHeaderMutation = { __typename?: 'Mutation', updateProfileHeader?: { __typename?: 'ProfileHeader', id: string, logoUrl?: string | null, headline?: string | null, subHeadline?: string | null, updatedAt?: any | null } | null };

export type UpdateProfileLinksMutationVariables = Exact<{
  input: UpdateProfileLinksInput;
}>;


export type UpdateProfileLinksMutation = { __typename?: 'Mutation', updateProfileLinks?: { __typename?: 'ProfileLinks', id: string, youtube?: string | null, instagram?: string | null, spotify?: string | null, updatedAt?: any | null } | null };

export type CreateExclusiveContentMutationVariables = Exact<{
  input: CreateExclusiveContentInput;
}>;


export type CreateExclusiveContentMutation = { __typename?: 'Mutation', createExclusiveContent?: { __typename?: 'ExclusiveContent', id: string, title?: string | null, description?: string | null, mediaUrl?: string | null, releaseDate?: any | null, createdAt: any } | null };

export type UpdateExclusiveContentMutationVariables = Exact<{
  input: UpdateExclusiveContentInput;
}>;


export type UpdateExclusiveContentMutation = { __typename?: 'Mutation', updateExclusiveContent?: { __typename?: 'ExclusiveContent', id: string, title?: string | null, description?: string | null, mediaUrl?: string | null, releaseDate?: any | null, updatedAt: any } | null };

export type DeleteExclusiveContentMutationVariables = Exact<{
  input: DeleteExclusiveContentInput;
}>;


export type DeleteExclusiveContentMutation = { __typename?: 'Mutation', deleteExclusiveContent?: { __typename?: 'ExclusiveContent', id: string } | null };

export type CreateMusicTrackMutationVariables = Exact<{
  input: CreateMusicTrackInput;
}>;


export type CreateMusicTrackMutation = { __typename?: 'Mutation', createMusicTrack?: { __typename?: 'MusicTrack', id: string, title: string, audioUrl: string, isExclusive: boolean, createdAt?: any | null } | null };

export type UpdateMusicTrackMutationVariables = Exact<{
  input: UpdateMusicTrackInput;
}>;


export type UpdateMusicTrackMutation = { __typename?: 'Mutation', updateMusicTrack?: { __typename?: 'MusicTrack', id: string, title: string, audioUrl: string, isExclusive: boolean, updatedAt?: any | null } | null };

export type DeleteMusicTrackMutationVariables = Exact<{
  input: DeleteMusicTrackInput;
}>;


export type DeleteMusicTrackMutation = { __typename?: 'Mutation', deleteMusicTrack?: { __typename?: 'MusicTrack', id: string } | null };


export const UpdateProfileHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfileHeader"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProfileHeaderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfileHeader"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"subHeadline"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileHeaderMutation, UpdateProfileHeaderMutationVariables>;
export const UpdateProfileLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfileLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProfileLinksInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfileLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"spotify"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileLinksMutation, UpdateProfileLinksMutationVariables>;
export const CreateExclusiveContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateExclusiveContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateExclusiveContentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createExclusiveContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mediaUrl"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateExclusiveContentMutation, CreateExclusiveContentMutationVariables>;
export const UpdateExclusiveContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateExclusiveContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateExclusiveContentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateExclusiveContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mediaUrl"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateExclusiveContentMutation, UpdateExclusiveContentMutationVariables>;
export const DeleteExclusiveContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteExclusiveContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteExclusiveContentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteExclusiveContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteExclusiveContentMutation, DeleteExclusiveContentMutationVariables>;
export const CreateMusicTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMusicTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMusicTrackInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMusicTrack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isExclusive"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateMusicTrackMutation, CreateMusicTrackMutationVariables>;
export const UpdateMusicTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMusicTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMusicTrackInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMusicTrack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isExclusive"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateMusicTrackMutation, UpdateMusicTrackMutationVariables>;
export const DeleteMusicTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMusicTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteMusicTrackInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMusicTrack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteMusicTrackMutation, DeleteMusicTrackMutationVariables>;