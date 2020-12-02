import React from 'react'
import SelectedItems from './SelectedItems'
import ChampionStats from './ChampionStats'
import Runes from './Runes'

function ChampionEquip() {
    return(
        <div className='championeqip'>
            <SelectedItems />
            <ChampionStats />
            <Runes />
        </div>
    );
}

export default ChampionEquip