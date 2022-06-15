import axios from 'axios';

const api = axios.create({
  baseURL: 'https://note-text-editor-back-end.herokuapp.com/api',
});

export default api;
