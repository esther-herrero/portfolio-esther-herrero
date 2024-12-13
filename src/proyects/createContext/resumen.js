/*

¿Qué es el contexto en React?
El contexto en React es una forma de compartir valores (datos) entre componentes sin tener que pasar explícitamente props a través de cada nivel
del árbol de componentes. Esto es útil para datos "globales" que muchos componentes en la aplicación necesitan, como el tema (claro/oscuro),
el usuario autenticado, la configuración de la aplicación, etc.

¿Cuándo se usa?
El contexto se usa cuando ciertos datos necesitan ser accesibles en muchos niveles del árbol de componentes. Algunos ejemplos comunes incluyen:
- Tema de la aplicación (claro/oscuro)
- Idioma preferido
- Información del usuario autenticado
- Configuración de la aplicación

¿Para qué sirve?
El objetivo del contexto es evitar la "prop drilling", que es el proceso de pasar props a través de múltiples niveles de componentes
para llegar a un componente específico. Esto puede hacer que el código sea más limpio y fácil de mantener.

¿Cuál es el objetivo?
El objetivo principal del contexto es proporcionar una forma eficiente y limpia de compartir datos a través de múltiples componentes sin tener
que pasar props manualmente en cada nivel. Esto hace que el código sea más modular y menos propenso a errores.

    */


