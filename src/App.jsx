import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import GifApp from './proyects/05_gifAppBuscador/GifExpertApp.jsx';
import Counter from "./proyects/contador/Count.jsx";
import Autocomplete from "./proyects/autocomplete/Autocomplete.jsx";
import { ApiExample } from "./proyects/fetch/ApiExample.jsx";
import FormContainer from "./proyects/form/FormContainer.jsx";
import FormConfirmation from "./proyects/form/FormConfirmation.jsx";
import ProductsTable from "./proyects/productsTable/Products.jsx";
import Menu from "./proyects/sidebar/Menu.jsx";
import Listado from "./proyects/renderizadoListas/RenderizadoListas.jsx";
import ToogleBlackWhite from "./proyects/toggleBlackWhite/ToogleBlackWhite.jsx";
import TableProyect from "./proyects/editorTable/Table.jsx";
import App3raya from "./proyects/juego3enRaya/App3raya.jsx";
import AppMouse from "./proyects/mouseFollowerUseEffect/AppMouse.jsx";
import Shop from "./proyects/tienda/Shop.jsx";
import GestorTareas from "./proyects/gestorTareas/gestorTareas.jsx";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Este componente no necesita renderizar nada
};

const App = () => {
    return (
        <Router>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gifapp" element={<GifApp />} />
                <Route path="/app3raya" element={<App3raya />} />
                <Route path="/appMouse" element={<AppMouse />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/autocomplete" element={<Autocomplete />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/gestorTareas" element={<GestorTareas />} />
                <Route path="/apiExample" element={<ApiExample />} />
                <Route path="/form" element={<FormContainer />} />
                <Route path="/form-confirmation" element={<FormConfirmation />} />
                <Route path="/productsTable" element={<ProductsTable />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/listado" element={<Listado />} />
                <Route path="/toggleBlackWhite" element={<ToogleBlackWhite />} />
                <Route path="/tableProyect" element={<TableProyect />} />
            </Routes>
        </Router>
    );
};

export default App;
