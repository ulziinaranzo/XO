"use client"
import { useState, useEffect } from "react"
import styles from "./page.module.css"


export default function Home() {
const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
const [turn, setTurn] = useState("X")


const handleClick = () => {
  const newBoard = [...board];
  newBoard[index] = turn;
  setTurn(turn === "X" ? "O": "X")
  setBoard(newBoard)
}
  return (
    <div className={styles.container}>
      <div className={styles.flexcontainer}>
        <div className={styles.square}>
          {board.map((cell, index) => (
            <div className={styles.square}
            onClick={() => {handleClick(index)}}
            key={index}
            >
              {cell}
            </div>
          ))}
        </div>
        .
      </div>
    </div>
  )
}
