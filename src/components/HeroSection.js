import "../App.css";
import "./HeroSection.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <video src="videos/video-1.mp4" autoPlay loop muted />
        <h1>Beauty Spa</h1>
        <p>Venha conhecer nosso espaço</p>
        <div className="hero-btns">
          {/* <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Dependências
          </Button> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HeroSection;
