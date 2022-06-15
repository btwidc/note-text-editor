import {
  NotesActionsTypes,
  NotesStateType,
  GetNotesActions,
  AddNoteActions,
  UpdateNoteActions,
  DeleteNoteActions,
  FilterNotesActions,
} from '../../types/actionsTypes/notesActionsTypes';

const initialNotesState: NotesStateType = {
  message: '',
  loading: false,
  note: null,
  notes: null,
};

export const notesReducer = (
  state = initialNotesState,
  action:
    | GetNotesActions
    | AddNoteActions
    | UpdateNoteActions
    | DeleteNoteActions
    | FilterNotesActions,
): NotesStateType => {
  switch (action.type) {
    case NotesActionsTypes.GET_NOTES_LIST_ACTION:
      return {
        ...state,
        message: 'Getting list of notes...',
        loading: true,
      };
    case NotesActionsTypes.GET_NOTES_LIST_FAILED:
      return {
        ...state,
        message: 'Error during getting list of notes',
        loading: false,
      };
    case NotesActionsTypes.GET_NOTES_LIST_SUCCESS:
      return {
        ...state,
        message: 'Successfully got list of notes',
        loading: false,
        notes: action?.payload,
      };
    case NotesActionsTypes.ADD_NOTE_ACTION:
      return {
        ...state,
        message: 'Adding note...',
        loading: true,
      };
    case NotesActionsTypes.ADD_NOTE_FAILED:
      return {
        ...state,
        message: 'Error during adding note',
        loading: false,
      };
    case NotesActionsTypes.ADD_NOTE_SUCCESS:
      return {
        ...state,
        message: 'Note successfully added',
        loading: false,
        note: action?.payload,
      };
    case NotesActionsTypes.UPDATE_NOTE_ACTION:
      return {
        ...state,
        message: 'Updating note...',
        loading: true,
      };
    case NotesActionsTypes.UPDATE_NOTE_FAILED:
      return {
        ...state,
        message: 'Error during updating note',
        loading: false,
      };
    case NotesActionsTypes.UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        message: 'Note successfully updated',
        loading: false,
        note: action?.payload,
      };
    case NotesActionsTypes.DELETE_NOTE_ACTION:
      return {
        ...state,
        message: 'Deleting note...',
        loading: true,
      };
    case NotesActionsTypes.DELETE_NOTE_FAILED:
      return {
        ...state,
        message: 'Error during deleting note',
        loading: false,
      };
    case NotesActionsTypes.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        message: 'Note successfully deleted',
        loading: false,
        note: action?.payload,
      };
    case NotesActionsTypes.FILTER_NOTES_LIST_ACTION:
      return {
        ...state,
        message: 'Filtering list of notes...',
        loading: true,
      };
    case NotesActionsTypes.FILTER_NOTES_LIST_FAILED:
      return {
        ...state,
        message: 'Error during filtering list of notes',
        loading: false,
      };
    case NotesActionsTypes.FILTER_NOTES_LIST_SUCCESS:
      return {
        ...state,
        message: 'Successfully filtered list of notes',
        loading: false,
        notes: action?.payload,
      };
    default:
      return state;
  }
};
