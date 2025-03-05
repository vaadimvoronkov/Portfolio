import styles from './styles.module.css';
import React, { useState, useRef, useEffect } from 'react';
import playIcon from '../../../img/icons/player-play.svg';
import pauseIcon from '../../../img/icons/player-pause.svg';
import nextIcon from '../../../img/icons/player-next.svg';
import prevIcon from '../../../img/icons/player-previous.svg';
import { useSelector, useDispatch } from 'react-redux';
import { play, loading, pause } from '../../../store/slices/audioControlSlice';
import { selectAudioState } from '../../../store/slices/audioControlSlice';
import { selectReleases } from '../../../store/slices/releasesSlice';

const imageUrl = 'https://aerostatbg.ru';

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const audioState = useSelector(selectAudioState);
  const releases = useSelector(selectReleases);

  const [trackIndex, setTrackIndex] = useState(0);
  const [release, setRelease] = useState(releases[trackIndex]);
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef = useRef(new Audio(release.audiofile_url));
  const intervalRef = useRef();

  const setPlay = () => {
    dispatch(play());
  };
  const setPause = () => {
    dispatch(pause());
  };
  const setLoading = () => {
    dispatch(loading());
  };

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
    if (audioState === 'stop') {
      startAudio();
    } else if (audioState === 'play') {
      stopAudio();
    }
  };

  const updateProgressBar = () => {
    if (audioState === 'stop' || !audioRef.current) return;
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
    if (audioState === 'stop') {
      setLoading();
      audioRef.current
        .play()
        .then(() => {
          startTimer();
          setPlay();
        })
        .catch(() => {
          setPause();
        });
    }
  }

  function stopAudio() {
    if (audioState === 'play') {
      audioRef.current.pause();
      setPause();
      stopTimer();
    }
  }

  function playTrackByIndex(index) {
    setRelease(releases[index]);
    setTrackIndex(index);

    audioRef.current.pause();
    audioRef.current.src = release.audiofile_url;
    audioRef.current.load();

    setLoading();
    audioRef.current
      .play()
      .then(() => {
        startTimer();
        setPlay();
      })
      .catch(() => {
        setPause();
      });
    setTrackProgress(0);
  }

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener('loadedmetadata', () => {
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
        <div className={styles.buttonsContainer}>
          <button onClick={handlePrevPlaylist}>
            <img src={prevIcon} alt="prev"></img>
          </button>
          <button
            className={styles.playpauseButton}
            onClick={handlePlayPausePlaylist}
          >
            {audioState === 'play' ? (
              <img src={pauseIcon} alt="pause"></img>
            ) : (
              <img src={playIcon} alt="play"></img>
            )}
          </button>
          <button onClick={handleNextPlaylist}>
            <img src={nextIcon} alt="next"></img>
          </button>
        </div>
        <div className={styles.audioInformation}>
          <div>
            <div>{release.title}</div>
            <div>{release.number}</div>
          </div>
          <img src={`${imageUrl}${release.image_url}`} alt="img"></img>
        </div>
        <div className={styles.options}>Options</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
