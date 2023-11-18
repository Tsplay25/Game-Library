import { useState } from 'react';
import Game from './components/Game';

function App() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem('game-lib');
        if (!storedGames) return [];
        return JSON.parse(storedGames);
    });
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');

    const addGame = ({ title, cover }) => {
        const id = Math.floor(Math.random() * 100000);
        const game = { id, title, cover };
        setGames((state) => {
            const newState = [...state, game];
            localStorage.setItem('game-lib', JSON.stringify(newState));
            return newState;
        });
    };

    const removeGame = (id) => {
        setGames((state) => {
            const newState = state.filter((game) => game.id !== id);
            localStorage.removeItem('game-lib', JSON.stringify(newState));
            return newState;
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addGame({ title, cover });
        setTitle('');
        setCover('');
    };

    return (
        <div id="app">
            <h1>Bibiloteca de jogos</h1>
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
            <div className="games">
                {games.map((game) => (
                    <Game
                        key={game.id}
                        title={game.title}
                        cover={game.cover}
                        onRemove={() => removeGame(game.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
