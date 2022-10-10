import "./Services.css";
import React from "react";
import esteticaImg from "../../images/esteticaImg.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Estetica() {
  return (
    <>
      <section className="pageHeader">
        <Navbar />
        <div className="pageContent">
          <img src={esteticaImg} alt="back" className="background" />
          <h1>Estética</h1>
        </div>
        <div className="servicoContainer">
          <div className="servico">
            <div className="compile">
              <div className="imgframe">
                <img src="../img-cards/img-8.jpg" alt="acupuntura" />
                <h1>Cabelo</h1>
              </div>
              <div className="description">
                <p>
                  Nosso serviço especializado em cabelos é focado em
                  procedimentos diversos, desde os mais tradicionais até mais
                  complexos, com tratamento de total qualidade e cuidado.
                </p>
              </div>
            </div>
          </div>
          <div className="servico">
            <div className="compile inv">
              <div className="description">
                <p>
                  Uma maquiagem bem feita visa ressaltar os pontos fortes de
                  cada rosto e utilizar cada produto de maneira inteligente e
                  funcional.
                </p>
              </div>
              <div className="imgframe">
                <img src="../img-cards/img-9.jpg" alt="reiki" />
                <h1>Maquiagem</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Estetica;
