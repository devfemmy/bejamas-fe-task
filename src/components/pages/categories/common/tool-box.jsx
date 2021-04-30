import React from 'react';
import { connect } from 'react-redux';

import { filterSort } from '../../../../action';

function ToolBox( props ) {
    // let layoutParam = props.init ? props.init : "grid";
    // const [ layout, setLayout ] = useState( layoutParam );
    const { addClass = "" } = props;



    return (
        <nav className={ "d-flex align-items-center justify-content-end toolbox " + addClass }>
            <div className="toolbox-right">
                <div className="toolbox-item toolbox-sort">
                    <label>Sort By:</label>

                    <div className="select-custom">
                        <select name="orderby" className="form-control" defaultValue="menu_order" onChange={ ( e ) => props.filterSort( e.currentTarget.value ) }>
                            <option value="menu_order">Default sorting</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default connect( null, { filterSort } )( ToolBox );