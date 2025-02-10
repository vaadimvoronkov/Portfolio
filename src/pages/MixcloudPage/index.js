import ReleaseItem from "../../components/MixcloudPage/ReleaseItem";
import Pagination from "../../components/MixcloudPage/Pagination";
import HelperMenu from "../../components/MixcloudPage/HelperMenu";
import AudioPlayer from "../../components/MixcloudPage/AudioPlayer";
import { useReleases } from "./hooks";
import styles from "./styles.module.css";

export const MixcloudPage = () => {
  const { releases, pager, handleNextPage } = useReleases();

  if (releases.length === 0) {
    return <div></div>;
  }

  return (
    <div className={styles.mixcloud}>
      <HelperMenu />
      <ul className={styles.releases}>
        {releases.map((release, index) => (
          <ReleaseItem key={release.number} release={release} index={index}></ReleaseItem>
        ))}
      </ul>
      <Pagination pager={pager} handleNextPage={handleNextPage}></Pagination>
      <AudioPlayer releases={releases}></AudioPlayer>
    </div>
  );
};
