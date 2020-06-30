import React from 'react'
import Note from './Note'


export default function NoteList(props) {
  const { notes } = props
  return (
    <ul className='noteList'>
      {notes.map (note => 
        <Note
          key={note.id} 
          {...note}
        />
      )}
    </ul>
  )
}
