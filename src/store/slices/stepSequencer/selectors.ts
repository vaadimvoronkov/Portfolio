import { StoreType } from 'src/store';

export const selectCurrentNote = ({ stepSequence }: StoreType) =>
  stepSequence.currentNote;

export const selectNextNoteTime = ({ stepSequence }: StoreType) =>
  stepSequence.nextNoteTime;

export const selectIsPlaying = ({ stepSequence }: StoreType) =>
  stepSequence.isPlaying;
