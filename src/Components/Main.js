import React from 'react'
import Header from './Header'
import ItemLibrary from './ItemLibrary'
import SelectedItems from './SelectedItems'
import ChampionStats from './ChampionStats'
import Footer from './Footer'
import './Main.css'

function Main() {
  return (
    <div className='main'>
        <Header />
        <div className='main__items'>
            <ItemLibrary />
            <SelectedItems />
            <ChampionStats />
        </div>
        <Footer />
    </div>
  )
}

export default Main