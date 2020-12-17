import React from 'react'
import Searchbar from './Searchbar'
import Filter from './Filter.js'
import './ItemLibrary.css'
import items from '../data/10.24.1/data/en_AU/item.json'


function ItemLibrary() {
    const itemUrl = "http://ddragon.leagueoflegends.com/cdn/10.25.1/img/item/"
    const itemId = Object.keys(items.data).map(itemId => itemId)
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
                    return <img src={el} alt="Item image" key={itemId[i]}></img>
                })}

                <img src="http://ddragon.leagueoflegends.com/cdn/10.25.1/img/item/1001.png" />
            </div>
        </div>
    )
}

export default ItemLibrary