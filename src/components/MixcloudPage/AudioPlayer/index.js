import styles from "./styles.module.css";
import React, { useState, useRef, useEffect } from "react";
import playIcon from "../../../img/icons/player-play.svg";
import pauseIcon from "../../../img/icons/player-pause.svg";
import nextIcon from "../../../img/icons/player-next.svg";
import prevIcon from "../../../img/icons/player-previous.svg";

const imageUrl = "https://aerostatbg.ru";

const AudioPlayer = (props) => {
  const { releases } = props;

  const [audioState, setAudioState] = useState("stop");
  const [trackIndex, setTrackIndex] = useState(0);
  const [release, setRelease] = useState(releases[trackIndex]);
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef = useRef(new Audio(release.audiofile_url));
  const intervalRef = useRef();

  const handleNextPlaylist = () => {
    if (trackIndex < releases.length - 1) {
      playTrackByIndex(trackIndex + 1);
    } else {
      playTrackByIndex(0);
    }
  };

  const handlePrevPlaylist = () => {
    if (trackIndex - 1 >= 0) {
      playTrackByIndex(trackIndex - 1);
    } else {
      playTrackByIndex(releases.length - 1);
    }
  };

  const handlePlayPausePlaylist = () => {
    if (audioState === "stop") {
      startAudio();
    } else if (audioState === "play") {
      stopAudio();
    }
  };

  const updateProgressBar = () => {
    if (audioState === "stop" || !audioRef.current) return;
    setTrackProgress(audioRef.current.currentTime);
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(updateProgressBar, 100);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const onSeekChange = (e) => {
    const seekTo = e.target.value;
    setTrackProgress(seekTo);
    audioRef.current.currentTime = seekTo;
  };

  function startAudio() {
    if (audioState === "stop") {
      setAudioState("loading");
      audioRef.current
        .play()
        .then(() => {
          startTimer();
          setAudioState("play");
        })
        .catch(() => {
          setAudioState("stop");
        });
    }
  }

  function stopAudio() {
    if (audioState === "play") {
      audioRef.current.pause();
      setAudioState("stop");
      stopTimer();
    }
  }

  function playTrackByIndex(index) {
    setRelease(releases[index]);
    setTrackIndex(index);

    audioRef.current.stop();
    audioRef.current.src = release.audiofile_url;
    audioRef.current.load();

    setAudioState("loading");
    audioRef.current
      .play()
      .then(() => {
        startTimer();
        setAudioState("play");
      })
      .catch(() => {
        setAudioState("stop");
      });
    setTrackProgress(0);
  }

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener("loadedmetadata", () => {
      setRelease((prevRelease) => ({
        ...prevRelease,
        duration: Math.floor(audioElement.duration),
      }));
    });
  }, [release.audiofile_url]);

  return (
    <div className={styles.audioPlayer}>
      <input
        type="range"
        value={trackProgress}
        min={0}
        max={release.duration || 100}
        step="1"
        onChange={onSeekChange}
      />
      <div className={styles.navigation}>
        <div className={styles.audioInformation}>
          <div>
            <div>{release.title}</div>
            <div>{release.number}</div>
          </div>
          <img src={`${imageUrl}${release.image_url}`} alt="img"></img>
        </div>
        <div className={styles.navigationButtons}>
          <button onClick={handlePrevPlaylist}>
            <img src={prevIcon} alt="prev"></img>
          </button>
          <button onClick={handlePlayPausePlaylist}>
            {audioState === "play" ? (
              <img src={pauseIcon} alt="pause"></img>
            ) : (
              <img src={playIcon} alt="play"></img>
            )}
          </button>
          <button onClick={handleNextPlaylist}>
            <img src={nextIcon} alt="next"></img>
          </button>
        </div>
        <div className={styles.options}>Options</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
