import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS} from './constants'
import { checkWinner } from './logic/board'
import { Winner } from './components/Winner'


function App() {

  const [board, setBoard] = useState( () =>{
    let boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
    }
  );
    
  const [turn, setTurn] = useState(() =>{
    let turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
    }
  )

  const [winner, setWiner] = useState(null)



  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWiner(null)

    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
  }

  const checkEndGame = (board) =>{
    return board.every((square)=> square !== null)
  }

  const updateBoard = (index) => {
    //Si tiene algo no se actualiza
    if(board[index] || winner) return
    //Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Actualizar turno
    const newTurn = turn ===TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //Vamos a guardar la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    //Mirar si hay ganador con cada actualización del tablero
    const newWinner = checkWinner(newBoard)
    console.log(newWinner)
    if(newWinner){
      confetti()
      setWiner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWiner(false)
    }

  }

  return (
  <main className='w-fit-content text-center mx-auto'>
    <h1 className='flex text-4xl font-bold text-lime-600 mb-4'>Tic-Tac-Toe</h1>
    <section className='grid grid-cols-3 gap-3'>
      {
        board.map((_, index) => {
          return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          }
        )
      }
    </section>
    <section className='flex justify-center m-4 relative rounded-xl'>
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
    <Winner resetGame={resetGame} winner={winner}/>
  </main>
  )
}

export default App
