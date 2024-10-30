
// CUSTOM HOOK --> useForm

// custom hook que nos ayude a manejar el formulario (123)

// recibe el estado del formulario

// se coloca un "use" delante porque es un custom hook

import {useState} from "react";

// estado inicial --> initialState = {}
// valor inicial: es igual a un objeto vacío
// va a recibir name, email y password
export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState(initialForm)

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // función para RESETEAR
    // va a restablecer los valores (name, email, etc.)
    // retorna al punto inicial del formulario
    // es decir, todos los campos vacíos
    // se coloca el on delante del nombre
    // setFormState es el valor inicial del formulario
    const onResetForm = () => {
        setFormState( initialForm );
    }



    // se retorna como un array ( como un objeto )
    // primer valor: el estado del formulario
    // segundo valor: la función
    return {
        ...formState,  // se desestructura
        formState,     // el valor del formulario
        onInputChange, // función para hacer el cambio
        onResetForm,   // función de reseteo
    }
}











