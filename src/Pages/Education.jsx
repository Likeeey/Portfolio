import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Card, Col } from "react-bootstrap";
import IronLogo from "../assets/IronhackLogo.png"
import ImtLogo from "../assets/ImtLogo.png"
import MasterDLogo from "../assets/MasterDLogo.jpg"
import SecundariaLogo from "../assets/SecundariaLogo.jpg"
import Footer from "../Components/Footer";

function Education () {
    return (
        <section>
            <div>
                <Header/>
            </div>
            <nav style={{margin: "40px"}}>
                <Navbar/>
            </nav>
            <div style={{marginTop: "40px"}} className="container d-flex flex-column align-items-center">
                <Col xs={12} sm={8} md={6} lg={5}>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={IronLogo} />
                        <Card.Body>
                            <Card.Title>Web Development Bootcamp</Card.Title>
                            <Card.Text>
                                Ironhack Lisbon | Jan 2024 - Mar 2024
                            </Card.Text>
                            <Card.Text>
                                Front-end technologies: HTML5, CSS, Javascript, ReactJS<br/>
                                Back-end technologies: ExpressJS, NodeJS, MongoDB
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={8} md={6} lg={5}>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={ImtLogo} />
                        <Card.Body>
                            <Card.Title>Masseur and physiotherapy assistant</Card.Title>
                            <Card.Text>
                                Instituto de Medicina Tradicional | Jul 2015 - Jul 2016
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={8} md={6} lg={5}>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={MasterDLogo} />
                        <Card.Body>
                            <Card.Title>Renewable energy technician</Card.Title>
                            <Card.Text>
                                Master D | 2012 - 2013
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={8} md={6} lg={5}>
                    <Card>
                        <Card.Img className="card-img" variant="top" src={SecundariaLogo} />
                        <Card.Body>
                            <Card.Title>Sports Technology course</Card.Title>
                            <Card.Text>
                                Agrupamento de Escolas da Portela e Moscavide | 2009 - 2012
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            <Footer/>
        </section>
    );
}

export default Education;