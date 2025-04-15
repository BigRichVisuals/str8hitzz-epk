/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createExclusiveContent = /* GraphQL */ `mutation CreateExclusiveContent(
  $condition: ModelExclusiveContentConditionInput
  $input: CreateExclusiveContentInput!
) {
  createExclusiveContent(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateExclusiveContentMutationVariables,
  APITypes.CreateExclusiveContentMutation
>;
export const createPageView = /* GraphQL */ `mutation CreatePageView(
  $condition: ModelPageViewConditionInput
  $input: CreatePageViewInput!
) {
  createPageView(condition: $condition, input: $input) {
    createdAt
    id
    page
    updatedAt
    viewedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePageViewMutationVariables,
  APITypes.CreatePageViewMutation
>;
export const deleteExclusiveContent = /* GraphQL */ `mutation DeleteExclusiveContent(
  $condition: ModelExclusiveContentConditionInput
  $input: DeleteExclusiveContentInput!
) {
  deleteExclusiveContent(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteExclusiveContentMutationVariables,
  APITypes.DeleteExclusiveContentMutation
>;
export const deletePageView = /* GraphQL */ `mutation DeletePageView(
  $condition: ModelPageViewConditionInput
  $input: DeletePageViewInput!
) {
  deletePageView(condition: $condition, input: $input) {
    createdAt
    id
    page
    updatedAt
    viewedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePageViewMutationVariables,
  APITypes.DeletePageViewMutation
>;
export const updateExclusiveContent = /* GraphQL */ `mutation UpdateExclusiveContent(
  $condition: ModelExclusiveContentConditionInput
  $input: UpdateExclusiveContentInput!
) {
  updateExclusiveContent(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateExclusiveContentMutationVariables,
  APITypes.UpdateExclusiveContentMutation
>;
export const updatePageView = /* GraphQL */ `mutation UpdatePageView(
  $condition: ModelPageViewConditionInput
  $input: UpdatePageViewInput!
) {
  updatePageView(condition: $condition, input: $input) {
    createdAt
    id
    page
    updatedAt
    viewedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePageViewMutationVariables,
  APITypes.UpdatePageViewMutation
>;
