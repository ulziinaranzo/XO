"use client"
import { useState } from "react"


export default function Home() {
const [board, setBoard] = useState(Array(9).fill(""));
const [winner, setWinner] = useState(null);
const [turnX, setTurnX] = useState(true)

const handleXO = () => {
    const newBoard = board.map((square, i) => 
        i === index ? (turnX ? "X" : "O"):cell
    );
    setBoard(newBoard);
    setTurnX(!true)
    const newWinner = checkWinner(setBoard)
    if (newWinner) setWinner(newWinner)
}
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
const checkWinner = (currentBoard) => {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (currentBoard[a] && currentBoard[b] === currentBoard[a] && currentBoard[b] === currentBoard[c]){
            return currentBoard[a]
        }
    }
    return null;
}
const reset = () => {
    setBoard()
}
return (<div className={styles.container}>
    <h1>Tic-Tac-Toe</h1>
    <div className={styles.flexcontainer}>
        {board.map((item, i) => {
            <div>key={index} onClick={() => {handleXO}} className={styles.square}</div>
            {cell}
        })}
    </div>
    <button className={styles.button} onClick={reset}>Reset</button>
    </div>

)


}