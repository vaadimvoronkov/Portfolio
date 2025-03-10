import { Dispatch } from '@reduxjs/toolkit';
import { GetStateType } from 'src/store';
import { selectIsPlaying } from 'src/store/slices/stepSequencer/selectors';
import {
  setCurrentNote,
  setNextNoteTime,
  togglePlaying,
} from 'src/store/slices/stepSequencer/slice';

const audioCtx = new AudioContext();

let timerID;
let tempo = 60.0;
const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)

export const play = () => (dispatch: Dispatch, getState: GetStateType) => {
  const isPlaying = selectIsPlaying(getState());
  if (isPlaying) {
    return;
  }

  dispatch(togglePlaying());
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  let currentNote = 0;
  let nextNoteTime = audioCtx.currentTime;
  dispatch(setCurrentNote(currentNote));
  dispatch(setNextNoteTime(nextNoteTime));
  function nextNote() {
    const secondsPerBeat = 60.0 / tempo;

    nextNoteTime += secondsPerBeat; // Add beat length to last beat time

    // Advance the beat number, wrap to zero when reaching 4
    currentNote = (currentNote + 1) % 4;

    dispatch(setCurrentNote(currentNote));
    dispatch(setNextNoteTime(nextNoteTime));
  }

  function scheduler() {
    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
      // scheduleNote(currentNote, nextNoteTime);
      nextNote();
    }
    timerID = setTimeout(scheduler, lookahead);
  }
  scheduler();
};

export const stop = () => (dispatch: Dispatch, getState: GetStateType) => {
  const isPlaying = selectIsPlaying(getState());
  if (!isPlaying) {
    return;
  }
  dispatch(togglePlaying());
  window.clearTimeout(timerID);
};
