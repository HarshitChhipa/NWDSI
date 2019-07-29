import React, {Fragment} from 'react';
import {BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Sidebar from './components/Sidebar';
import '../src/assets/styles/app.scss';
import reducers from './reducers';
import {ViewFiles} from './pages/index';
import generatedummyFileSystem from './utils/dummyFileSystem';

/**
 * Commeon Store.
 * @type {any}
 */
const store = createStore(
    reducers,
    {
        fileSystem:
            localStorage.getItem('fileSystem') &&
            Object.keys(localStorage.getItem('fileSystem')).length > 0
                ? JSON.parse(localStorage.getItem('fileSystem'))
                : generatedummyFileSystem()
    },
    composeWithDevTools()
);

function App() {
    return (

        <Provider store={store}>
            <Router>
                <BrowserRouter>
                    <Fragment>
                        <Sidebar/>
                        <ViewFiles/>
                    </Fragment>
                </BrowserRouter>
            </Router>
        </Provider>

    );
}

export default App;









