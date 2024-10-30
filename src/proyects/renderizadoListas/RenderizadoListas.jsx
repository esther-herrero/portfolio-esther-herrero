
/*Renderizado de listas
A menudo querrás mostrar muchos componentes similares de una colección de datos.
Puedes usar los métodos de array de JavaScript para manipular un array de datos.
En esta página, usarás filter() y map() con React para filtrar y transformar tu array
de datos en un array de componentes.*/

import {people} from "./Data";
import './styles.css'

export default function Listado() {
    const listItems = people.map(person =>
        <li key={person.id}>
            <img
                src={person.imgSrc}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b> <br/>
                del universo {person.universe}, <br/>
                {' '}
                {person.accomplishment}
            </p>
        </li>
    );

    return (
        <article>
            <h1>Personajes</h1>
            <h4>Renderizado de listas</h4>
            <ul>{listItems}</ul>
        </article>
    );
}