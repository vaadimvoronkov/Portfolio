import ReleaseItem from "../../components/MixcloudPage/ReleaseItem";
import Pagination from "../../components/MixcloudPage/Pagination";
import HelperMenu from "../../components/MixcloudPage/HelperMenu";
import AudioPlayer from "../../components/MixcloudPage/AudioPlayer";
import { useReleases } from "./hooks";
import "./MixcloudPage.css";

export const MixcloudPage = () => {
  const { releases, pager, handleNextPage } = useReleases();

  if (!releases) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="mixcloud-container">
      <HelperMenu />
      <ul className="release-list">
        {releases.map((release, index) => (
          <ReleaseItem release={release} index={index}></ReleaseItem>
        ))}
      </ul>
      <Pagination pager={pager} handleNextPage={handleNextPage}></Pagination>
      <AudioPlayer></AudioPlayer>
    </div>
  );
};
