import React, { FC } from 'react';
import { NoteType } from '../../types/notesTypes/noteType';

import NoteForm from '../Notes/NotesFormComponents/NoteForm/NoteForm';
import './Content.scss';

interface ContentProps {
  activeNote: NoteType | null | undefined;
}

const Content: FC<ContentProps> = ({ activeNote }) => {
  return (
    <div className="content-container">
      <NoteForm activeNote={activeNote} />
    </div>
  );
};

export default Content;
