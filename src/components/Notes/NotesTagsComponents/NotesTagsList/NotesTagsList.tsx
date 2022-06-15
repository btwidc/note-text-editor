import React, { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';

import { getNotesListAction } from '../../../../store/actions/notesActions';

import NoteTag from '../NoteTag/NoteTag';
import './NotesTagsList.scss';

const NotesTagsList: FC = () => {
  const { notes } = useTypedSelector((state) => state.notes);

  const dispatch = useDispatch();

  const getAllNotes = () => {
    dispatch(getNotesListAction());
  };

  return (
    <div className="notes-tags-container">
      <div className="notes-tags">
        <div className="note-tag-container">
          <h3 onClick={getAllNotes}>#All</h3>
        </div>
        {notes
          ?.filter(
            (note, index) =>
              notes?.findIndex((n) => n.tag === note.tag) === index,
          )
          .map((noteUnique) => (
            <NoteTag key={noteUnique.id} noteTag={noteUnique.tag} />
          ))}
      </div>
    </div>
  );
};

export default NotesTagsList;
