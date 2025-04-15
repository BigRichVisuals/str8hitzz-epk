/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ExclusiveContent = {
  __typename: "ExclusiveContent",
  createdAt: string,
  description?: string | null,
  id: string,
  mediaUrl?: string | null,
  releaseDate?: string | null,
  title?: string | null,
  updatedAt: string,
};

export type PageView = {
  __typename: "PageView",
  createdAt: string,
  id: string,
  page?: string | null,
  updatedAt: string,
  viewedAt?: string | null,
};

export type ModelExclusiveContentFilterInput = {
  and?: Array< ModelExclusiveContentFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  mediaUrl?: ModelStringInput | null,
  not?: ModelExclusiveContentFilterInput | null,
  or?: Array< ModelExclusiveContentFilterInput | null > | null,
  releaseDate?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelExclusiveContentConnection = {
  __typename: "ModelExclusiveContentConnection",
  items:  Array<ExclusiveContent | null >,
  nextToken?: string | null,
};

export type ModelPageViewFilterInput = {
  and?: Array< ModelPageViewFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPageViewFilterInput | null,
  or?: Array< ModelPageViewFilterInput | null > | null,
  page?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  viewedAt?: ModelStringInput | null,
};

export type ModelPageViewConnection = {
  __typename: "ModelPageViewConnection",
  items:  Array<PageView | null >,
  nextToken?: string | null,
};

export type ModelExclusiveContentConditionInput = {
  and?: Array< ModelExclusiveContentConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  mediaUrl?: ModelStringInput | null,
  not?: ModelExclusiveContentConditionInput | null,
  or?: Array< ModelExclusiveContentConditionInput | null > | null,
  releaseDate?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateExclusiveContentInput = {
  description?: string | null,
  id?: string | null,
  mediaUrl?: string | null,
  releaseDate?: string | null,
  title?: string | null,
};

export type ModelPageViewConditionInput = {
  and?: Array< ModelPageViewConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPageViewConditionInput | null,
  or?: Array< ModelPageViewConditionInput | null > | null,
  page?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  viewedAt?: ModelStringInput | null,
};

export type CreatePageViewInput = {
  id?: string | null,
  page?: string | null,
  viewedAt?: string | null,
};

export type DeleteExclusiveContentInput = {
  id: string,
};

export type DeletePageViewInput = {
  id: string,
};

export type UpdateExclusiveContentInput = {
  description?: string | null,
  id: string,
  mediaUrl?: string | null,
  releaseDate?: string | null,
  title?: string | null,
};

export type UpdatePageViewInput = {
  id: string,
  page?: string | null,
  viewedAt?: string | null,
};

export type ModelSubscriptionExclusiveContentFilterInput = {
  and?: Array< ModelSubscriptionExclusiveContentFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  mediaUrl?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionExclusiveContentFilterInput | null > | null,
  releaseDate?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPageViewFilterInput = {
  and?: Array< ModelSubscriptionPageViewFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPageViewFilterInput | null > | null,
  page?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  viewedAt?: ModelSubscriptionStringInput | null,
};

export type GetExclusiveContentQueryVariables = {
  id: string,
};

export type GetExclusiveContentQuery = {
  getExclusiveContent?:  {
    __typename: "ExclusiveContent",
    createdAt: string,
    description?: string | null,
    id: string,
    mediaUrl?: string | null,
    releaseDate?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetPageViewQueryVariables = {
  id: string,
};

export type GetPageViewQuery = {
  getPageView?:  {
    __typename: "PageView",
    createdAt: string,
    id: string,
    page?: string | null,
    updatedAt: string,
    viewedAt?: string | null,
  } | null,
};

export type ListExclusiveContentsQueryVariables = {
  filter?: ModelExclusiveContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExclusiveContentsQuery = {
  listExclusiveContents?:  {
    __typename: "ModelExclusiveContentConnection",
    items:  Array< {
      __typename: "ExclusiveContent",
      createdAt: string,
      description?: string | null,
      id: string,
      mediaUrl?: string | null,
      releaseDate?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPageViewsQueryVariables = {
  filter?: ModelPageViewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPageViewsQuery = {
  listPageViews?:  {
    __typename: "ModelPageViewConnection",
    items:  Array< {
      __typename: "PageView",
      createdAt: string,
      id: string,
      page?: string | null,
      updatedAt: string,
      viewedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateExclusiveContentMutationVariables = {
  condition?: ModelExclusiveContentConditionInput | null,
  input: CreateExclusiveContentInput,
};

export type CreateExclusiveContentMutation = {
  createExclusiveContent?:  {
    __typename: "ExclusiveContent",
    createdAt: string,
    description?: string | null,
    id: string,
    mediaUrl?: string | null,
    releaseDate?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePageViewMutationVariables = {
  condition?: ModelPageViewConditionInput | null,
  input: CreatePageViewInput,
};

export type CreatePageViewMutation = {
  createPageView?:  {
    __typename: "PageView",
    createdAt: string,
    id: string,
    page?: string | null,
    updatedAt: string,
    viewedAt?: string | null,
  } | null,
};

export type DeleteExclusiveContentMutationVariables = {
  condition?: ModelExclusiveContentConditionInput | null,
  input: DeleteExclusiveContentInput,
};

export type DeleteExclusiveContentMutation = {
  deleteExclusiveContent?:  {
    __typename: "ExclusiveContent",
    createdAt: string,
    description?: string | null,
    id: string,
    mediaUrl?: string | null,
    releaseDate?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePageViewMutationVariables = {
  condition?: ModelPageViewConditionInput | null,
  input: DeletePageViewInput,
};

export type DeletePageViewMutation = {
  deletePageView?:  {
    __typename: "PageView",
    createdAt: string,
    id: string,
    page?: string | null,
    updatedAt: string,
    viewedAt?: string | null,
  } | null,
};

export type UpdateExclusiveContentMutationVariables = {
  condition?: ModelExclusiveContentConditionInput | null,
  input: UpdateExclusiveContentInput,
};

export type UpdateExclusiveContentMutation = {
  updateExclusiveContent?:  {
    __typename: "ExclusiveContent",
    createdAt: string,
    description?: string | null,
    id: string,
    mediaUrl?: string | null,
    releaseDate?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePageViewMutationVariables = {
  condition?: ModelPageViewConditionInput | null,
  input: UpdatePageViewInput,
};

export type UpdatePageViewMutation = {
  updatePageView?:  {
    __typename: "PageView",
    createdAt: string,
    id: string,
    page?: string | null,
    updatedAt: string,
    viewedAt?: string | null,
  } | null,
};

export type OnCreateExclusiveContentSubscriptionVariables = {
  filter?: ModelSubscriptionExclusiveContentFilterInput | null,
};

export type OnCreateExclusiveContentSubscription = {
  onCreateExclusiveContent?:  {
    __typename: "ExclusiveContent",
    createdAt: string,
    description?: string | null,
    id: string,
    mediaUrl?: string | null,
    releaseDate?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePageViewSubscriptionVariables = {
  filter?: ModelSubscriptionPageViewFilterInput | null,
};

export type OnCreatePageViewSubscription = {
  onCreatePageView?:  {
    __typename: "PageView",
    createdAt: string,
    id: string,
    page?: string | null,
    updatedAt: string,
    viewedAt?: string | null,
  } | null,
};

export type OnDeleteExclusiveContentSubscriptionVariables = {
  filter?: ModelSubscriptionExclusiveContentFilterInput | null,
};

export type OnDeleteExclusiveContentSubscription = {
  onDeleteExclusiveContent?:  {
    __typename: "ExclusiveContent",
    createdAt: string,
    description?: string | null,
    id: string,
    mediaUrl?: string | null,
    releaseDate?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePageViewSubscriptionVariables = {
  filter?: ModelSubscriptionPageViewFilterInput | null,
};

export type OnDeletePageViewSubscription = {
  onDeletePageView?:  {
    __typename: "PageView",
    createdAt: string,
    id: string,
    page?: string | null,
    updatedAt: string,
    viewedAt?: string | null,
  } | null,
};

export type OnUpdateExclusiveContentSubscriptionVariables = {
  filter?: ModelSubscriptionExclusiveContentFilterInput | null,
};

export type OnUpdateExclusiveContentSubscription = {
  onUpdateExclusiveContent?:  {
    __typename: "ExclusiveContent",
    createdAt: string,
    description?: string | null,
    id: string,
    mediaUrl?: string | null,
    releaseDate?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePageViewSubscriptionVariables = {
  filter?: ModelSubscriptionPageViewFilterInput | null,
};

export type OnUpdatePageViewSubscription = {
  onUpdatePageView?:  {
    __typename: "PageView",
    createdAt: string,
    id: string,
    page?: string | null,
    updatedAt: string,
    viewedAt?: string | null,
  } | null,
};
