import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import GridProduct from './common/grid-product';
import ToolBox from './common/tool-box';
import Pagination from '../../features/pagination';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';
import CategorySession from './common/category-session';
import TopBanner from './top-banner';

function HomePage( props ) {
    const [ curPage, setCurPage ] = useState( 1 );
    const [ layout, setLayout ] = useState( "grid" );
    const [ productCount, setProductCount ] = useState( 0 );
    const [ displayCount, setDisplayCount ] = useState( 6 );

    useEffect( () => {
        let imgLoad = imagesLoaded( ".product-group" );

        if ( document.querySelector( '.skeleton-body' ) ) {
            document.querySelector( '.skeleton-body' ).classList.remove( 'loaded' );
            imgLoad.on( "done", function () {
                document.querySelector( '.skeleton-body' ) && document.querySelector( '.skeleton-body' ).classList.add( 'loaded' );
            } )
        }
    } )

    const gridType = ( layoutParam ) => {
        if ( layout !== layoutParam ) {
            setLayout( layoutParam );
        }
    }

    const onChangeProductCount = ( countParam ) => {
        if ( productCount !== countParam )
            setProductCount( countParam );
    }

    const onChangeCurPage = ( curPageParam ) => {
        if ( curPage !== curPageParam ) {
            setCurPage( curPageParam );
        }
    }

    const onChangeDisplayCount = ( countParam ) => {
        if ( displayCount !== countParam ) {
            setDisplayCount( countParam );
        }
    }

    return (
        <>
            <Helmet>
                <title>Bejamas</title>
            </Helmet>

            <h1 className="d-none">Bejamas</h1>

            <div className="main">
                <div className="container mt-2">
                    <TopBanner />
                    <div className= "d-flex justify-content-between align-items-center">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Photography</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Premium Photos</li>
                            </ol>
                        </nav>
                        </div>
                    <div>
                        <ToolBox gridType={ gridType } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } />
                    </div>
                   
                    </div>
                    <div className="row">
                        <div className="col-lg-10 skeleton-body skel-shop-products">
                            <GridProduct curPage={ curPage }
                                type={ layout }
                                productCount={ onChangeProductCount }
                                displayCount={ displayCount }
                            />
                            <Pagination count={ productCount } curPage={ onChangeCurPage } layout={ layout } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } filters={ props.filter } />
                        </div>
                        <SidebarToggle />
                        <aside className="sidebar-shop col-lg-2 order-lg-first mobile-sidebar">
                            {/* <ShopSidebar /> */}
                            <CategorySession />
                        </aside>
                    </div>
                </div>
                <div className="mb-5"></div>
            </div>
        </>
    )
}

const mapStateToProps = ( state, props ) => (
    {
        filter: state.filter ? state.filter : []
    }
)

export default connect( mapStateToProps, {} )( HomePage );