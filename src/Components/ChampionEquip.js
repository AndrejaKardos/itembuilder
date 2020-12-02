import React from 'react'
import SelectedItems from './SelectedItems'
import ChampionStats from './ChampionStats'

function ChampionEquip() {
    return(
        <div className='championeqip'>
            <SelectedItems />
            <ChampionStats />
        </div>
    );
}

export default ChampionEquip