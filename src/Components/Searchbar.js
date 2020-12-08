import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css'


function Searchbar() {
    const [search, setSearch] = useState('')

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