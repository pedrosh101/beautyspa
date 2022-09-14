import "../../App.css";
import "./About.css";
import Map from "./Map";



export default function About() {
  return (
    <>
        <div className="about">
          <h1>Sobre Nós</h1>
        </div>
        <section class="location">
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
        </section>
    </>
  );
}
