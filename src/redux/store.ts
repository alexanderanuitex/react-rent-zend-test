import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "redux-saga/effects";
import rootReducer, { RootState } from "./rootReducer";


export default function configureStore(
  initialState?: RootState
): Store<RootState> {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools({});

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState!, enhancer);

  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer").default;
      store.replaceReducer(nextRootReducer);
    });  }

 

  return store;
}