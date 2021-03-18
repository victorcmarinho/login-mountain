import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routes from './routes';
import GlobalStyles from './styles/global';

import rootReducer from './reducers';
import { AuthProvider } from './hook/login';
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Routes />
          <GlobalStyles />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
