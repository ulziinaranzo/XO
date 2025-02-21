"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

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

  useEffect(() => {
    // Check for a winner
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        board[a] === board[b] &&
        board[b] === board[c] &&
        board[a] !== ""
      ) {
        setWinner(board[a]);
        return; 
      }
    }

    if (!board.includes("") && !winner) {
      setDraw(true);
    }
  }, [board, winner]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
  };

  const reset = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
    setDraw(false);
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
      {draw && !winner && <h3>DRAW</h3>}
    </div>
  );
}