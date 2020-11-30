import React from 'react'
import Header from './Header'
import ItemLibrary from './ItemLibrary'
import SelectedItems from './SelectedItems'
import Footer from './Footer'

function Main() {
  return (
    <div className='main'>
        <Header />
        <div>
            <ItemLibrary />
            <SelectedItems />
        </div>
        <Footer />
    </div>
  )
}

export default Main