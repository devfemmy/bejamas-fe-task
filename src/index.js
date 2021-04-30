import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import 'react-app-polyfill/ie11';

import { PersistGate } from 'redux-persist/integration/react';

// import store
import store, { persistor } from './store';

// import action
import { getAllProducts } from './action';

//import utils
import { definePolyfills, scrollTop } from './utils';

// import routes
import Routes from './routes';

export function Root() {
    definePolyfills();
    store.dispatch( getAllProducts() );
    scrollTop();


    return (
        <Provider store={ store } >
            <PersistGate persistor={ persistor } loading={ <span></span> } >
                <BrowserRouter basename={ '/' } >
                    <ScrollContext>
                        <Routes />
                    </ScrollContext>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render( <Root />, document.getElementById( 'root' ) );