import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from 'reducers/index.js';
import { store } from './store.js';
import App from 'containers/App/App';

const combinedReducer = combineReducers(reducers);
const providerStore = store(combinedReducer);

ReactDOM.render(
    <AppContainer>
        <Provider store={providerStore}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('container'),
);

if (module.hot) {
    module.hot.accept('containers/App/App', () => {
        const NextApp = require('containers/App/App').default;

        ReactDOM.render(
            <AppContainer>
                <Provider store={providerStore}>
                    <NextApp />
                </Provider>
            </AppContainer>,
            document.getElementById('container'),
        );
    });
}
