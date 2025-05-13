import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoadingState {
  [key: string]: boolean;
}

const initialState: ILoadingState = {};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    start: (state, { payload }: PayloadAction<string>) => {
      state[payload] = true;
    },
    finish: (state, { payload }: PayloadAction<string>) => {
      state[payload] = false;
    },
  },
});

export const loadingActions = loadingSlice.actions;

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
