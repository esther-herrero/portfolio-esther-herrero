import img1 from '../../public/img/img_01.jpg';
import img2 from '../../public/img/img_02.png';
import img3 from '../../public/img/img_03.png';
import img4 from '../../public/img/img_04.png';
import img5 from '../../public/img/img_05.png';
import img6 from '../../public/img/img_06.jpg';
import img7 from '../../public/img/img_07.png';
import img8 from '../../public/img/img_08.png';
import img9 from '../../public/img/img_09.jpg';
import img10 from '../../public/img/img_10.jpg';
import img11 from '../../public/img/img_11.jpg';
import img12 from '../../public/img/img_12.jpg';
import img13 from '../../public/img/img_13.jpg';
import img14 from '../../public/img/img_14.jpg';
import img15 from '../../public/img/img_15.jpg';
import img16 from '../../public/img/img_16.jpg';

const projects = [
    {
        title: "GifApp Buscador",
        description: "Busca y visualiza GIFs utilizando la API de Giphy. <br /> Ahí está Aloy dándolo todo :)",
        imgSrc: img1,
        link: "gifapp",
    },
    {
        title: "Juego 3 en raya",
        description: "Prueba el mítico juego de 3 en raya",
        imgSrc: img15,
        link: "/app3raya",
    },
    {
        title: "Pointer en el mouse. Posicionamiento",
        description: "Puntero con eje x e y que sigue al mouse, usando useEffect",
        imgSrc: img16,
        link: "/appMouse",
    },
    {
        title: "Counter",
        description: "Un pequeño y rápido contador. <br />Incrementa, decrementa y resetea!",
        imgSrc: img2,
        link: "/counter",
    },
    {
        title: "Autocomplete",
        description: "Buscar, agrega y elimina. <br /> Ejemplo con una lista de la compra.",
        imgSrc: img3,
        link: "/autocomplete",
    },
    {
        title: "API con React",
        description: "Ejemplo de Consumo de API con React (API JSONBIN). <br /> Se pueden realizar peticiones para obtener y enviar datos.",
        imgSrc: img4,
        link: "/apiExample",
    },
    {
        title: "Formulario de Registro Interactivo",
        description: "Con una segunda pestaña <br /> donde se muestra un resumen de los datos introducidos.",
        imgSrc: img5,
        link: "/form",
    },
    {
        title: "Tabla con buscador",
        description: "Muestra los productos en stock.<br /> Además, incorpora un buscador para filtrar dentro de la tabla.",
        imgSrc: img6,
        link: "/productsTable",
    },
    {
        title: "Menu y Dashboard",
        description: "Pequeño Dashboard con una tabla y menú lateral.",
        imgSrc: img7,
        link: "/menu",
    },
    {
        title: "Renderizado listas",
        description: "Muestra una lista de elementos obtenidos de una API.",
        imgSrc: img8,
        link: "/listado",
    },
    {
        title: "Switch (toggle) Modo claro y oscuro",
        description: "Escoge entre modo claro u oscuro.",
        imgSrc: img9,
        link: "/toggleBlackWhite",
    },
    {
        title: "Tabla con edición y filtrado",
        description: "Tabla con botón de agregar, editar, duplicar y eliminar.<br /> Con inputs para agregar nuevos elementos a la tabla <br /> y modal en el editor.",
        imgSrc: img10,
        link: "/tableProyect",
    },
    {
        title: "Tienda",
        description: "... <br /> ... ",
        imgSrc: img11,
        link: "/shop",
    },
    {
        title: "Workspace 7",
        description: "En construcción!  <br />  Estoy en ello, en unos días subo proyecto :)",
        imgSrc: img12,
        link: "/workspace",
    },
    {
        title: "Workspace 8",
        description: "En construcción!  <br />  Estoy en ello, en unos días subo proyecto :)",
        imgSrc: img13,
        link: "/workspace",
    },
    {
        title: "Workspace 9",
        description: "En construcción!  <br />  Estoy en ello, en unos días subo proyecto :)",
        imgSrc: img14,
        link: "/workspace",
    },

    // próximos proyectos
    // calculadora
    // gestor de tareas
    {
        title: "Lista de tareas",
        description: "Agrega, elimina, marcar como completada y organizar tareas. <br />  Estoy en ello, en unos días subo proyecto :)",
        imgSrc: img14,
        link: "/workspace",
    },


];
export default projects;