import React from 'react'
import { Link } from 'react-router-dom';
import { FiArchive } from "react-icons/fi/index.esm";


function Navigation() {
  return (
    <nav className='notes-app__navigation'>
        <h1 className='navigation__brand'>
            <Link to="/">
                Notes App
            </Link>
        </h1>

        <Link to="/archives" className='navigation__archives'>
            <FiArchive />
            Archives
        </Link>
    </nav>
  )
}

export default Navigation