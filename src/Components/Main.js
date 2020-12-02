import React from 'react'
import Header from './Header'
import ItemMain from './ItemMain'
import Footer from './Footer'
import './Main.css'

function Main() {
  return (
    <div className='main'>
        <Header />
        <ItemMain />
        <Footer />
    </div>
  )
}

export default Main