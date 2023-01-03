import fakenotesdb from '../data/fakenotes.json';

export function getNotes() {
  const fakeNotes = fakenotesdb;

  console.log('getNotes was called');

  return fakeNotes;
}
