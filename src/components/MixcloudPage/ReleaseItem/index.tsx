import styles from './styles.module.css';
import PlayIcon from '../PlayIcon';
import { useState } from 'react';

const imageUrl = 'https://aerostatbg.ru';

const ReleaseItem = (props) => {
  const { release, index } = props;
  const [isPlaying, setIsPlaying] = useState(null);

  const handlePlayPause = (index: number) => {
    if (isPlaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };
  return (
    <li key={index} className={styles.release}>
      <div className={styles.releaseHeader}>
        <h2>{release.title}</h2>
        <p>{release.number}</p>
        <div
          className={styles.imageContainer}
          onClick={() => handlePlayPause(index)}
        >
          <img
            src={`${imageUrl}${release.image_url}`}
            alt=""
            className={styles.image}
          />
          <PlayIcon isPlaying={isPlaying} index={index} />
        </div>
      </div>
      <div className={styles.tracklistContainer}>
        <h3>Список треков:</h3>
        <div className={styles.tracklist}>
          {release.composition_list.map((composition, index) => (
            <div key={index}>{composition.composition_name}</div>
          ))}
        </div>
      </div>
      <div>
        <p>Дата: {release.date}</p>
        <p>
          Оценка: <span className={styles.rating}>{release.rating}</span>
        </p>
        <p>
          Количество оценок:{' '}
          <span className={styles.votes}>{release.vote_count}</span>
        </p>
      </div>
    </li>
  );
};

export default ReleaseItem;
