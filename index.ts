import { ModelInit, MutableModel, PersistentModelConstructor, __modelMeta__, ManagedIdentifier, LazyLoadingDisabled } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";


type LazyLoading = LazyLoadingDisabled;

import { schema } from "./schema";



const { PageView, ExclusiveContent } = initSchema(schema) as {
  PageView: PersistentModelConstructor<any>;
  ExclusiveContent: PersistentModelConstructor<any>;
};

type EagerPageViewModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<typeof PageView, 'copyOf'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly page?: string | null;
  readonly viewedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPageViewModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<typeof PageView, 'copyOf'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly page?: string | null;
  readonly viewedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PageViewModel = LazyLoading extends LazyLoadingDisabled ? EagerPageViewModel : LazyPageViewModel

export declare const PageViewModel: (new (init: ModelInit<PageViewModel>) => PageViewModel) & {
  copyOf(source: PageViewModel, mutator: (draft: MutableModel<PageViewModel>) => MutableModel<PageViewModel> | void): PageViewModel;
}

type EagerExclusiveContentModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<typeof ExclusiveContent, 'copyOf'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly releaseDate?: string | null;
  readonly mediaUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExclusiveContentModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<typeof ExclusiveContent, 'copyOf'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly releaseDate?: string | null;
  readonly mediaUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExclusiveContentModel = LazyLoading extends LazyLoadingDisabled ? EagerExclusiveContentModel : LazyExclusiveContentModel

export declare const ExclusiveContentModel: (new (init: ModelInit<ExclusiveContentModel>) => ExclusiveContentModel) & {
  copyOf(source: ExclusiveContentModel, mutator: (draft: MutableModel<ExclusiveContentModel>) => MutableModel<ExclusiveContentModel> | void): ExclusiveContentModel;
}

export {
  PageView,
  ExclusiveContent
};