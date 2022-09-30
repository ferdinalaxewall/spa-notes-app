import React, { Component } from 'react'
import { FiArchive } from 'react-icons/fi/index.esm';
import NotesContent from '../components/NotesContent';
import { getArchivedNotes } from '../utils/local-data';

export class ArchivesPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            tes : getArchivedNotes()
        }
    }
  render() {
  this.state.tes.length === 0 ? console.log("kosong") : console.log("tidak kosong")
    return (
      <section className='archived-notes'>
        <h1> <FiArchive /> Archived Notes </h1>
        <NotesContent />
      </section>
    )
  }
}

export default ArchivesPage