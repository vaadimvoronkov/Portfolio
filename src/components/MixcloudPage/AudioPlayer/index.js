import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import playIcon from "../../../img/icons/player-play.svg";
import pauseIcon from "../../../img/icons/player-pause.svg";
import nextIcon from "../../../img/icons/player-next.svg";
import prevIcon from "../../../img/icons/player-previous.svg";

const AudioPlayer = (props) => {
  const { releases } = props;
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const release = releases[trackIndex];
  const audioRef = useRef(new Audio(release.audiofile_url));

  const handleNextPlaylist = () => {
    if (releases.length - 1 > trackIndex) {
      setTrackIndex(trackIndex + 1);
      const release = releases[trackIndex + 1];
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current = new Audio(release.audiofile_url);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const handlePrevPlaylist = () => {
    if (trackIndex > 0) setTrackIndex(trackIndex - 1);
  };
  const handlePlayPausePlaylist = () => {
    if (isPlaying === false) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };
  console.log({ release, audioRef });

  return (
    <div className="audio-player">
      <div className="audio-timeline-container"></div>
      <div className="audio-navigation-container">
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
    </div>
  );
};

export default AudioPlayer;
