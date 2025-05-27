import { ITermsOfUse } from '@models/auth.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ITermsOfUse = {
  termsOfUse: false,
  personalInfo: false,
  subscribeEvent: false,
};

export const termsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {
    initialState: (state, _) => {
      state = initialState;
    },
    toggleOne: (state, { payload: name }: PayloadAction<keyof ITermsOfUse>) => {
      state[name] = !state[name];
    },
    toggleAll: (state, { payload: toggle }: PayloadAction<boolean>) => {
      Object.assign(
        state,
        Object.keys(state).reduce(
          (acc, key) => ({ ...acc, [key]: toggle }), // 업데이트된 toggle 값 사용
          {} as ITermsOfUse,
        ),
      );
    },
  },
});

const termsReducer = termsSlice.reducer;

export const termsActions = termsSlice.actions;
export default termsReducer;
