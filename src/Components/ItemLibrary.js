import React from 'react'
import Filter from './Filter.js'
import './ItemLibrary.css'

function ItemLibrary() {
    return (
        <div className="itemlibrary">
            <div>Search</div>
            <Filter />
            <div>EPIC</div>
            <div>LEGENDARY</div>
            <div>MYTHIC</div>
        </div>
    )
}

export default ItemLibrary