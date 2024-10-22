
// useFetch - CustomHook (125)
// ANTIGUO !!

//   es el componente que va a trabajar con la info de useFetch
//  los dos hooks se comunican

import React, {useEffect, useState} from "react";

// ( url ) --> pedimos la url -->  https://www.breakingbadapi.com/api/quotes/1
export const useFetch = ( url ) => {

    // esta es la data que se coloca al final en el return
    // se le pasa la info: data, loading y error
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null  // maneja si hay un error
    });



    // cada vez que cambia la url --> se dispara el efecto
    // si la url es la misma, no pasa nada
    useEffect( () =>{

        // si queremos que aparezca el "loading" cada vez que presionamos el botón de "siguiente quote"
        // vuelve a poner el loading en true
        // regresa un nuevo estado
        // si se manda el setState a un objeto, hay que pasarle todas las propiedades
        setState( { data: null, isLoading: true, error: null } )

        // hacemos la petición fetch:
        fetch( url )
            // regresa una promesa:
            .then( respuesta => respuesta.json() )
            .then( data => {

                // cuando tenemos la data, llamamos al set State
                setState({
                    isLoading: false, // en false, porque ya se terminó de cargar
                    error: null,  // porque no hay ningún error
                    data
                })
            });
    }, [url])

    // deps: [url] --> le estamos diciendo: ejecútate solo cuando la url cambia

    return state;
}









