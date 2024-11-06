

/* Square --> es un componente
es un cuadrado dónde vamos a jugar

se le pasa las propiedades:
- children: lo que tiene dentro el tablero, por si queremos mostrar la X o la 0
- updateBoard: la forma en la que se actualiza el tablero, al hacer click, hay que actualizar el tablero
- index: para saber qué índice es

clasname: se crea con una variable --> es un condicional

handleclicKk: qué pasa cada vez que se le da click a cada recuadro

isSelected: para saber a quién le toca. si es true es un color
*/

export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
