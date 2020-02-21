import React from 'react';
import ReactDOM from 'react-dom';
import App from './_components/App';
import './css/index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './_store/store'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, document.getElementById('root'));

module.hot.accept();