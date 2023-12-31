import React, { useEffect, useState } from 'react'
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import { Songs } from './Songs';
import MusicPlayer from './MusicPlayer';
const AudioList = () => {
    const [songs,setSongs]=useState(Songs);
    const [song, setSong] = useState(songs[0].song);
    const [img, setImage] = useState(songs[0].imgSrc);
    const [auto, setAuto] = useState(false);
    
  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
console.log(Songs[0].imgSrc)
    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);
    const changeFavourte=(id)=>{
       Songs.forEach(song => {
        if(song.id===id){
            song.favourite=!song.favourite;
        }
       });
       setSongs([...songs])
    }
    const mainSong=(songSrc,songImg)=>{
setSong(songSrc);
setImage(songImg);
setAuto(true);
    }
  return (
    <div className='AudioList'>
        <h2 className='title'>The list <span>{Songs.length} songs</span></h2>
        <div className='songsContainer'>
            {Songs && Songs.map((song,index)=>(<div className='songs' key={song.id}> 
            <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
                  <div className='song' onClick={()=>mainSong(song?.song,song?.imgSrc)}>
                  <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                    <div className='section'>

                        <p className='songName'>
                            {song?.songName}
                            <span className='songSpan'>
                               {song?.artist}
                            </span>
                        </p>
                        <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,490,102
                    </p>

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03:04
                    </p>
                    <div
                      className="favourite" onClick={()=>changeFavourte(song?.id)}>
                     {song?.favourite? <i>
                          <FaHeart />
                        </i>
                    : <i>
                    <FaRegHeart />
                  </i>}
                       
                       
                     
                    </div>
                  </div>
                    </div>
                  </div>
                  
            </div>))}
            
        </div>
        <MusicPlayer song={song} imgSrc={img} autoplay={auto} />
    </div>
  )
}

export default AudioList