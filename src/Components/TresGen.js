import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter31.jpg';
import meter2 from '../assets/img/meter32.jpg';
import meter3 from '../assets/img/meter33.jfif';
import fondo from '../assets/img/color-sharp.png';

export const TresGen = () => {
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
    <section className="tresgen" id="tresgen">

      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Tercera Generacion</h2>
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
          <samp className="tagline">La tercera Generación 1964-1971: Circuitos integrados</samp>
          <p>En la década del 60, el desarrollo de los circuitos integrados fue la marca de
            la tercera generación. Los transistores fueron minimizados y puestos en placas de
            silicón, llamados semiconductores, los cuales incrementaron drásticamente la
            velocidad y eficiencia de los computadores.
          </p>
          <p>El Burroughs B-2500 fue uno de los primero y estos podían almacenar
            millones de números. Surgen conceptos como memoria virtual, multiprogramación
            y sistemas operacionales complejos. Ejemplos de esta época son el IBM 360 y el
            BURROUGHS B-3500. </p>
          <p>En 1960 existían cerca de 5.000 computadores en los EUA. Es de esta época
            el término software. En 1964, la CSC, Computer Science Corporation, creada en
            1959 con un capital de 100 dólares, se transformó en la primera compañía de
            software con acciones negociadas en bolsa. El primer mini computador comercial
            surgió en 1965, el PDP-5, dependiendo de su configuración y accesorios él podía
            ser adquirido por US$ 18,000.00. Le siguió el PDP-8, de precio más competitivo.
            Siguiendo su camino otras compañías lanzaron sus modelos, haciendo que a finales
            de la década ya existieran cerca de 100.000 computadores esparcidos por el
            mundo. En 1970 INTEL introdujo en el mercado un nuevo tipo de circuito integrado:
            el microprocesador. El primero fue el 4004, de cuatro bits. A partir de ahí surgen
            los microcomputadores. </p>
          <p>Para muchos, la cuarta generación surge con los chips VLSI, de integración
            a muy larga escala. Las cosas comienzan a desarrollarse con mayor rapidez y
            frecuencia. En 1972 Bushnell lanza el vídeo juego Atari.</p>
          <p>En 1975 Paul Allen y Bill Gates crean Microsoft y el primer software para
            microcomputador: una adaptación BASIC para el ALTAIR. En 1976 Kildall establece
            la Digital Research Incorporation, para vender el sistema operacional CP/M. En
            1977 Jobs y Wozniak crean el microcomputador Apple, a Radio Shack el TRS-80 y
            la Commodore el PET. </p>
          <p></p>
        </Row>
      </Container>
      <img className="backgrond-image-left" src={fondo} />
    </section>
  )
}
