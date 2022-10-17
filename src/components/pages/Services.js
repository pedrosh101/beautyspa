import "./Services.css";
import React from "react";
import servicesImg from "../../images/servicesImg.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";



function Services() {


  return (
    <>
      <section className="pageHeader">
        <Navbar />
        <div className="pageContent">
          <img src={servicesImg} alt="back" className="background" id="servBack" />
          <h1>Terapia</h1>
        </div>
        <div className="servicoContainer">
          <div className="servico">
            <div className="compile">
              <div className="imgframe">
                <img src="../img-cards/img-2.jpg" alt="acupuntura" />
                <h1>Acupuntura</h1>
              </div>
              <div className="description">
                <p>
                  A acupuntura é um método tradicional chinês voltado pra o
                  alívio de dores e relaxamento. A inserção de de finas agulhas
                  indolores na pele do paciente rebalanceiam a energia (qi) e
                  estimulam o corpo a liberar suas químicas naturais para
                  combater doenças ou sintomas.
                </p>
              </div>
            </div>
          </div>
          <div className="servico">
            <div className="compile inv">
              <div className="description">
                <p>
                  Reiki é uma técnica milenar japonesa voltada para a cura
                  energética, proporcionando seu fluxo e removendo bloqueios.
                  Relaxamento, alívio de dor e cura, são alguns benefícios dessa
                  prática que aliada com outros tratamentos pode oferecer uma
                  significativa melhora na qualidade de vida.
                </p>
              </div>
              <div className="imgframe">
                <img src="../img-cards/img-1.jpg" alt="reiki" />
                <h1>Reiki</h1>
              </div>
            </div>
          </div>
          <div className="servico">
            <div className="compile">
              <div className="imgframe">
                <img src="../img-cards/img-3.jpg" alt="quiro" />
                <h1>Quiropraxia</h1>
              </div>
              <div className="description">
                <p>
                  O termo Quiropraxia deriva de duas raízes gregas: "Quiro"
                  (mãos) e "Praxis" (praticar), ou seja, "praticar com as mãos".
                  A técnica lida com o diagnóstico, o tratamento e a prevenção
                  de problemas no sistema neuro-músculo-esquelético, bem como
                  seus efeitos na saúde em geral.
                </p>
              </div>
            </div>
          </div>
          <div className="servico">
            <div className="compile inv">
              <div className="description">
                <p>
                  A massagem pós-cirúrgica é muito procurada por pessoas que
                  passaram por cirurgias plásticas, como abdominoplastias e
                  lipoaspirações, que resultam na retenção de líquido. Mas
                  também é muito indicada em casos de cirurgias de varizes,
                  ortopédicas e outras em que o paciente passa dias de repouso
                  ou ganha hematomas localizados.
                </p>
              </div>
              <div className="imgframe">
                <img src="../img-cards/img-6.jpg" alt="posc" />
                <h1>Pós-Cirúrgico</h1>
              </div>
            </div>
          </div>
          <div className="servico">
            <div className="compile b">
              <div className="imgframe">
                <img src="../img-cards/img-7.jpg" alt="mass" />
                <h1>Massagens Relaxantes</h1>
              </div>
              <div className="description">
                <p>
                  Nossa massagem relaxante, reduz o estresse e melhora a
                  circulação. Pode ser feita quantas vezes você desejar e os
                  benefícios podem ser percebidos até mesmo se você optar por
                  fazer massagem apenas uma vez por mês.
                </p>
              </div>
            </div>
          </div>
          <div className="servico">
            <div className="compile inv b">
              <div className="description">
                <p>
                  A massagem estética é uma massagem feita com movimentos mais
                  fortes e profundos, com o intuito de atingir camadas mais
                  profundas da pele. Essa massagem deve ser feita uma ou duas
                  vezes por semana, e normalmente o tratamento deve ser
                  contínuo, para ter a manutenção dos resultados.
                </p>
              </div>
              <div className="imgframe">
                <img src="../img-cards/img-4.jpg" alt="massest" />
                <h1>Massagem Estética</h1>
              </div>
            </div>
          </div>
          <div className="servico">
            <div className="compile b">
              <div className="imgframe">
                <img src="../img-cards/img-5.jpg" alt="dren" />
                <h1>Drenagem Linfática</h1>
              </div>
              <div className="description">
                <p>
                  A drenagem linfática é uma técnica de massagem que estimula a
                  regeneração dos tecidos e melhora o sistema imunológico. A
                  principal função da drenagem linfática é retirar os líquidos
                  acumulados entre as células e os resíduos metabólicos. Ao
                  serem retiradas do local armazenado, tais substâncias são
                  eliminadas através das vias naturais.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Services;
