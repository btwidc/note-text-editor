import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { filterNotesListAction } from '../../../../store/actions/notesActions';

import './NoteTag.scss';

interface NotesTagsProps {
  noteTag: string;
}

const NoteTag: FC<NotesTagsProps> = ({ noteTag }) => {
  const dispatch = useDispatch();

  const filterNotesByTag = (e: any) => {
    dispatch(filterNotesListAction(noteTag));
  };

  return (
    <div className="note-tag-container" onClick={filterNotesByTag}>
      <h3>{noteTag}</h3>
    </div>
  );
};

export default NoteTag;
