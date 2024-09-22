import { useEffect, useState } from "react";
import "./MixcloudPage.css";

const apiUrl = "https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases";

export const MixcloudPage = () => {
  const [releases, setReleases] = useState({});

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          console.log('error')
        }
        return response.json();
      })
      .then((data) => {
        setReleases(data)
        console.log('success');
        console.log(data);
      });
  }, []);

  if (!releases) {
    return <div>loading</div>
  }

  console.log(releases.releases)

  return <div>{releases.rows.map((release) => {
    return <div>{release.title}</div>
  })}</div>;
};
