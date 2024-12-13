import { createContext, useContext, useState } from "react";
import './styles.css'

// Contexto del Tema
const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    // tiene un estado global o singleton:
    const [theme, setTheme] = useState('light'); // por defecto es light

    // Función para alternar entre temas
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

/*  Custom hook
Hook personalizado useTheme
Tu hook useTheme asegura que se use dentro de un ThemeProvider.
*/
const useTheme = () => {
    const context = useContext(ThemeContext)   // consumer

    if (!context) {
        throw new Error('useTheme debe usarse dentro de un ThemeProvider')
    }
    return context;
}

const CreateContextExample = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme"
             style={{
                 backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
                 color: theme === 'light' ? '#000000' : '#ffffff',
                 padding: '5rem 15rem',
                 textAlign: 'center',
                 transition: 'all 0.3s ease',
                 borderRadius: '12px',
                 width: '42%',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center'
             }}
        >
            <h3> {`Tema actual: ${theme}`} </h3>
            <button onClick={toggleTheme}>
                Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
            </button>
        </div>
    );
};

const AccordionItem = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={() => setShow(!show)}>
                {question}
                <span className={`arrow ${show ? 'arrow-up' : 'arrow-down'}`}>▼</span>
            </div>
            {show && (
                <div className="accordion-content show" dangerouslySetInnerHTML={{ __html: answer }}></div>
            )}
        </div>
    );
};


const Accordion = () => {
    const items = [
        {
            question: "¿Qué es el contexto en React?",
            answer: "<p>El <strong>contexto en React</strong> es una forma de compartir <strong>valores (datos)</strong> entre componentes sin tener que pasar explícitamente props a través de cada nivel del árbol de componentes.</p>" +
                "<p> Esto es útil para datos \"globales\" que muchos componentes en la aplicación necesitan, como el tema (claro/oscuro), el usuario autenticado, la configuración de la aplicación, etc.</p>"
        },
        {
            question: "¿Cuándo se usa?",
            answer: "<p>El contexto se usa cuando ciertos datos necesitan ser <strong>accesibles</strong> en muchos niveles del árbol de componentes. Algunos <strong>ejemplos</strong> comunes incluyen:</p><ul><li>Tema de la aplicación (claro/oscuro)</li><li>Idioma preferido</li><li>Información del usuario autenticado</li><li>Configuración de la aplicación</li></ul>"
        },
        {
            question: "¿Para qué sirve?",
            answer: "<p>El objetivo del contexto es <strong>evitar la \"prop drilling\"</strong>, que es el proceso de pasar props a través de múltiples niveles de componentes para llegar a un componente específico. </p> <p> Esto puede hacer que el código sea más limpio y fácil de mantener.</p>"
        },
        {
            question: "¿Cuál es el objetivo?",
            answer: "<p>El objetivo principal del contexto es proporcionar una forma eficiente y limpia de <strong>compartir datos a través de múltiples componentes sin tener que pasar props manualmente</strong> en cada nivel. </p> <p> Esto hace que el código sea más modular y menos propenso a errores.</p>"
        }
    ];


    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>
    );
};


/*  Componente principal
Envuelve tus componentes con el ThemeProvider para asegurarte de que pueden acceder al contexto del tema.  */
export const CreateContextPage = () => {
    return (
        <ThemeProvider>
            <div className="containerContext">
                <h3>Ejemplo con createContext y Provider</h3>
                <div className="containerRow">
                    <Accordion />
                    <CreateContextExample />
                </div>
            </div>
        </ThemeProvider>
    );
};






