import React from 'react'

const ProductCard = props => {
    const {category,id} = props;
    return(
        <li>
            <p className='names'>{category}</p>
            <p>{id}</p>
            <p>jampani</p>
        </li>
    )
}

export default ProductCard