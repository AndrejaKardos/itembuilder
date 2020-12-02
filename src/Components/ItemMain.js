import React from 'react'
import ItemLibrary from './ItemLibrary'
import ChampionEquip from './ChampionEquip'
import './ItemMain.css'

function ItemMain() {
    return (
        <div className='itemmain'>
            <ItemLibrary />
            <ChampionEquip />
        </div>
    );
}

export default ItemMain