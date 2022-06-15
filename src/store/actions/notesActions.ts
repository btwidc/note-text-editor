import { Dispatch } from 'redux';

import {
  NotesActionsTypes,
  GetNotesActions,
  AddNoteActions,
  UpdateNoteActions,
  DeleteNoteActions,
  FilterNotesActions,
} from '../../types/actionsTypes/notesActionsTypes';

import NotesService from '../../services/notesService';

export const getNotesListAction = () => {
  return async (dispatch: Dispatch<GetNotesActions>) => {
    try {
      dispatch({
        type: NotesActionsTypes.GET_NOTES_LIST_ACTION,
      });
      const notesList = await NotesService.getNotesList();
      dispatch({
        type: NotesActionsTypes.GET_NOTES_LIST_SUCCESS,
        payload: notesList.data,
      });
    } catch (e) {
      dispatch({
        type: NotesActionsTypes.GET_NOTES_LIST_FAILED,
      });
    }
  };
};

export const addNoteAction = (title: string | undefined, message: string | undefined, tag: string | undefined) => {
  return async (dispatch: Dispatch<AddNoteActions>) => {
    try {
      dispatch({
        type: NotesActionsTypes.ADD_NOTE_ACTION,
      });
      const note = await NotesService.addNote(title, message, tag);
      dispatch({
        type: NotesActionsTypes.ADD_NOTE_SUCCESS,
        payload: note.data,
      });
    } catch (e) {
      dispatch({
        type: NotesActionsTypes.ADD_NOTE_FAILED,
      });
    }
  };
};

export const updateNoteAction = (
  id: string | undefined,
  title: string | undefined,
  message: string | undefined,
  tag: string | undefined,
) => {
  return async (dispatch: Dispatch<UpdateNoteActions>) => {
    try {
      dispatch({
        type: NotesActionsTypes.UPDATE_NOTE_ACTION,
      });
      const note = await NotesService.updateNote(id, title, message, tag);
      dispatch({
        type: NotesActionsTypes.UPDATE_NOTE_SUCCESS,
        payload: note.data,
      });
    } catch (e) {
      dispatch({
        type: NotesActionsTypes.UPDATE_NOTE_FAILED,
      });
    }
  };
};

export const deleteNoteAction = (id: string | undefined) => {
  return async (dispatch: Dispatch<DeleteNoteActions>) => {
    try {
      dispatch({
        type: NotesActionsTypes.DELETE_NOTE_ACTION,
      });
      const note = await NotesService.deleteNote(id);
      dispatch({
        type: NotesActionsTypes.DELETE_NOTE_SUCCESS,
        payload: note.data,
      });
    } catch (e) {
      dispatch({
        type: NotesActionsTypes.DELETE_NOTE_FAILED,
      });
    }
  };
};

export const filterNotesListAction = (tag: string) => {
  return async (dispatch: Dispatch<FilterNotesActions>) => {
    try {
      dispatch({
        type: NotesActionsTypes.FILTER_NOTES_LIST_ACTION,
      });
      const filteredNotesList = await NotesService.filterNotesList(tag);
      dispatch({
        type: NotesActionsTypes.FILTER_NOTES_LIST_SUCCESS,
        payload: filteredNotesList,
      });
    } catch (e) {
      dispatch({
        type: NotesActionsTypes.FILTER_NOTES_LIST_FAILED,
      });
    }
  };
};
