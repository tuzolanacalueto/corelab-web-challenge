import React, { useState } from 'react';
import '../styles/NoteForm.css';
import { FaStar } from 'react-icons/fa';

function NoteForm({ addNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(false);
    let [favorite, setFavorite] = useState(false);

    const handleKeyDown = (e) => {

        if (e.key === 'Enter') {

            e.preventDefault(); // Impede o comportamento padrão de nova linha ou envio
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
        }

    };

    return (
        <form className="note-form">
            <div>
                <input
                    className='input'
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <FaStar
                    className={`star-icon ${favorite ? 'favorite' : ''}`}
                    onClick={() => setFavorite(!favorite)}
                />
                <hr />
                <input className='textarea'
                    placeholder="Criar nota..."
                    value={content}
                    type='text'
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {error && <p className="error">Preencha todos os campos</p>}

        </form>
    );
}

export default NoteForm;
