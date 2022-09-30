import React, { Component } from 'react'
import { FiCheckCircle } from 'react-icons/fi/index.esm'
import NotesContent from '../components/NotesContent';
import { getActiveNotes } from '../utils/local-data'

export class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            tes : getActiveNotes()
        }
    }
    render() {
    return (
      <section className='active-notes'>
        <h1> <FiCheckCircle /> Active Notes </h1>
        <NotesContent />
      </section>
    )
  }
}

export default HomePage