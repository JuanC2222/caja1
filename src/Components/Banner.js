import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImg from '../assets/img/header-img5.webp'
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["Estudiante", "Hermoso", "Mereceun100"];
    const [text, setText] = useState("");
    const tiempo = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopnum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, fullText.length.length + 1);

        setText(updateText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updateText === fullText) {
            setisDeleting(true);
            setDelta(tiempo);
        } else if (isDeleting && updateText === '') {
            setisDeleting(false);
            setloopnum(loopnum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <h2>{'Hola Soy el programador Juan Carlos'}<spam className="wrap">{text}</spam></h2>
                        <samp className="tagline">Generaciones de las computadoras</samp>
                        <p>La historia del desarrollo de computadores es frecuentemente referido a las diferentes generaciones de dispositivos de computación.</p>
                        <p>Una generación se refiere a la mejora en el proceso de desarrollo del producto. </p>
                        <p>Con cada generación, los circuitos han sido más pequeños y avanzados que en generaciones previas.</p>
                        <p>Como resultado de la miniaturización, velocidad, poder y capacidad de memoria han crecido proporcionalmente. </p>
                        <p>Nuevos descubrimientos están constantemente siendo desarrollados e influyen la forma en que vivimos, trabajamos y jugamos.</p>
                        <p>Cada generación de computadoras es caracterizada por un mayor desarrollo tecnológico que fundamentalmente cambia la forma en que las computadoras operan, dando como resultado productos más pequeños, baratos, poderosos, eficientes y confiables.</p>
                        <button>Mas informacion <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headers" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 