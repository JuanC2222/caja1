import { Navbar,Container,Nav } from "react-bootstrap";
import { useState,useEffect } from "react";
import Logo from '../assets/img/logo2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY >50){
                setScrolled(true);
            }else{
                setScrolled(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=> window.removeEventListener  ("scroll", onScroll);
    },[]);

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo}alt = "Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"className={setActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Principal</Nav.Link>
                        <Nav.Link href="#unogen"className={setActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('PrimeraGeneracion')}>Primera</Nav.Link>
                        <Nav.Link href="#dosgen"className={setActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('SegundaGeneracion')}>Segunda</Nav.Link>
                        <Nav.Link href="#tresgen"className={setActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('TercerGeneracion')}>Trecera</Nav.Link>
                        <Nav.Link href="#cuatrogen"className={setActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('CuartaGeneracion')}>Cuarta</Nav.Link>
                        <Nav.Link href="#cincogen"className={setActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('QuintaGeneracion')}>Quinta</Nav.Link>
                        <Nav.Link href="#seisgen"className={setActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('SextaGeneracion')}>Sexta</Nav.Link>
                        <Nav.Link href="#prog"className={setActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('Progamador')}>Programador</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src ={navIcon1} alt="" /> </a>
                            <a href="#"><img src ={navIcon2} alt="" /> </a>
                            <a href="#"><img src ={navIcon3} alt="" /> </a>
                        </div>
                     
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}