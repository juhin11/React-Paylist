import React from 'react'
import './Duration.css'

export default function Duration(props) {

  return (
    <div className='playing'>
    Currently playing : {props.selectedSong}
    </div>
  )
}
