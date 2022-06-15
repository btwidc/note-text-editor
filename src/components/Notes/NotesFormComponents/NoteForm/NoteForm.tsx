import React, { FC, useEffect, useState } from 'react';

import { NoteType } from '../../../../types/notesTypes/noteType';
import { useDispatch } from 'react-redux';
import {
  addNoteAction,
  deleteNoteAction,
  getNotesListAction,
  updateNoteAction,
} from '../../../../store/actions/notesActions';

import Input from '../Input/Input';
import FormButtons from '../FormButtons/FormButtons';
import './NoteForm.scss';

export interface InitialFormStateType {
  title: string | undefined;
  message: string | undefined;
  tag: string | undefined;
}

interface NoteFormProps {
  activeNote: NoteType | null | undefined;
}

const NoteForm: FC<NoteFormProps> = ({ activeNote }) => {
  const dispatch = useDispatch();

  const [noteInputFormState, setNoteInputFormState] =
    useState<InitialFormStateType>({
      title: '',
      message: '',
      tag: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNoteInputFormState({
      ...noteInputFormState,
      [e.target.id]: e.target.value,
    });
  };

  const getTagFromMessage = () => {
    const tags = noteInputFormState.message?.match(/#.+?(?=\s)/g);
    if (tags) {
      return tags[0];
    }
  };

  const addNote = async () => {
    const noteTag = getTagFromMessage();
    await dispatch(
      addNoteAction(
        noteInputFormState.title,
        noteInputFormState.message,
        noteTag,
      ),
    );
    await dispatch(getNotesListAction());
    setNoteInputFormState({ title: '', message: '', tag: '' });
  };

  const updateNote = async () => {
    const noteTag = getTagFromMessage();
    await dispatch(
      updateNoteAction(
        activeNote?.id,
        noteInputFormState.title,
        noteInputFormState.message,
        noteTag,
      ),
    );
    await dispatch(getNotesListAction());
    setNoteInputFormState({ title: '', message: '', tag: '' });
  };

  const deleteNote = async () => {
    await dispatch(deleteNoteAction(activeNote?.id));
    await dispatch(getNotesListAction());
    setNoteInputFormState({ title: '', message: '', tag: '' });
  };

  useEffect(() => {
    setNoteInputFormState({
      title: activeNote?.title,
      message: activeNote?.message,
      tag: activeNote?.tag,
    });
  }, [activeNote]);

  return (
    <>
      <Input
        className="input-container"
        labelName="Title"
        type="text"
        id="title"
        value={noteInputFormState.title}
        onChange={handleChange}
      />
      <Input
        className="input-container"
        labelName="Message"
        type="text"
        id="message"
        value={noteInputFormState?.message}
        onChange={handleChange}
      />
      <FormButtons
        noteInputFormState={noteInputFormState}
        addNote={addNote}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </>
  );
};

export default NoteForm;
