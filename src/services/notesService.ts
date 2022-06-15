import api from '../api/index';
import { AxiosResponse } from 'axios';

import { NoteType } from '../types/notesTypes/noteType';

export default class NotesService {
  static async getNotesList(): Promise<AxiosResponse<NoteType[] | null>> {
    return api.get<NoteType[]>('/note');
  }

  static async addNote(
    title: string | undefined,
    message: string | undefined,
    tag: string | undefined,
  ): Promise<AxiosResponse<NoteType | null>> {
    return api.post<NoteType>('/note', { title, message, tag });
  }

  static async updateNote(
    id: string | undefined,
    title: string | undefined,
    message: string | undefined,
    tag: string | undefined,
  ): Promise<AxiosResponse<NoteType | null>> {
    return api.put<NoteType>(`/note/${id}`, { title, message, tag });
  }

  static async deleteNote(
    id: string | undefined,
  ): Promise<AxiosResponse<NoteType | null>> {
    return api.delete<NoteType>(`/note/${id}`);
  }

  static async filterNotesList(tag: string): Promise<NoteType[] | null> {
    const notes = await api.get<NoteType[]>('/note');
    return notes.data.filter((note: NoteType) => note.tag === tag);
  }
}
