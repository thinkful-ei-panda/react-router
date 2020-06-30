import React from 'react'

export default function Folder(props) {
  console.log(props)
  return (
    <li>
      <p>{props.name}</p>
    </li>
  )
}
