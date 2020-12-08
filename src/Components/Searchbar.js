import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css'


function Searchbar() {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState('')


    // To be added to mapping later
    const filteredItems = items.filter( item => {
        return item.name.toLowerCase().includes( search.toLowerCase() )
    })

    return (
        <div className='searchbar'>
            <FontAwesomeIcon 
                    icon={faSearch} 
                    transform='shrink-3' 
                    className='searchbar__icon' 
                />

            <input 
                type='text' 
                className='searchbar__search'
                onChange={ e => setSearch(e.target.value) }
            />
        </div>
    );
}

export default Searchbar