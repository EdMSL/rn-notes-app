import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';

import { AppNavigation } from '$navigation/AppNavigation';
import { configureStore } from '$redux/store.ts';
import { preload } from './src/preload';

const { store, persistor } = configureStore();
enableScreens();

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        {
          !isReady
            ? (
              <AppLoading
                startAsync={preload}
                onFinish={(): void => setIsReady(true)}
                onError={(err): void => console.log(err)}
              />
            )
            : (
              <AppNavigation />
            )
        }
      </PersistGate>
    </Provider>
  );
};

export default App;
