import React from 'react';

const CheckBox = (props) => {
    return (
    <div className="form-group-custom-control">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id={props.id}/>
                <label style= {{fontSize: '1.45rem'}} className="custom-control-label" htmlFor={props.id}>
                    {props.label}
                </label>
        </div>
    </div>
    )
}

export default CheckBox