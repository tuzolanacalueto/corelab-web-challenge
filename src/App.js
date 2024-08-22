import React, { useState } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './styles/index.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const toggleFavorite = (id) => {
    setNotes(notes.map(note => note.id === id ? { ...note, favorite: !note.favorite } : note));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id, updatedNote) => {
    setNotes(notes.map(note => note.id === id ? { ...note, ...updatedNote } : note));
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
