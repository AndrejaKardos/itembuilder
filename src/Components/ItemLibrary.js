import React from 'react'
import Searchbar from './Searchbar'
import Filter from './Filter.js'
import './ItemLibrary.css'

function ItemLibrary() {
    return (
        <div className="itemlibrary">
            <Searchbar />
            <Filter />
            <div>EPIC</div>
            <div>LEGENDARY</div>
            <div>MYTHIC</div>
        </div>
    )
}

export default ItemLibrary