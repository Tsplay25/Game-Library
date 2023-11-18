import { useState } from 'react';
import Game from './components/Game';
import NewGameForm from './components/NewGameForm';

function App() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem('game-lib');
        if (!storedGames) return [];
        return JSON.parse(storedGames);
    });
    

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


    return (
        <div id="app">
            <h1>Bibiloteca de jogos</h1>
            <NewGameForm addGame={addGame}/>
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
