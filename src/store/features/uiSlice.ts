import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LoadingTypes } from '../../helpers/types/LoadingType';

interface UIState {
  loading: LoadingTypes;
  searchModalVisible: boolean;
  deleteModalVisible: boolean;
  deleteModalItem: any | null;
}

const initialState: UIState = {
  loading: {},
  searchModalVisible: false,
  deleteModalVisible: false,
  deleteModalItem: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<{ key: string; value: boolean }>) {
      state.loading[action.payload.key] = action.payload.value;
    },
    setSearchModalVisible(state, action: PayloadAction<boolean>) {
      state.searchModalVisible = action.payload;
    },
    setDeleteModalVisible(state, action: PayloadAction<boolean>) {
      state.deleteModalVisible = action.payload;
    },
    setDeleteModalItem(state, action: PayloadAction<any | null>) {
      state.deleteModalItem = action.payload;
    },
  },
});

export const {
  setLoading,
  setSearchModalVisible,
  setDeleteModalVisible,
  setDeleteModalItem,
} = uiSlice.actions;
export default uiSlice.reducer;
