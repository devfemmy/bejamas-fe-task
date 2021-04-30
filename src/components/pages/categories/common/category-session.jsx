import React from 'react';
import CheckBox from './checkbox';

const CategorySession = () => {
    return (
        <div className= "">
            <h5>
                Category
            </h5>
            <CheckBox label= "People" id= "change-bill-address" />
            <CheckBox label= "Premium" id= "premium" />
            <CheckBox label= "Pets" id= "Pets" />
            <CheckBox label= "Food" id= "Food" />
            <CheckBox label= "Landmarks" id= "landmarks" />
            <CheckBox label= "Cities" id= "cities" />
            <CheckBox label= "Nature" id= "nature" />
            <hr style={{margin: '0px', marginBottom: '15px'}} />
            <h5>
                Price range
            </h5>
            <CheckBox label= "Lower than $10" id= "$10" />
            <CheckBox label= "$20 - $100" id= "$20" />
            <CheckBox label= "More than $10" id= "more" />
        </div>
    )
}

export default CategorySession