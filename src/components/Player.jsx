import { useState } from "react";

export default function Player({ initName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initName);

  function EditingHandler() {
    // not recomend if update value base old value
    // karena ini tidak menjamin nilai yang dikembalikan adalah nilai yang terbaru
    // setIsEditing(!isEditing);

    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        value={playerName}
        onChange={handleChangeName}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={EditingHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
