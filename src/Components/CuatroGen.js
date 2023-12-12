import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter41.jpg';
import meter2 from '../assets/img/meter42.jfif';
import meter3 from '../assets/img/meter43.jpg';
import fondo from '../assets/img/color-sharp.png';

export const CuatroGen = () => {
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
    <section className="cuatrogen" id="cuatrogen">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Cuarta Generacion</h2>
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


          <samp className="tagline">Cuarta Generacion</samp>
          <h2>Cuarta Generación (1971-1988)</h2>
          <p>En esta generación se denota el reemplazo de las memorias de núcleos
            magnéticos por memorias de chips de silicio y, la incorporación de muchos más
            componentes en un chip como producto de la miniaturización de los circuitos. El
            tamaño reducido el microprocesador hizo posible la creación de las computadoras
            personales.</p>
          <p>En 1971, Intel, presenta el primer microprocesador o Chip de 4 bits, que en
            un espacio de aproximadamente 4 x 5 mm contenía 2 250 transistores. Este primer
            microprocesador fue bautizado como el 4004.</p>
          <p>Surgieron una gran cantidad de fabricantes de computadoras personales,
            que utilizan diferentes estructuras o arquitecturas, que compiten en el mercado.</p>
          <p>Esta generación de computadoras se caracterizó por grandes avances
            tecnológicos realizados en un tiempo muy corto. </p>

        </Row>
      </Container>

      <img className="backgrond-image-left" src={fondo} />
    </section>
  )
}
