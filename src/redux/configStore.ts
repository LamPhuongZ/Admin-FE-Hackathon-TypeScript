import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import jobReducer from './reducers/jobReducer';
import skillReducer from './reducers/skillReducer';
import jobTypeReducer from './reducers/jobTypeReducer';

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    userReducer: userReducer,
    jobRedcucer: jobReducer,
    skillReducer: skillReducer,
    jobTypeReducer: jobTypeReducer,
  }
});

export type RootState = ReturnType<typeof store.getState> 

export type DispatchType = typeof store.dispatch;