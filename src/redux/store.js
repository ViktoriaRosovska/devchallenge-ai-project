import { configureStore } from "@reduxjs/toolkit";

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { userChatReducer } from "./userChat/userChatSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedRooReducer = persistReducer(persistConfig, userChatReducer);

export const store = configureStore({
  reducer: {
    userChat: persistedRooReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
