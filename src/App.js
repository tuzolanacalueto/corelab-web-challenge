import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './styles/index.css';
import { todo } from './services/todo'; // Ajuste o caminho conforme necessário

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Carregar as notas do backend ao montar o componente
    const fetchNotes = async () => {
      const response = await todo.listar();
      if (response.status === 200) {
        setNotes(response.data);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (newNote) => {
    const noteData = {
      title: newNote.title,
      content: newNote.content,
      isFavorite: newNote.isFavorite || false,
      color: newNote.color || 'white',
    };

    const response = await todo.create(noteData);
    if (response.status === 201) {
      setNotes([response.data, ...notes]);
    }
  };

  const toggleFavorite = async (id) => {
    const noteToUpdate = notes.find(note => note.id === id);
    const updatedNote = { ...noteToUpdate, isFavorite: !noteToUpdate.isFavorite };

    const response = await todo.update(updatedNote, id);
    if (response.status === 200) {
      setNotes(notes.map(note => note.id === id ? response.data : note));
    }
  };

  const deleteNote = async (id) => {
    const response = await todo.excluir(id);
    if (response.status === 200) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  const editNote = async (id, updatedNote) => {
    const response = await todo.update(updatedNote, id);
    if (response.status === 200) {
      setNotes(notes.map(note => note.id === id ? response.data : note));
    }
  };

  return (
    <div className="app-container">
      <Header />
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} toggleFavorite={toggleFavorite} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;
