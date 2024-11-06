
/*
Juego 3 en raya
con estado y persistencia de datos en el localStorage, renderizado condicional
renderizado de listas, etc

Array(9).fill(null) --> es un array de 9 posiciones con null

* */


import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
import '../juego3enRaya/index2raya.css'

function App3raya () {

  /*  qué queremos mostrar?
    necesitamos un estado para guardar cuando el usuario hace click en cada posición
  */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  // estado para saber de quién es el turno: de la X o O
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  // función updateBoard
  const updateBoard = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }


  /*
  Tablero
  * */
  return (
    <main className='board'>
      <h3>Tic tac toe</h3>
      <button onClick={resetGame}>Reset del juego</button>
      {/* juego con 3 columnas y 3 filas
      index: el índice es lo que vamos a renderizar

      key={index} --> para renderizar una lista de elementos, necesitamos la key (identificador único)
      en este caso usamos el index, pero hay que utilizar el identificador único ( en general )

      .map nos devuelve un array.
      cada elemento se va a renderizar dentro del Square

      updateBoard -> le pasamos una función
      */}
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>


      {/* turnos
      prop isSelected --> para saber a quién le toca
      */}
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App3raya;
