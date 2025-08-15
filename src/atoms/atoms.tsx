import { atom } from 'recoil';
import type { LoadingTypes } from '../helpers/types/LoadingType';

export const SearchModalState = atom<boolean>({
  key: 'searchModalKey',
  default: false,
});

export const DeleteModalVisible = atom<boolean>({
  key: 'deleteModalVisible',
  default: false,
});

export const DeleteModalItem = atom<any>({
  key: 'deleteModalItem',
  default: null,
});

export const LoadingState = atom<LoadingTypes>({
  key: 'loadingStateKey',
  default: {},
});
