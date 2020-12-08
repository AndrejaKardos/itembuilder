import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function Searchbar() {
    return (
        <div className='searchbar'>
            <FontAwesomeIcon 
                icon={faSearch} 
                transform='shrink-1' 
                className='searchbar__icon' 
            />
        </div>
    );
}

export default Searchbar