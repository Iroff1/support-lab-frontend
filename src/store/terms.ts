import { ITerms } from '@models/auth.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ITerms = {
  termsOfUse: false,
  personalInfo: false,
  marketing: false,
};

export const termsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {
    initialState: (state) => {
      Object.assign(state, initialState);
    },
    toggleOne: (state, { payload: name }: PayloadAction<keyof ITerms>) => {
      state[name] = !state[name];
    },
    toggleAll: (state, { payload: toggle }: PayloadAction<boolean>) => {
      Object.assign(
        state,
        Object.keys(state).reduce(
          (acc, key) => ({ ...acc, [key]: toggle }), // 업데이트된 toggle 값 사용
          {} as ITerms,
        ),
      );
    },
  },
});

const termsReducer = termsSlice.reducer;

export const termsActions = termsSlice.actions;
export default termsReducer;
