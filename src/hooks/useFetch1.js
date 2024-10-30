
// useFetch - CustomHook (124)
// nuevo!!

//   es el componente que va a trabajar con la info de useFetch
//  los dos hooks se comunican

import React, {useEffect, useState} from "react";

// ( url ) --> pedimos la url -->  https://www.breakingbadapi.com/api/quotes/1
export const useFetch1 = ( url ) => {

    // esta es la data que se coloca al final en el return
    // se le pasa la info: data, loading y error
    // esta es la data que se regresa abajo ( en el return )
    const [state, setState] = useState({
        data: null,
        isLoading: true, // saber cuándo se está cargando
        hasError: null  // maneja si hay un error. está en null porque no hay ningún error
    });


    // esta es la petición
    // es una función asíncrona
    const getFetch = async () => {

        // vuelve a poner el loading en true
        // si se vuelve a llamar al getFetch
        setState( {
            ...state, // se desestructura todo el state actual
            isLoading: true,
        });

        // hacemos la petición fetch:
        // se almacena la respuesta:
        const resp = await fetch(url); // llamamos al fetch y le pasamos la url como argumento
        // data: el await de la respuesta
        const data = await resp.json();

        // cuando tenemos la data, llamamos al set State
        // regresa un nuevo estado
        // si se manda el setState a un objeto, hay que pasarle todas las propiedades
        // se manda llamar el setState
        setState({
            isLoading: false, // en false, porque ya se terminó de cargar
            hasError: null,  // porque no hay ningún error
            data
        });
    }


    // cada vez que la url cambie, se va a disparar la petición fetch
    useEffect(() => {
        getFetch(); // aquí se dispara la petición fetch (aquí se manda llamar la función de getFetch)
    }, [url])

    // deps: [url] --> le estamos diciendo: ejecútate solo cuando la url cambia

    // a)
    // return state;

    // b) especificar valores de retorno:
    return {
        isLoading: state.isLoading,
        data: state.isLoading,
        hasError: state.hasError,
    };
}














