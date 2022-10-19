import "../App.css";
import "./HeroSection.css";
import Footer from "./Footer";
import mainImg from "../images/mainImg.jpg";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
    <section className="pageHeader">
      <Navbar />
    <div className="pageContent">
          <img src={mainImg} alt="back" className="background" />
          
        <h1>Beauty Spa</h1>
        <p>Venha conhecer nosso espaço</p>
        </div>
      <Footer />
    </section>
    </>
  );
}

export default HeroSection;
