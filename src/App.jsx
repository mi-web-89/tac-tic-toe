import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {
  deriveGambeBoard,
  deriveActivePlayer,
  deriveWinner,
} from "./lib/utils";

const INIT_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "player 1",
  O: "player 2",
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGambeBoard(INIT_GAMEBOARD, gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function selectSquareHandler(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updateTurns;
    });
  }

  function rematchHandler() {
    setGameTurns([]);
  }

  function changeNameHandler(symbol, newName) {
    setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: newName }));
    console.log("players", players);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={changeNameHandler}
          />
          <Player
            initName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={changeNameHandler}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onClickRematch={rematchHandler} />
        )}
        <GameBoard onSelectSquare={selectSquareHandler} board={gameBoard} />
      </div>
      <Log logPlayer={gameTurns} />
    </main>
  );
}

export default App;
