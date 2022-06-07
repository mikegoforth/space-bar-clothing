import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  // TODO: investigate async actions in ootb thunk. Currently custom import.
  middleware: [thunk, logger],
  devTools: true
});

export const persistor = persistStore(store);
