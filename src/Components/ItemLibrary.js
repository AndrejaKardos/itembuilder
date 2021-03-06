import React from 'react'
import Searchbar from './Searchbar'
import Filter from './Filter.js'
import './ItemLibrary.css'
import items from '../data/10.24.1/data/en_AU/item.json'


function ItemLibrary() {
    const itemUrl = "http://ddragon.leagueoflegends.com/cdn/10.25.1/img/item/"
    const itemIds = Object.keys(items.data).map(itemId => itemId)
    const itemNames = Object.keys(items.data).map(id => items.data[id].name)
    const itemImages = Object.keys(items.data).map(key => itemUrl + items.data[key].image.full)

    return (
        <div className="itemlibrary">
            <Searchbar />
            <Filter />
            <div>EPIC</div>
            <div>LEGENDARY</div>
            <div>MYTHIC</div>
            <div>
                {itemImages.map((el, i) => {
                    return <img src={el} alt={itemNames[i]} key={itemIds[i]} />
                })}
            </div>
        </div>
    )
}

export default ItemLibrary