import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Filter from './Filter.js'
import './ItemLibrary.css'
import items from '../data/10.24.1/data/en_AU/item.json'


function ItemLibrary() {
    const data = items.data
    Object.keys(data).map(key => {
        const item = data[key]
    })

    console.log(Object.keys(data).map(id => 
        data[id].name    
    ))

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