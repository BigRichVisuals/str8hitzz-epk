/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getExclusiveContent = /* GraphQL */ `query GetExclusiveContent($id: ID!) {
  getExclusiveContent(id: $id) {
    createdAt
    description
    id
    mediaUrl
    releaseDate
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExclusiveContentQueryVariables,
  APITypes.GetExclusiveContentQuery
>;
export const getPageView = /* GraphQL */ `query GetPageView($id: ID!) {
  getPageView(id: $id) {
    createdAt
    id
    page
    updatedAt
    viewedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPageViewQueryVariables,
  APITypes.GetPageViewQuery
>;
export const listExclusiveContents = /* GraphQL */ `query ListExclusiveContents(
  $filter: ModelExclusiveContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listExclusiveContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      description
      id
      mediaUrl
      releaseDate
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExclusiveContentsQueryVariables,
  APITypes.ListExclusiveContentsQuery
>;
export const listPageViews = /* GraphQL */ `query ListPageViews(
  $filter: ModelPageViewFilterInput
  $limit: Int
  $nextToken: String
) {
  listPageViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      page
      updatedAt
      viewedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPageViewsQueryVariables,
  APITypes.ListPageViewsQuery
>;
