import React from 'react'
import './Title.css'

export default function Title(props) {

    const Name = props.userName;

  return (
    <div className='playlist'>
    <h1>{Name}'s Playlist duration {props.duration}Hr ❣🎼</h1>
    </div>
  )
}
