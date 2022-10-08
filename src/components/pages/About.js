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
        <div className="equipeBs">
          <div className="person">
            <div>
              <h3>Alexandre Gabriel</h3>
            </div>

            <img src="../img-cards/img-10.jpg" alt="ps1" />
          </div>
          <div className="person">
            <div>
              <h3>Débora Letícia</h3>
            </div>
            <img src="../img-cards/img-12.jpg" alt="ps2" />
          </div>
          <div className="person">
            <div>
              <h3>Heloisa Laia</h3>
            </div>

            <img src="../img-cards/img-11.jpg" alt="ps3" />
          </div>
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
