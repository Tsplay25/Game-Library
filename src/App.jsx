import Game from './components/Game';
import NewGameForm from './components/NewGameForm';
import useGameCollection from './hooks/useGameCollection';

function App() {
    const { games, addGame, removeGame } = useGameCollection();

    return (
        <div id="app">
            <h1>Bibiloteca de jogos</h1>
            <NewGameForm addGame={addGame} />
            <div className="games">
                {games.length > 0 ? games.map((game) => (
                    <Game
                    key={game.id}
                    title={game.title}
                    cover={game.cover}
                    onRemove={() => removeGame(game.id)}
                    />
                    ))
                : (
                    <h2>Você ainda não pôs nada aqui, Adicione um jogo :)</h2>
                )}
            </div>
        </div>
    );
}

export default App;
