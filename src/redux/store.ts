import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["userReducer"],
};

const pReducer = persistReducer(persistConfig, combineReducers({}));

const store = configureStore({ reducer: pReducer });

export const persistor = persistStore(store);
export default store;


