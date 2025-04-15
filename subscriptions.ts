/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateExclusiveContent = /* GraphQL */ `subscription OnCreateExclusiveContent(
  $filter: ModelSubscriptionExclusiveContentFilterInput
) {
  onCreateExclusiveContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExclusiveContentSubscriptionVariables,
  APITypes.OnCreateExclusiveContentSubscription
>;
export const onCreatePageView = /* GraphQL */ `subscription OnCreatePageView($filter: ModelSubscriptionPageViewFilterInput) {
  onCreatePageView(filter: $filter) {
    createdAt
    id
    page
    updatedAt
    viewedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePageViewSubscriptionVariables,
  APITypes.OnCreatePageViewSubscription
>;
export const onDeleteExclusiveContent = /* GraphQL */ `subscription OnDeleteExclusiveContent(
  $filter: ModelSubscriptionExclusiveContentFilterInput
) {
  onDeleteExclusiveContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExclusiveContentSubscriptionVariables,
  APITypes.OnDeleteExclusiveContentSubscription
>;
export const onDeletePageView = /* GraphQL */ `subscription OnDeletePageView($filter: ModelSubscriptionPageViewFilterInput) {
  onDeletePageView(filter: $filter) {
    createdAt
    id
    page
    updatedAt
    viewedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePageViewSubscriptionVariables,
  APITypes.OnDeletePageViewSubscription
>;
export const onUpdateExclusiveContent = /* GraphQL */ `subscription OnUpdateExclusiveContent(
  $filter: ModelSubscriptionExclusiveContentFilterInput
) {
  onUpdateExclusiveContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExclusiveContentSubscriptionVariables,
  APITypes.OnUpdateExclusiveContentSubscription
>;
export const onUpdatePageView = /* GraphQL */ `subscription OnUpdatePageView($filter: ModelSubscriptionPageViewFilterInput) {
  onUpdatePageView(filter: $filter) {
    createdAt
    id
    page
    updatedAt
    viewedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePageViewSubscriptionVariables,
  APITypes.OnUpdatePageViewSubscription
>;
