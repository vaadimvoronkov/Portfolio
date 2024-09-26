import { useEffect, useState } from "react";
import "./MixcloudPage.css";

const apiUrl = "https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases";


export const MixcloudPage = () => {
  const [releases, setReleases] = useState(null);
  const [count,setCount] = useState(0);

  console.log(count);

  const handleAddOne = () => {
    setCount(count+1);
  }
  const handleSubstractOne = () =>{
    if(count > 0)
      setCount(count-1);
  }

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setReleases(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!releases) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mixcloud-container">
        <div>
          <ul className="playlist-list">
            {releases.rows.map((release, index) => (
              <li key={index} className="playlist-item">
                <div className="playlist-header">
                  <p className="playlist-header__title underline">{release.title}</p>
                  <p>{release.number}</p>
                </div>
                <div className="playlist-tracklist">
                  <p>TrackList</p>
                </div>
                <div className="playlist-info">
                  <p>Date: {release.date}</p>
                  <p>Rating: <span className="rating-number">{release.rating}</span></p>
                  <p>Vote Count: <span className="vote-count-number">{release.vote_count}</span></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="pagination">
          <div className="pagination_left">
            <button onClick={handleSubstractOne}>Previous</button>
          </div>
          <div className="pagination_middle">
            {releases.pager.current_page}/{releases.pager.total_pages}
          </div>
          <div className="pagination_right">
            <button onClick={handleAddOne}>Next</button>
          </div>
        </div>
    </div>
  );
};