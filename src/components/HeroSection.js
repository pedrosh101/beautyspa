import "../App.css";
import "./HeroSection.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <Navbar />
      <div className="heroContainer">
        <video src="videos/video.mp4" autoPlay loop muted />
        <h1>Beauty Spa</h1>
        <p>Venha conhecer nosso espaço</p>
      </div>
      <Footer />
    </>
  );
}

export default HeroSection;
