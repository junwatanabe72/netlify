import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import App from './App';
import reducers, { router } from './reducers/Combine';
import mySaga from './sagas';
import { GlobalStyle } from './utils/styled/globalStyle';
import Toastify from './utils/Toastify';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers(router),
  compose(composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(router))))
);

// // //saga
sagaMiddleware.run(mySaga);
//saga

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ConnectedRouter history={router}>
        <Toastify />
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
