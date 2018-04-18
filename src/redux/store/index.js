import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { createLogger } from 'redux-logger';

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(reducer, initialState, applyMiddleware(logger));
  return store;
}
