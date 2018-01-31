import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from 'reducers/index';

export function store(reducer) {
    const loggerMiddleware = createLogger({
        level: 'info',
        collapsed: true,
    });

    const appliedMiddleware = applyMiddleware(...[thunk, loggerMiddleware]);

    let createdStore;
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        createdStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
            appliedMiddleware,
        )(createStore);
    } else {
        createdStore = compose(appliedMiddleware)(createStore);
    }

    store = createdStore(reducers());

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('reducers/index', () => {
            const nextReducer = require('reducers/index').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
