import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./RootReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
  whitelist: ["AllReducers"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ** init middleware
const middleware = [thunk];

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ** Create store

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export { persistor, store };
