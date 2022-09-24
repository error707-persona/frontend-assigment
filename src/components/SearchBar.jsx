import React from 'react'
import { useState } from 'react'
import { IconSearch,IconLayoutList,IconLayoutGrid } from '@tabler/icons'
const SearchBar = () => {
    const [layouttoggle, setlayouttoggle] = useState(false);
    const onHandle = () => {
        setlayouttoggle(!layouttoggle);
    }
    return (
        
        <div className='container'>
            <input type="text" className='searchbar' placeholder='Search notes'/>
           
        </div>
    )
}

export default SearchBar