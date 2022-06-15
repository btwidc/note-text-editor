import React, { FC, useState } from 'react';
import { NoteType } from '../types/notesTypes/noteType';

import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import './MainPage.scss';

const MainPage: FC = () => {
  const [activeNoteState, setActiveNoteState] = useState<NoteType | null>(null);

  return (
    <div className="main-page">
      <Sidebar
        activeNote={activeNoteState}
        setActiveNote={setActiveNoteState}
      />
      <Content activeNote={activeNoteState} />
    </div>
  );
};

export default MainPage;
