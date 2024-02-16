import { configureStore } from "@reduxjs/toolkit";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
