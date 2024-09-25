import { useEffect, useState } from "react";
import "./MixcloudPage.css";

const apiUrl = "https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases";

export const MixcloudPage = () => {
  const [releases, setReleases] = useState(null);

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
                  <p className="playlist-header__title">{release.title}</p>
                  <img src={release.image_url} alt="playlist"></img>
                </div>
                <div className="playlist-info">
                  <p>Number: {release.number}</p>
                  <p>Date: {release.date}</p>
                  <p>Rating: {release.rating}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="pagination">
          <div className="pagination_left">
            Previous
          </div>
          <div className="pagination_middle">
            {releases.pager.current_page}/{releases.pager.total_pages}
          </div>
          <div className="pagination_right">
            Next
          </div>
        </div>
    </div>
  );
};