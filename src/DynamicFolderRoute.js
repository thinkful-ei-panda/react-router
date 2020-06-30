import React from 'react'

export default function DynamicFolderRoute(props) {
  return (
    <form onSubmit={props.handleNewFolder}>
      <legend>Add Folders</legend>
      <fieldset>
        <label htmlFor='folderName'>New folder name: </label>
        <input 
        type='text' 
        id='folderName' 
        name='folderName'
        onChange={props.updateFolderField}
        ></input>
        <button type='submit'>Save</button>
      </fieldset>
    </form>
  )
}
