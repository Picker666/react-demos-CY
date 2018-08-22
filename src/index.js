import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import {
    // BrowserRouter,
    HashRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer from './redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = ({ dispatch, getState }) => (storeDispatch) => (action) => {
    if (typeof action === 'function') {
        console.log(action);
        return action(dispatch, getState);
    } else {
        console.log(action);
        return storeDispatch(action);
    }
};

// const createStoreWithMiddleware = applyMiddleware(logger());
// const enhancer = compose(createStoreWithMiddleware);
const enhancer = (createStoreApi) => applyMiddleware(logger)(createStoreApi);
const store = createStore(reducer, enhancer);

// const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        {/* <BrowserRouter> */}
        <HashRouter>
            <App />
        </HashRouter>
        {/* </BrowserRouter> */}
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
