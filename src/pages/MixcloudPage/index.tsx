import ReleaseItem from 'src/components/MixcloudPage/ReleaseItem';
import Pagination from 'src/components/MixcloudPage/Pagination';
import AudioPlayer from 'src/components/MixcloudPage/AudioPlayer';
import { useReleases } from './hooks';
import styles from './styles.module.css';

import { useSelector } from 'react-redux';
import { selectReleases } from 'src/store/slices/releases/selectors';

export const MixcloudPage = () => {
  useReleases();

  const releases = useSelector(selectReleases);

  if (releases.length === 0) {
    return <div></div>;
  }

  return (
    <div className={styles.mixcloud}>
      <ul className={styles.releases}>
        {releases.map((release, index) => (
          <ReleaseItem
            key={release.number}
            release={release}
            index={index}
          ></ReleaseItem>
        ))}
      </ul>
      <Pagination></Pagination>
      <AudioPlayer></AudioPlayer>
    </div>
  );
};
