import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css'


function Searchbar() {
    return (
        <div className='searchbar'>
            <FontAwesomeIcon 
                    icon={faSearch} 
                    transform='shrink-3' 
                    className='searchbar__icon' 
                />

            <input type='search' className='searchbar__search'></input>
        </div>
    );
}

export default Searchbar