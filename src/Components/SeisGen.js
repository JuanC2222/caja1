import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter61.jpg';
import meter2 from '../assets/img/meter62.webp';
import meter3 from '../assets/img/meter63.jpg';
import fondo from '../assets/img/color-sharp.png';

export const SeisGen = () => {
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
    <section className="seisgen" id="seisgen">
      <Container>

        <Row className="aling-items-center">
        <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Sexta Generacion</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="item">
                                        <img src = {meter1} alt ="image"/>
                                        <h5>Imagen 1</h5>
                                    </div>
                                    <div className="item">
                                        <img src = {meter2} alt ="image"/>
                                        <h5>Imagen 2</h5>
                                    </div>
                                    <div className="item">
                                        <img src = {meter3} alt ="image"/>
                                        <h5>Imagen 3</h5>
                                    </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

          <samp className="tagline">Sexta Generacion</samp>
<p>La sexta generación se podría llamar a la era de las computadoras
inteligentes basadas en redes neuronales artificiales o "cerebros artificiales". Serían
computadoras que utilizarían superconductores como materia-prima para sus
procesadores, lo cual permitirían no malgastar electricidad en calor debido a su nula
resistencia, ganando rendimiento y economizando energía. La ganancia de
rendimiento sería de aproximadamente 30 veces la de un procesador de misma
frecuencia que utilice metales comunes.</p>
<p>Todo esto está en pleno desarrollo, por el momento las únicas novedades
han sido el uso de procesadores en paralelo, o sea, la división de tareas en múltiples
unidades de procesamiento operando simultáneamente. Otra novedad es la
incorporación de chips de procesadores especializados en las tareas de vídeo y
sonido.</p>
<p></p>


        </Row>
      </Container>

      <img className="backgrond-image-left" src={fondo} />
    </section>
  )
}
