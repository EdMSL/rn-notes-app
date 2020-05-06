import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Store,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { PersistConfig, Persistor } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';

import { userReducer, IUserRootState } from '$modules/user/reducer.ts';
import { noteReducer, INoteRootState } from '$modules/note/reducer.ts';
// import userSaga from '$modules/user/sagas';
// import contentSaga from '$modules/content/sagas';

const userPersistConfig: PersistConfig = {
  key: 'user',
  whitelist: ['anyValue'],
  storage: AsyncStorage,
};

const contentPersistConfig: PersistConfig = {
  key: 'note',
  whitelist: [],
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
// export const history = createBrowserHistory();

const rootReducer = combineReducers({
  // note: noteReducer,
  // user: userReducer,
  user: persistReducer(userPersistConfig, userReducer),
  content: persistReducer(contentPersistConfig, noteReducer),
  // router: connectRouter(history),
});

export type IAppState = ReturnType<typeof rootReducer>

// const composeEnhancers = typeof window === 'object'
// /* eslint-disable @typescript-eslint/no-explicit-any */
//   && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose;
// /* eslint-enable @typescript-eslint/no-explicit-any */

export const store = createStore(
  rootReducer,
  // composeEnhancers(
  compose(
    applyMiddleware(
      // routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

export function configureStore(): { store: Store<IAppState>, persistor: Persistor, } {
  // sagaMiddleware.run(userSaga);
  // sagaMiddleware.run(contentSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}
