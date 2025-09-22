export default function Log({ logPlayer }) {
  return (
    <div id="log">
      <h2>Log</h2>
      <ol>
        {logPlayer.map((logItem) => {
          const { square, player } = logItem;
          const { col, row } = square;

          return (
            <li key={`${col}${row}`}>
              <span>Player ({player}) : </span>
              <span>{`${col} - ${row}`}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
