
// turnos:
export const TURNS = { // turnos
  X: '❌',
  O: '⚪'
}

// lugares en la matriz
// estas son todas las combinaciones posibles: horizontal, vertical y diagonal
export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
