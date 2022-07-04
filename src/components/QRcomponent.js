import React from 'react'
import image from '../image/wohRaat.jpeg'
import './QRcomponent.css'

export default function QRcomponent(props) {
  const song = props.songName;
  const singer = props.Singer;
  const movie = props.movieName;
  
  const setAciveSong = ()=>{
      props.setActive(song);
  }

  return (
    <div className='container' onClick={setAciveSong}>
        <img src={props.imgSRC} alt="" />
        <div className='text'>
            <h1>{song}</h1>
            <p>Singer: {singer} <br/> Movie: {movie?movie:'Album'} </p> 
        </div>
    </div>
  )
}
