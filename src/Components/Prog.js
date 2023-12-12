import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/prog.jpg';
import meter2 from '../assets/img/meterp1.avif';
import meter3 from '../assets/img/meterp1.avif';

export const Prog = () => {
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
    <section className="prog" id="prog">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter2} alt="" />
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Nombre: Juan Carlos Laruta Cabrera </h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="aling-items-center">
        </Row>
      </Container>


    </section>
  )
}
