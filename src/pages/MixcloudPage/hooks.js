import { useEffect, useState } from "react";

const apiUrl =
  "https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases?page=";

const buildUrl = (url, number) => {
  return `${url}${number}`;
};

export const useReleases = () => {
  const [releases, setReleases] = useState([]);
  const [pager, setPager] = useState({});
  const [pageNumber, setPageNumber] = useState(0);

  const handleNextPage = () => {
    if (pageNumber < pager.total_pages) setPageNumber(pageNumber + 1);
  };
  const handlePrevPage = () => {
    if (pageNumber > 0) setPageNumber(pageNumber - 1);
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

  return { releases, pager, handleNextPage, handlePrevPage };
};
