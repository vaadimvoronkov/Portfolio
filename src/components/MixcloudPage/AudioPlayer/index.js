import "./styles.css";
import { useReleases } from "../../../pages/MixcloudPage/hooks";
import React, { useState, useEffect, useRef } from "react";

const AudioPlayer = (props) => {
  const { releases } = props;
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const release = releases[trackIndex];
  const audioRef = useRef(new Audio(release.audiofile_url));

  const handleNextPlaylist = () => {
    if(releases.length - 1 > trackIndex){
      setTrackIndex(trackIndex + 1);
      const release = releases[trackIndex+1];
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current = new Audio(release.audiofile_url);
      audioRef.current.play();
      setIsPlaying(true)

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
  const isReady = useRef(false);
  console.log({release, audioRef });


  return (
    <div className="audio-player">
      <div className="audio-timeline-container"></div>
      <div className="audio-navigation-container">
        <button onClick={handlePrevPlaylist}>Prev</button>
        <button onClick={handlePlayPausePlaylist}>Play</button>
        <button onClick={handleNextPlaylist}>Next</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
