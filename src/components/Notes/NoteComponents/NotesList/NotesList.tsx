import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

import { NoteType } from '../../../../types/notesTypes/noteType';
import { useDispatch } from 'react-redux';
import { getNotesListAction } from '../../../../store/actions/notesActions';

import Note from '../Note/Note';

interface NotesListProps {
  activeNote: NoteType | null;
  setActiveNote: React.Dispatch<React.SetStateAction<NoteType | null>>;
}

const NotesList: FC<NotesListProps> = ({ activeNote, setActiveNote }) => {
  const { notes } = useTypedSelector((state) => state.notes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesListAction());
  }, [dispatch]);

  return (
    <>
      {notes?.map((note) => (
        <div
          key={note.id}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            setActiveNote(note);
          }}>
          <Note activeNote={activeNote} note={note} />
        </div>
      ))}
    </>
  );
};

export default NotesList;
