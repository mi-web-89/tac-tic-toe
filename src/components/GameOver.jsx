export default function GameOver({winner, onClickRematch}) {
  return <div id="game-over">
    <h2>Game Over !</h2>
    <p>{winner ? `Player ${winner} won` : `it's a draw`}</p>
    <p>
      <button onClick={onClickRematch}>Rematch</button>
    </p>
  </div>
}