import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const middleware = [thunk];

// Combina los "store enhancers" en una sola función
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer';

// const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

// const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
// );
// export default store;