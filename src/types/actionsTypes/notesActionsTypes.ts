import { NoteType } from '../notesTypes/noteType';

export interface NotesStateType {
  message: string;
  loading: boolean;
  note: NoteType | null | undefined;
  notes: NoteType[] | null | undefined;
}

export enum NotesActionsTypes {
  GET_NOTES_LIST_ACTION = 'GET_NOTES_LIST_ACTION',
  GET_NOTES_LIST_FAILED = 'GET_NOTES_LIST_FAILED',
  GET_NOTES_LIST_SUCCESS = 'GET_NOTES_LIST_SUCCESS',
  GET_NOTE_ACTION = 'GET_NOTE_ACTION',
  GET_NOTE_FAILED = 'GET_NOTE_FAILED',
  GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS',
  ADD_NOTE_ACTION = 'ADD_NOTE_ACTION',
  ADD_NOTE_FAILED = 'ADD_NOTE_FAILED',
  ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS',
  UPDATE_NOTE_ACTION = 'UPDATE_NOTE_ACTION',
  UPDATE_NOTE_FAILED = 'UPDATE_NOTE_FAILED',
  UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS',
  DELETE_NOTE_ACTION = 'DELETE_NOTE_ACTION',
  DELETE_NOTE_FAILED = 'DELETE_NOTE_FAILED',
  DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS',
  FILTER_NOTES_LIST_ACTION = 'FILTER_NOTES_LIST_ACTION',
  FILTER_NOTES_LIST_FAILED = 'FILTER_NOTES_LIST_FAILED',
  FILTER_NOTES_LIST_SUCCESS = 'FILTER_NOTES_LIST_SUCCESS',
}

export interface GetNotesActions {
  type:
    | NotesActionsTypes.GET_NOTES_LIST_ACTION
    | NotesActionsTypes.GET_NOTES_LIST_FAILED
    | NotesActionsTypes.GET_NOTES_LIST_SUCCESS;
  payload?: NoteType[] | null;
}

export interface AddNoteActions {
  type:
    | NotesActionsTypes.ADD_NOTE_ACTION
    | NotesActionsTypes.ADD_NOTE_FAILED
    | NotesActionsTypes.ADD_NOTE_SUCCESS;
  payload?: NoteType | null;
}

export interface UpdateNoteActions {
  type:
    | NotesActionsTypes.UPDATE_NOTE_ACTION
    | NotesActionsTypes.UPDATE_NOTE_FAILED
    | NotesActionsTypes.UPDATE_NOTE_SUCCESS;
  payload?: NoteType | null;
}

export interface DeleteNoteActions {
  type:
    | NotesActionsTypes.DELETE_NOTE_ACTION
    | NotesActionsTypes.DELETE_NOTE_FAILED
    | NotesActionsTypes.DELETE_NOTE_SUCCESS;
  payload?: NoteType | null;
}

export interface FilterNotesActions {
  type:
    | NotesActionsTypes.FILTER_NOTES_LIST_ACTION
    | NotesActionsTypes.FILTER_NOTES_LIST_FAILED
    | NotesActionsTypes.FILTER_NOTES_LIST_SUCCESS;
  payload?: NoteType[] | null;
}
