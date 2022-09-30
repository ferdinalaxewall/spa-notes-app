import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddPage from '../pages/AddPage'
import ArchivesPage from '../pages/ArchivesPage'
import DetailNote from '../pages/DetailNote'
import HomePage from '../pages/HomePage'
import Navigation from './Navigation'

function NotesApp() {
  return (
    <div className='notes-app'>
        <header className='notes-app__header'>
            <Navigation />
        </header>
        <main>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/archives' element={<ArchivesPage />} />
                <Route path='/add' element={<AddPage />} />
                <Route path='/notes/:id' element={<DetailNote />} />
            </Routes>
        </main>
    </div>
  )
}

export default NotesApp