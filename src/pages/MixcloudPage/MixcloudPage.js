import { useEffect, useState } from "react";
import "./MixcloudPage.css";

const apiUrl ="https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases?page=";
const imageUrl = "https://aerostatbg.ru";

export const MixcloudPage = () => {
  const [releases, setReleases] = useState(null);
  const [count, setCount] = useState(0);

  const handleAddOne = () => {
    setCount(count + 1);
  };
  const handleSubstractOne = () => {
    if (count > 0) setCount(count - 1);
  };
  const changeUrl = (url, number) => {
    return `${url}${number}`;
  };

  useEffect(() => {
    fetch(changeUrl(apiUrl, count))
      .then((response) => response.json())
      .then((data) => {
        setReleases(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [count]);

  if (!releases) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mixcloud-container">
      <div>
        <div className="pagination">
          <div className="pagination_left">
            <button disabled={count === 0} onClick={handleSubstractOne}>
              Previous
            </button>
          </div>
          <div className="pagination_middle">
            {releases.pager.current_page}/{releases.pager.total_pages}
          </div>
          <div className="pagination_right">
            <button onClick={handleAddOne}>Next</button>
          </div>
        </div>
        <ul className="playlist-list">
          {releases.rows.map((release, index) => (
            <li key={index} className="playlist-item">
              <div className="playlist-header">
                <p className="playlist-header__title underline">
                  {release.title}
                </p>
                <p>{release.number}</p>
                <img src={`${imageUrl}${release.image_url}`} alt=""></img>
              </div>
              <div className="playlist-tracklist">
                <p className="bold underline">TrackList:</p>
                <p className="playlist-tracklist-compositions">
                  {release.composition_list.map((composition, index) => (
                   <div key={index}>{composition.composition_name}</div>
                  ))}
                </p>
              </div>
              <div className="playlist-info">
                <p>Date: {release.date}</p>
                <p>
                  Rating:{" "}
                  <span className="rating-number">{release.rating}</span>
                </p>
                <p>
                  Vote Count:{" "}
                  <span className="vote-count-number">
                    {release.vote_count}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pagination">
        <div className="pagination_left">
          <button disabled={count === 0} onClick={handleSubstractOne}>Previous</button>
        </div>
        <div className="pagination_middle">
          {releases.pager.current_page}/{releases.pager.total_pages}
        </div>
        <div className="pagination_right">
          <button disabled={releases.pager.total_pages === releases.pager.current_page } onClick={handleAddOne}>Next</button>
        </div>
      </div>
    </div>
  );
};
