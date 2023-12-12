import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter21.jpg';
import meter2 from '../assets/img/meter22.jfif';
import meter3 from '../assets/img/meter23.jpg';
import fondo from '../assets/img/color-sharp.png';

export const DosGen = () => {
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
    <section className="dosgen" id="dosgen">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Segunda Generacion</h2>
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
      <Container>

        <Row className="aling-items-center">
          <h2>Segunda generación 1956-1963: Transistores</h2>
          <p>En la segunda generación, los transistores reemplazaron a los tubos de
            vacío. Un transistor es un dispositivo compuesto de un material semiconductor que
            amplifica la señal o abre o cierra un circuito. Fue inventado en 1947 en los
            laboratorios BELL, los transistores se han convertido en la llave de todo circuito
            digital, incluyendo a las computadoras. Hoy en día, los procesadores contienen
            millones de transistores microscópicos.</p>
          <p>Ejemplos de esta época son el IBM 1401 y el BURROUGHS B 200. En 1954
            IBM comercializa el 650, de tamaño medio. El primer computador totalmente
            transistorizado fue el TRADIC, de laboratorios Bell. El IBM TX-0, de 1958, tenía un
            monitor de vídeo de primera calidad, era rápido y relativamente pequeño, poseía
            dispositivo de salida sonora. El PDP-1, procesador de datos programable,
            construido por Olsen, fue una sensación en el MIT: los alumnos jugaban Spacewar
            y Ratón en el laberinto, a través de un joystick y un lápiz óptico. </p>
          <p></p>
        </Row>
      </Container>
      
      <img className="backgrond-image-left" src={fondo} />
    </section>
  )
}
