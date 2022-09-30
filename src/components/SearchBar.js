import React from 'react'
import { FiSearch } from 'react-icons/fi/index.esm'

function SearchBar() {
  return (
    <div className='search-bar-group'>
      <label>
        <FiSearch />
      </label>
      <input type="text" placeholder='Find notes by title...' />
    </div>
  )
}

export default SearchBar