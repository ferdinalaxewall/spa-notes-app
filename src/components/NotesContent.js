import React from 'react'
import NotesList from './NotesList'
import SearchBar from './SearchBar'

function NotesContent() {
  return (
    <>
        <SearchBar />
        <NotesList />
    </>
  )
}

export default NotesContent