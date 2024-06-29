import { configureStore } from "@reduxjs/toolkit";

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { userChatReducer } from "./userChat/userChatSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { userAuthReducer } from "./userAuth/userAuthSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedRootReducer = persistReducer(persistConfig, userAuthReducer);

export const store = configureStore({
  reducer: {
    userAuth: persistedRootReducer,
    userChat: userChatReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export default store;
export const persistor = persistStore(store);
