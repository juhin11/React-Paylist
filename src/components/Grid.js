import React , {useState} from 'react'
import QRcomponent from './QRcomponent'
import Duration from './Duration';
import './Grid.css'
import img1 from '../image/song.jpeg'
import img2 from '../image/wohRaat.jpeg'
import img3 from '../image/galatFehmi.jpeg'
import img4 from '../image/wohDin.jpeg'
import img5 from '../image/ikLamha.jpeg'
import img6 from '../image/zaraSa.jpeg'
import img7 from '../image/tumTak.jpeg'
import img8 from '../image/teraMera.jpeg'
import img9 from '../image/azeem.jpeg'
import img10 from '../image/ranjha.jpeg'
 

export default function Grid() {

  // const [apiData,setApiData] = useState();

  // const Juhi = async()=>{
  //     const Api = 'https://icanhazdadjoke.com/slack';
  //     const res = await fetch(Api);
  //     const data = await res.json();
  //     setApiData(data);

  //     alert(apiData.attachments[0].text)
  // }

  const themeChange = ()=>{
      theme=='light'?setTheme('dark'):setTheme('light');
  }

  const [theme,setTheme] = useState('light');
  const [songs, setSongs] = useState('Juhiiiiiiiii')

  return (
    <div className={theme} >
      <div className='Grid'>
          <QRcomponent songName='Jiya' Singer='Arijit Singh' movieName='Gunday' imgSRC = {img1} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Woh raat' Singer='Shivoryx' imgSRC = {img2} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Galat Fehmi' Singer='Asim azhar' imgSRC = {img3} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Woh din' Singer='Arijit Singh' movieName='Chichchore' imgSRC = {img4} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Ek lamha' Singer='Azan khan' imgSRC = {img5} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Zara sa' Singer='KK' movieName='Jannat' imgSRC = {img6} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Tum tak' Singer='Javed ali' movieName='Ranjhana' imgSRC = {img7} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Tera mera rishta' Singer='Shreya ghoshal' movieName='Jalebi' imgSRC = {img8} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Azeem' Singer='AR rehman' movieName='Jodha Akbar' imgSRC = {img9} setActive={(song)=>{setSongs(song)}}/>
          <QRcomponent songName='Ranjha' Singer='Jasleen Royal' movieName='Shreshah'imgSRC = {img10} setActive={(song)=>{setSongs(song)}}/> 
                
      </div>
        <Duration selectedSong={songs}/>
      <button onClick={themeChange}>Set {theme}</button>
    </div>
  )
}
