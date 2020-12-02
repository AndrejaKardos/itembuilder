import React from 'react'
import ItemLibrary from './ItemLibrary'
import ChampionEquip from './ChampionEquip'

function ItemMain() {
    return (
        <div className='itemmain'>
            <ItemLibrary />
            <ChampionEquip />
        </div>
    );
}

export default ItemMain