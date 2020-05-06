import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppNavigation } from '$navigation/AppNavigation';
import { configureStore } from '$redux/store.ts';

const { store, persistor } = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
