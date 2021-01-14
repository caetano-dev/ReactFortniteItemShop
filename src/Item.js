import React from 'react'
import PropTypes from 'prop-types'

const Item = props => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}

Item.propTypes = {
    name: PropTypes.string
}

export default Item
