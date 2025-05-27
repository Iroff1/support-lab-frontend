import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loading';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import authReducer from './auth';
import termsReducer from './terms';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
    terms: termsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
