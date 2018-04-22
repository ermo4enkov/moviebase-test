import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    reducer,
    initialState,

    composeWithDevTools(applyMiddleware(thunk, logger)),
  );
  return store;
}
