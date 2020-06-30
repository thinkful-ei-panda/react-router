import React from 'react'
import Folder from './Folder'

export default function FolderList(props) {
  const { folders } = props
  console.log(folders)
  return (
    <ul className='folderList'>
      {folders.map (folder => 
        <Folder
          key={folder.id} 
          {...folder}
        />
      )}
    </ul>
  )
}
