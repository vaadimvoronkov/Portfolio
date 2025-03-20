import styles from './styles.module.css';
import { useState, useRef, useEffect } from 'react';
import playIcon from '../../../img/icons/player-play.svg';
import pauseIcon from '../../../img/icons/player-pause.svg';
import nextIcon from '../../../img/icons/player-next.svg';
import prevIcon from '../../../img/icons/player-previous.svg';
import { useSelector, useDispatch } from 'react-redux';
import { play, loading, pause } from '../../../store/slices/audioControlSlice';
import { selectAudioState } from '../../../store/slices/audioControlSlice';
import { selectReleases } from '../../../store/slices/releases/selectors';
import {
  setRelease,
  setIndex,
  selectCurrentRelease,
  selectCurrentIndex,
} from 'src/store/slices/currentRelease/currentRelease';

const imageUrl = 'https://aerostatbg.ru';

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const audioState = useSelector(selectAudioState);
  const releases = useSelector(selectReleases);
  const release = useSelector(selectCurrentRelease);
  const releaseIndex = useSelector(selectCurrentIndex);

  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(100); // Инициализируем уровень громкости на 100%
  const audioRef = useRef(new Audio(release.audiofile_url));
  const intervalRef = useRef(null);

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
    if (releaseIndex < releases.length - 1) {
      playTrackByIndex(releaseIndex + 1);
    } else {
      playTrackByIndex(0);
    }
  };

  const handlePrevPlaylist = () => {
    if (releaseIndex - 1 >= 0) {
      playTrackByIndex(releaseIndex - 1);
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
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    } else {
      console.log('Interval не установлен');
    }
    intervalRef.current = setInterval(updateProgressBar, 100);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    } else {
      console.log('Interval не установлен');
    }
  };

  const onSeekChange = (e) => {
    const seekTo = e.target.value;
    setTrackProgress(seekTo);
    audioRef.current.currentTime = seekTo;
  };

  const onVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(e.target.value);
    audioRef.current.volume = newVolume;
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

  function playTrackByIndex(index: number) {
    dispatch(setRelease(releases[index]));
    dispatch(setIndex(index));

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
      dispatch(
        setRelease({
          ...release,
          duration: Math.floor(audioElement.duration),
        })
      );
    });
  }, [release.audiofile_url, dispatch, release]);

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
        <div className={styles.options}>
          <input
            type="range"
            value={volume}
            min={0}
            max={100}
            step="1"
            onChange={onVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
