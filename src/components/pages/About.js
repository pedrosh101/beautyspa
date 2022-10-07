import "../../App.css";
import "./About.css";
import aboutImg from "../../images/aboutImg.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Map from "./Map";

export default function About() {
  return (
    <>
      <section className="pageHeader">
        <Navbar />
        <div className="pageContent">
          <img src={aboutImg} alt="back" className="background" />
          <h1>Sobre Nós</h1>
        </div>
        <div class="location">
          <div class="location-text">
            <h1>Onde Estamos</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              reprehenderit modi neque? Nemo, atque. Magni eveniet consequuntur
              magnam maxime praesentium ullam obcaecati.
            </p>
          </div>
          <div id="map">
            <Map />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
