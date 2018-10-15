import { createStore, applyMiddleware } from 'redux';
import thunkMiddlewear from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddlewear,
      loggerMiddleware
    )
  );
};

export default configureStore;
