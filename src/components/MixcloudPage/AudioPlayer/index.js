import "./styles.css";
import React, { useState, useRef, useEffect } from "react";
import playIcon from "../../../img/icons/player-play.svg";
import pauseIcon from "../../../img/icons/player-pause.svg";
import nextIcon from "../../../img/icons/player-next.svg";
import prevIcon from "../../../img/icons/player-previous.svg";

const AudioPlayer = (props) => {
  const { releases } = props;
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  let release = releases[trackIndex];
  const audioRef = useRef(new Audio(release.audiofile_url));

  const imageUrl = "https://aerostatbg.ru";

  console.log(release);
  const handleNextPlaylist = () => {
    if (trackIndex < releases.length - 1) {
      setTrackIndex(trackIndex + 1);
      release = releases[trackIndex + 1];
      setIsPlaying(false);
      audioRef.current = new Audio(release.audiofile_url);
    } else {
      setTrackIndex(0);
    }
  };
  const handlePrevPlaylist = () => {
    if (trackIndex > 0) {
      setTrackIndex(trackIndex - 1);
      release = releases[trackIndex - 1];
      setIsPlaying(false);
      audioRef.current = new Audio(release.audiofile_url);
    }
    else{
      setTrackIndex(releases.length-1);
    }
  };
  const handlePlayPausePlaylist = () => {
    if (isPlaying === false) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };
  console.log({ release, audioRef });

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="audio-player">
      <div className="audio-timeline-container"></div>
      <div className="audio-navigation-container">
        <div className="audio-navigation-container-buttons">
          <button onClick={handlePrevPlaylist}>
            <img src={prevIcon} alt="prev"></img>
          </button>
          <button onClick={handlePlayPausePlaylist}>
            {isPlaying === true ? (
              <img src={pauseIcon} alt="pause"></img>
            ) : (
              <img src={playIcon} alt="play"></img>
            )}
          </button>
          <button onClick={handleNextPlaylist}>
            <img src={nextIcon} alt="next"></img>
          </button>
        </div>
        <div className="audio-navigation-container-info">
          <div>
            <div>{release.title}</div>
            <div>{release.number}</div>
          </div>
          <img src={`${imageUrl}${release.image_url}`} alt="img"></img>
        </div>
        <div className="audio-navigation-container-options">Options</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
