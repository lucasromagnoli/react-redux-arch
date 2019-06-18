import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddlewares = createSagaMiddleware();
const middlewares = [sagaMiddlewares];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

const store = createStore(reducers, composer);
sagaMiddlewares.run(sagas);
export default store;
