// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import citiesReducer from './reducers/cities_reducer';
import activeCityReducer from './reducers/active_city_reducer';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, /* preloadedState, */
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
