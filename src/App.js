import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
          <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Router>
    </>
  );
}

export default App;
