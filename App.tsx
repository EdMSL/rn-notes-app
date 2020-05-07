import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';

import { AppNavigation } from '$navigation/AppNavigation';
import { configureStore } from '$redux/store.ts';

const { store, persistor } = configureStore();
enableScreens();

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
