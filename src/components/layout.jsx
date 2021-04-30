import React, { useEffect, useState } from 'react';
import { matchPath } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


import { init } from '../utils';

import 'react-image-lightbox/style.css';
import MyHeader from './common/my_header';

function Layout( props ) {
    let matchedCount = 0;
    const [ prevPath, setPrevPath ] = useState( '' );
    const CloseButton = ( { YouCanPassAnyProps, closeToast } ) => (
        <i
            className="icon-cancel"
            onClick={ closeToast }
            style={ { display: 'flex', alignItems: 'center' } }
        >
        </i>
    );



    useEffect( () => {
        setPrevPath( props.location.pathname );

        setTimeout( () => {
            document.querySelector( 'body' ).classList.add( 'loaded' );
            document.querySelector( '#root' ).classList.add( 'loaded' );
        }, 200 );
    }, [ window.location.pathname ] )

    useEffect( () => {
        init();

        // show 404 page
        while ( matchedCount < props.children.length && !matchPath( window.location.pathname, { path: props.children[ matchedCount ].props.path, exact: true } ) ) {
            matchedCount++;
        }

        if ( props.children && !props.children.length ) {
            if ( ( matchPath( window.location.pathname, { path: props.children.props.path, exact: true } ) ) ) {
                matchedCount = 1;
            }
        }

        if ( ( matchedCount >= props.children.length ) || ( props.children && !props.children.length && matchedCount === 0 ) ) {
            window.location = process.env.PUBLIC_URL + "/pages/404";
        }
    } )

    useEffect( () => {
        if ( window.location.pathname === ( process.env.PUBLIC_URL + '/' ) ) {
            document.querySelector( 'html' ).style.overflowX = "hidden";
        } else {
            document.querySelector( 'html' ).style.overflowX = "visible";
        }
    } )

    return (
        <div className="">

            <div className="page-wrapper">
                <MyHeader />

                { props.children }
            </div>

            <ToastContainer autoClose={ 2000 } closeButton={ <CloseButton /> } />
        </div>
    )
}

export default Layout;