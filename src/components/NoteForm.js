import React, { useState } from 'react';
import '../styles/NoteForm.css';

function NoteForm({ addNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            setError(true);
            return;
        }

        addNote({
            id: Date.now(),
            title,
            content,
            favorite: false,
            color: 'white',
        });

        setTitle('');
        setContent('');
        setError(false);
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Criar nota..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            {error && <p className="error">Preencha todos os campos</p>}
            <button type="submit">Adicionar Nota</button>
        </form>
    );
}

export default NoteForm;
