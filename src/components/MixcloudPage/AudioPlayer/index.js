import "./styles.css";
import React, { useState, useEffect, useRef } from 'react';


const AudioPlayer = (props) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const{audiofile_url, title, } = props;

  const audioRef = useRef(new Audio(audiofile_url));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const {duration} = audioRef.current;

  return <div className="audio-player"></div>;
};

export default AudioPlayer;
