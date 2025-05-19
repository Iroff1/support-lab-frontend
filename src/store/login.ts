import { ILogin } from '@models/account.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ILogin = {
  email: '',
  password: '',
  error: null,
};

const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    initializeForm: (state, _) => {
      Object.assign(state, initialState);
    },
    changeField: (
      state,
      {
        payload: { key, value },
      }: PayloadAction<{ key: string; value: string | boolean }>,
    ) => {
      Object.assign(state, { [key]: value });
    },
  },
});

export const loginActions = loginSlice.actions;

const loginReducer = loginSlice.reducer;
export default loginReducer;
