import React, { FC } from 'react';
import { NoteType } from '../../types/notesTypes/noteType';

import NotesHeader from '../Notes/NotesHeader/NotesHeader';
import NotesTagsList from '../Notes/NotesTagsComponents/NotesTagsList/NotesTagsList';
import NotesList from '../Notes/NoteComponents/NotesList/NotesList';
import './Sidebar.scss';

interface SidebarProps {
  activeNote: NoteType | null;
  setActiveNote: React.Dispatch<React.SetStateAction<NoteType | null>>;
}

const Sidebar: FC<SidebarProps> = ({ activeNote, setActiveNote }) => {
  return (
    <div className="sidebar-container">
      <NotesHeader />
      <NotesTagsList />
      <NotesList activeNote={activeNote} setActiveNote={setActiveNote} />
    </div>
  );
};

export default Sidebar;
