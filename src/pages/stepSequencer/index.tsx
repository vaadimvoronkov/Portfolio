import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/store';
import { play, stop } from 'src/store/slices/stepSequencer/actions';
import {
  selectCurrentNote,
  selectIsPlaying,
  selectNextNoteTime,
} from 'src/store/slices/stepSequencer/selectors';

export const StepSequencer = () => {
  const dispatch = useAppDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  const currentNote = useSelector(selectCurrentNote);
  const nextNoteTime = useSelector(selectNextNoteTime);

  const handlePlay = () => {
    dispatch(play());
  };
  const handleStop = () => {
    dispatch(stop());
  };
  return (
    <div>
      <div>{`isPlaying: ${isPlaying}`}</div>
      <div>{currentNote}</div>
      <div>{nextNoteTime}</div>
      <button onClick={handlePlay}>play</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};
