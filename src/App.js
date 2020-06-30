import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import MainRoute from './MainRoute'
import DynamicFolderRoute from './DynamicFolderRoute'
import DynamicNoteRoute from './DynamicNoteRoute'
import STORE from './store'

class App extends React.Component {
  
  state = {
    folders: [],
    notes: [],
    fields:[]
  }

  /* setFoldersAndNotes =  */

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder ]
    })
  }

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note ]
    })
  }
  
  render () {
    const {folders, notes } = STORE
    return (
      <div className="App">
        <header>
          <Link to={'/'}><h1>Noteful</h1></Link>
        </header>
        <Route
          path='/add-folder'
          render={({history}) => {
            return <DynamicFolderRoute
              onAddFolder = {this.addFolder}
              onClickCancel = {() => history.push('/')}
              />
          }}
        />

        <Route
          path='/add-note'
          render={({history}) => {
            return <DynamicNoteRoute
              onAddNote = {this.addNote}
              onClickCancel = {() => history.push('/')}
              />
          }}
        />

        <Route
          exact path='/'
          render={ () =>
            <MainRoute
              folders={folders}
              notes={notes}
            />}
        />
      </div>
    )
  }
}

export default App;
