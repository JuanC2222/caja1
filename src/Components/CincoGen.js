import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter53.jpg';
import meter2 from '../assets/img/meter52.jfif';
import meter3 from '../assets/img/meter51.jfif';
import fondo from '../assets/img/color-sharp.png';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const CincoGen = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="cincogen" id="cincogen">
      <Container>

        <Row className="aling-items-center">
          <Container>
            <Row>
              <Col>
                <div className="skill-bx">
                  <h2>Quinta Generacion</h2>
                  <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                      <img src={meter1} alt="image" />
                      <h5>Imagen 1</h5>
                    </div>
                    <div className="item">
                      <img src={meter2} alt="image" />
                      <h5>Imagen 2</h5>
                    </div>
                    <div className="item">
                      <img src={meter3} alt="image" />
                      <h5>Imagen 3</h5>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
          <h2>Quinta Generación 1991-Actualidad</h2>
          <p>Las aplicaciones exigen cada vez más una mayor capacidad de
            procesamiento y almacenamiento de datos. Sistemas especiales, sistemas
            multimedia, bases de datos distribuidas y redes neuronales, son sólo algunos
            ejemplos de esas necesidades. Una de las principales características de esta
            generación es la simplificación y miniaturización del computador, además de mejor
            desempeño y mayor capacidad de almacenamiento. Todo eso, con los precios cada
            vez más accesibles. El concepto de procesamiento está yendo hacia los
            procesadores paralelos, o sea, la ejecución de muchas operaciones
            simultáneamente por las máquinas. La reducción de los costos de producción y del
            volumen de los componentes permitió la aplicación de estos computadores en los
            llamados sistemas embutidos, que controlan aeronaves, embarcaciones,
            automóviles y computadores de pequeño porte. Son ejemplos de esta generación
            de computadores, los micros que utilizan la línea de procesadores Pentium, de
            INTEL. </p>
          <p>No hay grandes novedades después de 1997, ya que los cambios estuvieron
            basados en los cada vez más veloces procesadores. </p>
          <p>La última etapa de la quinta generación de computadoras fue anunciada
            como la de las "computadoras inteligentes", basadas en Inteligencia Artificial,
            iniciada por un famoso proyecto en Japón, y que finalizó en un estrepitoso fracaso;
            a partir de ahí, la cuenta de las generaciones de computadoras es un poco confusa. </p>
          <p></p>
          <p></p>
          <p></p>


        </Row>
      </Container>

      <img className="backgrond-image-left" src={fondo} />
    </section>
  )
}
