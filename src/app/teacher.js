"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turnX, setTurnX] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.map((cell, i) =>
      i === index ? (turnX ? "X" : "O") : cell
    );

    setBoard(newBoard);
    setTurnX(!turnX);

    const newWinner = checkWinner(newBoard);
    if (newWinner) setWinner(newWinner);
  };

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (curBoard) => {
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        curBoard[a] === curBoard[b] &&
        curBoard[b] === curBoard[c] &&
        curBoard[b] !== ""
      ) {
        return curBoard[b];
      }
    }
    return null;
  };

  const reset = () => {
    setBoard(Array(9).fill(""));
    setTurnX(true);
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <h1>Tic-Tac-Toe</h1>
      <div className={styles.flexcontainer}>
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={styles.square}
          >
            {cell}
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={reset}>
        Reset
      </button>
      {winner && <h2>Winner: {winner}</h2>}
    </div>
  );
}
