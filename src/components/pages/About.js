import "../../App.css";
import "./About.css";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

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
          {/* <MapContainer zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

          </MapContainer> */}
        </div>
      </section>
    </>
  );
}
