import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from "./components/pages/About";
import SignUp from './components/pages/SignUp';
import Footer from "./components/Footer";
import Reiki from "./components/servicos/Reiki";
import Acupuntura from "./components/servicos/Acupuntura";
import Quiropraxia from "./components/servicos/Quiropraxia";
import MassagemEstetica from "./components/servicos/MassagemEstetica";
import DrenagemLinfatica from "./components/servicos/DrenagemLinfatica";
import PosCirurgico from "./components/servicos/PosCirurgico";
import MassagensRelaxantes from "./components/servicos/MassagensRelaxantes";



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/servicos/reiki' element={<Reiki />} />
          <Route path='/servicos/acupuntura' element={<Acupuntura />} />
          <Route path='/servicos/quiropraxia' element={<Quiropraxia />} />
          <Route path='/servicos/massagemestetica' element={<MassagemEstetica />} />
          <Route path='/servicos/drenagemlinfatica' element={<DrenagemLinfatica />} />
          <Route path='/servicos/poscirurgico' element={<PosCirurgico />} />
          <Route path='/servicos/massagensrelaxantes' element={<MassagensRelaxantes />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
