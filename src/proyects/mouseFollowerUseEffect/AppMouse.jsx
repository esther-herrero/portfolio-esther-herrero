/*
 Enunciado:
 Objetivo: saber cuál es la posición del ratón en la pantalla

 hook useEffect
Permite ejecutar código arbitrario cuando el componente se monta en el DOM y cada vez cambian las dependencias (que le digamos)

código arbitrario: el código que me apetezca poner

useEffect es una función
recibe dos parámetros: el código para ejecutar y la lista de dependencias
como mínimo, se ejecuta una vez

dependencias: ejemplo: quiero que te ejecutes cada vez que cambia el "board" o el turno ( es del proyecto de 3 en raya)

las dependencias son opcionales

se ejecuta cada vez que se renderiza el componente
y, además, cada vez que haya un ganador (winner, ejemplo de 3 en raya)

objetivo del proyecto: seguir el puntero
se puede activar o desactivar con: enabled (es un useState)

se puede usar uno o varios efectos (useEffect)

enabled --> activar y desactivar el efecto
position --> dónde se coloca. detectar la posición del ratón

* */

import './AppMouse.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {
  // activar y desactivar el efecto (que la bolita siga al puntero)
  const [enabled, setEnabled] = useState(false)

  // inicializamos con la posición X e Y en 0
  const [position, setPosition] = useState({ x: 100, y: 100 })

  // pointer move
  // se ejecuta cada vez que cambia el valor de enable
  // cuando se mueve el puntero, se ejecuta la función handleMove
  useEffect(() => {
    console.log('effect ', { enabled })

    // función que se ejecuta cuando se MUEVE el puntero
    // FUNCIÓN handleMove
    // clientX, clientY: es la posición que tiene nuestro puntero
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    // CONDICIONAL
    // funciona solo si enabled es true, me suscribo al evento
    // cuando se mueva el puntero, ejecuta la función handleMove
    // NO SE PUEDE METER UN HOOK DENTRO DE UN CONDICIONAL
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }


    // CLEANUP
    // se ejecuta:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    // limpiar el efecto. las subscripciones las tenemos que limpiar. clean useEffects
    // se ejecuta cuando el componente se desmonta
    // y cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    // se devuelve una función y en ella el cómo limpiar el efecto
    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // DEPENDENCIAS:
  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente



  // change body className
  // desaparece el cursor
  // activar y desactivar la clase
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])



  // función del botón (al hacer click)
  const handleClick = () => {
    setEnabled(!enabled)
  }

  return (
      <>
        {/* estilo de la BOLITA
         transform: posición de la bolita. aquí estamos usando la variable del useState
         */}
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
        <div className="mouseContainer">
          <div>
            <h3>Hook useEffect</h3>
            <h4>
              Objetivo: obtener la posición del ratón en la pantalla <br/>
              y hacer que el puntero lo siga.
            </h4>

            <p className="mouseText">
              Este ejemplo usa el <strong>hook useEffect</strong>, que permite ejecutar código específico cuando el
              componente se monta en el DOM y cada vez que cambian sus dependencias. <br/>
              <strong>useEffect</strong> es una función que recibe dos parámetros: el código que se ejecutará y una
              lista de dependencias opcional. <br/><br/>

              En este proyecto, usamos la variable <strong>"enabled"</strong> para activar o desactivar la función de
              seguimiento del puntero, usando el hook <strong>useState</strong> para gestionar su estado. <br/>

              Además, la variable <strong>"position"</strong> se utiliza para indicar la posición actual del puntero en
              la pantalla.
            </p>

          </div>
          <div>
            <h5> Proyecto Puntero </h5>

            {/* si está enabled, muestra Desactivar
       onClick: si está activo, se hace lo contrario, se llama a la función handleClick */}
            <button onClick={handleClick} className="mouseButton">
              {enabled ? 'Desactivar' : 'Activar'} seguir el puntero
            </button>

            {/* Mostrar posición X e Y debajo del botón */}
            <p>Posición: X = {position.x}, Y = {position.y}</p>

          </div>
        </div>
      </>
  )
}

function AppMouse() {
  return (
      <main className="appMouseContainer">
        <FollowMouse/>
      </main>
  )
}

export default AppMouse;


/*
 [] -> solo se ejecuta una vez cuando se monta el componente
  [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
   undefined -> se ejecuta cada vez que se renderiza el componente
 */