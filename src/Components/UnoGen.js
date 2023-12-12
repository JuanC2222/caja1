import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter11.jpg';
import meter2 from '../assets/img/meter12.jpg';
import meter3 from '../assets/img/meter13.jfif';
import fondo from '../assets/img/color-sharp.png';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const UnoGen = () => {
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
    <section className="unogen" id="unogen">

      <section className="banner" id="home">
        <Container>

          <Row className="aling-items-center">
          

              <samp className="tagline">Primera Generacion</samp>
              <p>Los primeros computadores, utilizaban tubos al vacío para circuitos y
                tambores magnéticos para la memoria y ocupaban cuatros enteros.</p>
              <p>Un tambor magnético, es un cilindro de metal recubierto con material
                magnético de óxido de hierro en que los datos y los programas pueden ser
                almacenados. Estos eran utilizados como dispositivos de almacenamiento primario,
                pero desde entonces se han implementado como dispositivos de almacenamiento
                auxiliar.
              </p>
              <p>La operación de estos equipos era de alto costo y adicionalmente consumían
                gran cantidad de electricidad, generaban mucho calor la cual era la causa de mal
                funcionamiento. La primera generación de computadoras se basaba en lenguaje
                máquina para realizar operaciones y solo podían resolver un tiempo a la vez.</p>
              <p>Los computadores UNIVAC y ENIAC son ejemplos de componentes de la
                primera generación. LA UNIVAC fue la primera computadora comercial entregada
                a un cliente</p>
              <p>El 14 de febrero de 1946, J.P. Eckert y John Mauchly, presentaron el ENIAC,
                que resolvía cinco mil adiciones y sustracciones, trescientos cincuenta
                multiplicaciones o cincuenta divisiones por segundo. Tenía cerca de 19.000
                válvulas sustituidas por año. Esta máquina pesaba 30 toneladas, usaba 200 kW y
                consistía de 18000 tubos al vacío, 1500 relays y cientos de miles de resistores,
                capacitores e inductores. En 1943, antes de la entrada en operación del ENIAC
                Inglaterra ya poseía el Colossus, máquina creada por Turing para descifrar los
                códigos secretos alemanes.</p>
              <p>Cada generación de computadoras es caracterizada por un mayor desarrollo tecnológico que fundamentalmente cambia la forma en que las computadoras operan, dando como resultado productos más pequeños, baratos, poderosos, eficientes y confiables.</p>
              <button>Mas informacion <ArrowRightCircle size={25} /></button>
   

          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">

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
      </section>
      <img className="backgrond-image-left" src={fondo} />
    </section>
  )
}
