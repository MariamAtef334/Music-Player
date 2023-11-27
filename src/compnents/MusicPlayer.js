import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc, auto }) {
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

useEffect(()=>{
 const seconds=Math.floor(audioPlayer.current.duration);
 setDuration(seconds);
},[audioPlayer?.current?.loadmetadat,audioPlayer?.current?.readyState,])
 
const calculateTime=(sec)=>{
const minutes=Math.floor(sec / 60);
const returnMinute=minutes<10?`0${minutes}`:`${minutes}`;
const seconds=Math.floor(sec % 60);
const returnSeconds=seconds<10?`0${seconds}`:`${seconds}`;

return `${returnMinute}:${returnSeconds}`;
}
const whilePlaying = () => {
  progressBar.current.value = audioPlayer.current.currentTime;
  changeCurrentTime();
  // need to run more than once
  animationRef.current = requestAnimationFrame(whilePlaying);
};
const changeProgress=()=>{
  audioPlayer.current.currentTime=progressBar.current.value;
  changeCurrentTime();
}
const changeCurrentTime=()=>{
  progressBar.current.style.setProperty("--played-width",`${progressBar.current.value / duration}%`);
  setCurrenttime(progressBar.current.value);
}
const changePlayPause = () => {
    const prevValue = isPlaying;
    if(!prevValue){
      audioPlayer.current.play();
    }
    else{
      audioPlayer.current.pause();
    }
    setPlay(!prevValue);

  };


  const changeSongLove = () => {
    setLove(!isLove);
  };

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioPlayer} />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeSongLove}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
           ref={progressBar}
           onChange={changeProgress}
          />
          <div className="duration">
           {(duration && !isNaN(duration) && calculateTime(duration))?calculateTime(duration):'00:00'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
