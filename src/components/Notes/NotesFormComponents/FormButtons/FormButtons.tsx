import React, { FC } from 'react';

import { InitialFormStateType } from '../NoteForm/NoteForm';

import './FormButtons.scss';

interface FormButtonsProps {
  noteInputFormState: InitialFormStateType;
  addNote: (e: React.MouseEvent<HTMLButtonElement>) => void;
  updateNote: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteNote: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormButtons: FC<FormButtonsProps> = ({
  noteInputFormState,
  addNote,
  updateNote,
  deleteNote,
}) => {
  return (
    <>
      {noteInputFormState?.title === undefined ||
      noteInputFormState?.title === '' ||
      noteInputFormState?.message == undefined ||
      noteInputFormState?.message == '' ? (
        <div className="buttons-container">
          <button disabled onClick={addNote}>
            Add
          </button>
          <button disabled onClick={updateNote}>
            Update
          </button>
          <button disabled onClick={deleteNote}>
            Delete
          </button>
        </div>
      ) : (
        <div className="buttons-container">
          <button onClick={addNote}>Add</button>
          <button onClick={updateNote}>Update</button>
          <button onClick={deleteNote}>Delete</button>
        </div>
      )}
    </>
  );
};

export default FormButtons;
