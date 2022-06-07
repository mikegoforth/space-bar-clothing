import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [sagaMiddleware, logger],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
