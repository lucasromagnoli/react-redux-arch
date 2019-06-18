# INSTALALANDO AS DEPENDÊNCIAS

> yarn add redux-saga

# Criando os diretórios

> mkdir src/store/sagas -p

# Criando o arquivo responsável por "indexar" todos os arquivos saga

> > src/store/sagas/index.js

```
  import { all } from 'redux-saga/effects';

  export default function* rootSaga() {
    yield all([]);
  }
```

# Atualizando o arquivo src/store/index.js

```
  import createSagaMiddleware from 'redux-saga';
  import sagas from './sagas';
  const sagaMiddlewares = createSagaMiddleware();
  const middlewares = [sagaMiddlewares];
  sagaMiddlewares.run(sagas);
```

Ficando

```
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
```

# Alterar as actions (SRC/STORE/ACTIONS/FAVORITES)

REQUEST, SUCCESS, FAILURE

ficando:

```
  export const addFavoriteRequest = () => ({
    type: 'ADD_FAVORITE_REQUEST',
  });

  export const addFavoriteSuccess = () => ({
    type: 'ADD_FAVORITE_SUCCESS',
  });

  export const addFavoriteFailure = () => ({
    type: 'ADD_FAVORITE_FAILURE',
  });
```

# Criar o arquivo saga

# takeLatest -> Se tiver uma req. que estiver acontecendo naquele momento. Ele vai cancelar e sempre pegar a última.

# takeEvery -> Se o usuário clicasse 5 vezes no botão, ia rodar 5x o ADD_FAVORITE.
