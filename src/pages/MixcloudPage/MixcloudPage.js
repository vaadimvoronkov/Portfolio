import { useEffect, useState } from "react";
import "./MixcloudPage.css";

const apiUrl ="https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases?page=";
const imageUrl = "https://aerostatbg.ru";

export const MixcloudPage = () => {
  const [releases, setReleases] = useState([]);
  const[pager, setPager] = useState({})
  
  const [pageCount, setPageCount] = useState(0);

  const handleAddOne = () => {
    if(pageCount<pager.total_pages) setPageCount(pageCount + 1);
  };
  const handleSubstractOne = () => {
    if (pageCount > 0) setPageCount(pageCount - 1);
  };
  const changeUrl = (url, number) => {
    return `${url}${number}`;
  };

  useEffect(() => {
    fetch(changeUrl(apiUrl, pageCount))
      .then((response) => response.json())
      .then((data) => {
        setReleases((prevReleases)=>[...prevReleases, ...data.rows]);
        setPager(data.pager);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [pageCount]);

  if (!releases) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mixcloud-container">
      <div>
        <ul className="playlist-list">
          {releases.map((release, index) => (
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
                <div className="playlist-tracklist-compositions">
                  {release.composition_list.map((composition, index) => (
                   <div key={index}>{composition.composition_name}</div>
                  ))}
                </div>
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
          <button disabled = {pager.current_page === 0} onClick={handleSubstractOne}>Previous</button>
        </div>
        <div className="pagination_middle">
          {pager.current_page+1}/{pager.total_pages}
        </div>
        <div className="pagination_right">
          <button disabled={pager.total_pages === pager.current_page } onClick={handleAddOne}>Next</button>
        </div>
      </div>
    </div>
  );
};
