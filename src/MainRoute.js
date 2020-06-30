import React from 'react'
import FolderList from './FolderList'
import NoteList from './NoteList'

export default class MainRoute extends React.Component {
  
  static defaultProps = {
    folders:[],
    notes:[]
  }

  render () {
    const {folders, notes } = this.props
    console.log(folders, notes)
    return (
      <div className='mainRoute'>
        <section className='sidebar'>
          <FolderList folders={folders}/>
        </section>
        <section className='notes'>
          <NoteList notes={notes}/>
        </section>
      </div>
    )
  }
}
