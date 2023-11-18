import { useState } from 'react';

export default function NewGameForm({ addGame }) {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addGame({ title, cover });
        setTitle('');
        setCover('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Nome do jogo"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
            </div>
            <div>
                <label htmlFor="cover">Capa:</label>
                <input
                    type="text"
                    id="cover"
                    name="cover"
                    placeholder="Link da imagem"
                    value={cover}
                    onChange={(ev) => setCover(ev.target.value)}
                />
            </div>
            <button type="submit">Adicionar à biblioteca</button>
        </form>
    );
}
