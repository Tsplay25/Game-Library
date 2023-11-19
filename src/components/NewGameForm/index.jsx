import { useState } from 'react';
import TextInput from '../TextInput/TextInput';

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
            <TextInput
                label="Título:"
                id="title"
                placeholder="Nome do jogo"
                value={title}
                setValue={setTitle}
            />
            <TextInput
                label="Capa:"
                id="cover"
                placeholder="Link da imagem"
                value={cover}
                setValue={setCover}
            />

            <button type="submit">Adicionar à biblioteca</button>
        </form>
    );
}
