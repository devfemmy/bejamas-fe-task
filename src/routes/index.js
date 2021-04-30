import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { initStickyOffset } from '../utils';



let HomePage = React.lazy( () => import( './home-route' ) );

export default function Routes() {
    initStickyOffset();

    return (
        <React.Suspense fallback={ <span></span> }>
            <Switch>
                <Route path={ `${ process.env.PUBLIC_URL }/` } component={ HomePage } />
            </Switch>
        </React.Suspense>
    )
}