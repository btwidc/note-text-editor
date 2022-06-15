import React, { FC } from 'react';
import { NoteType } from '../../../../types/notesTypes/noteType';

import './Note.scss';

interface NoteProps {
  note: NoteType;
  activeNote: NoteType | null | undefined;
}

const Note: FC<NoteProps> = ({ note, activeNote }) => {
  return (
    <div className={note === activeNote ? 'note active' : 'note'}>
      <div className="note-title">
        <h2>{note.title}</h2>
      </div>
      <div className="note-tag">
        <h4>{note.tag}</h4>
      </div>
      <div className="note-message">
        <h3>
          {note.message.length > 40
            ? `${note.message.slice(0, 40)}...`
            : note.message}
        </h3>
      </div>
    </div>
  );
};

export default Note;
