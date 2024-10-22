import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import Portfolio from '../src/components//Portfolio';
import About from '../src/components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifApp from './proyects/05_gifAppBuscador/GifExpertApp.jsx';
import './App.css'


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/portfolio-esther-herrero/gifapp" element={<GifApp />} />
                <Route path="/portfolio-esther-herrero" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                {/* Puedes agregar otras rutas si es necesario */}
            </Routes>
        </Router>
    );
};

export default App;


