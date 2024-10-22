
import { useState } from "react";

// valor inicial el que nos indiquen, si no será 10
// valor por defecto: initialState = 10
// se hace el export
export const useCounter2 = (initialState = 10 ) => {

    const [state, setState] = useState(initialState);

    // se pasa un argumento: factor
    // por defecto se incrementa en 1
    // valor por defecto: 1
    const increment = (factor = 1) => {
        setState(state + factor)
    }

    const reset = () => {
        setState(initialState)
    }

    const decrement = (factor = 1) => {
        setState(state - factor)
    }

    return {state, increment, decrement, reset}
};




