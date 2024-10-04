import { useEffect, useState } from "react";
import "./MixcloudPage.css";

const apiUrl ="https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases?page=";
const imageUrl = "https://aerostatbg.ru";

export const MixcloudPage = () => {
  const [releases, setReleases] = useState([]);
  const [pager, setPager] = useState({});
  const [isPlaying, setIsPlaying] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const handleNextPage = () => {
    if (pageNumber < pager.total_pages) setPageNumber(pageNumber + 1);
  };
  const handlePrevPage = () => {
    if (pageNumber > 0) setPageNumber(pageNumber - 1);
  };
  const buildUrl = (url, number) => {
    return `${url}${number}`;
  };
  const handlePlayPause = (index) => {
    if (isPlaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };

  useEffect(() => {
    fetch(buildUrl(apiUrl, pageNumber))
      .then((response) => response.json())
      .then((data) => {
        setReleases((prevReleases) => [...prevReleases, ...data.rows]);
        setPager(data.pager);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [pageNumber]);

  if (!releases) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mixcloud-container">
      <ul className="release-list">
        {releases.map((release, index) => (
          <li key={index} className="release-item">
            <div className="release-header">
              <p className="release-title underline">{release.title}</p>
              <p>{release.number}</p>
              <div className="release-image-container" onClick={() => handlePlayPause(index)}>
                <img src={`${imageUrl}${release.image_url}`} alt="" className="release-image"/>
                {isPlaying === index ? (
                  <div className="icon pause-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"className="pause-icon-svg">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  </div>
                ) : (
                  <div className="icon play-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="play-icon-svg">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <div className="release-tracklist">
              <p className="bold underline">TrackList:</p>
              <div className="tracklist-compositions">
                {release.composition_list.map((composition, index) => (
                  <div key={index}>{composition.composition_name}</div>
                ))}
              </div>
            </div>
            <div className="release-info">
              <p>Date: {release.date}</p>
              <p>Rating: <span className="rating-number">{release.rating}</span></p>
              <p>Vote Count:{" "}<span className="vote-count-number">{release.vote_count}</span></p>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button disabled={pager.current_page === 0} onClick={handlePrevPage} className="pagination-button">
          Previous
        </button>
        <span className="pagination-info">
          {pager.current_page + 1} / {pager.total_pages}
        </span>
        <button disabled={pager.current_page === pager.total_pages} onClick={handleNextPage} className="pagination-button">
          Next
        </button>
      </div>
      <div className="audio-player visible"></div>
    </div>
  );
};
