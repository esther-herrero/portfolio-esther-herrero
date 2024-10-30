import { useState } from 'react'

// valor inicial el que nos indiquen, si no será 10
// valor por defecto: initialState = 10
// se hace el export
export const useCounter1 = (initialState = 10) => {

  const [counter, setCounter] = useState(initialState)

    // se pasa un argumento: factor
    // por defecto se incrementa en 1
    const increment = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(initialState)
    }

    // const decrement = () => {
    //     setCounter(counter - 1)
    // }


    // así como máximo llega a 0 y no hay números negativos
    // un ejemplo: un carrito de compras
    const decrement = () => {
        if ( counter === 0 ) return;
        setCounter(counter - 1)
    }

    return { counter, increment, decrement, reset }
}