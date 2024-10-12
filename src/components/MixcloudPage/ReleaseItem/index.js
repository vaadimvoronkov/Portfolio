import "./styles.css";
import PlayIcon from "../PlayIcon";
import { useState } from "react";

const imageUrl = "https://aerostatbg.ru";

const ReleaseItem = (props) => {
  const { release, index } = props;
  const [isPlaying, setIsPlaying] = useState(null);

  const handlePlayPause = (index) => {
    if (isPlaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };
  return (
    <li key={index} className="release-item">
      <div className="release-header">
        <h2>{release.title}</h2>
        <p>{release.number}</p>
        <div
          className="release-image-container"
          onClick={() => handlePlayPause(index)}
        >
          <img
            src={`${imageUrl}${release.image_url}`}
            alt=""
            className="release-image"
          />
          <PlayIcon isPlaying={isPlaying} index={index} />
        </div>
      </div>
      <div className="release-tracklist">
        <h2>Список треков:</h2>
        <div className="tracklist-compositions">
          {release.composition_list.map((composition, index) => (
            <div key={index}>{composition.composition_name}</div>
          ))}
        </div>
      </div>
      <div className="release-info">
        <p>Дата: {release.date}</p>
        <p>
          Оценка: <span className="rating-number">{release.rating}</span>
        </p>
        <p>
          Количество оценок:{" "}
          <span className="vote-count-number">{release.vote_count}</span>
        </p>
      </div>
    </li>
  );
};

export default ReleaseItem;
