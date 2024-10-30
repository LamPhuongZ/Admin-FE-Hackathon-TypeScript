import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import jobReducer from './reducers/jobReducer';

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    userReducer: userReducer,
    jobRedcucer: jobReducer,
  }
});

export type RootState = ReturnType<typeof store.getState> 

export type DispatchType = typeof store.dispatch;