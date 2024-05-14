import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Carousel from 'react-bootstrap/Carousel';
import Titanic from "../assets/Titanic.png"
import Titanic1 from "../assets/Titanic1.png"
import Titanic2 from "../assets/Titanic2.png"
import PetShop from "../assets/PetShop.png"
import PetShop1 from "../assets/PetShop1.png"
import PetShop2 from "../assets/PetShop2.png"
import Lusitanian from "../assets/Lusitanian.png"
import Lusitanian1 from "../assets/Lusitanian1.png"
import Lusitanian2 from "../assets/Lusitanian2.png"
import Lusitanian3 from "../assets/Lusitanian3.png"
import Lusitanian4 from "../assets/Lusitanian4.png"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Footer from "../Components/Footer"

const titanicPhotos = [ Titanic, Titanic1, Titanic2 ];
    
const petShopPhotos = [ PetShop, PetShop1, PetShop2 ];

const lusitanianPhotos = [ Lusitanian, Lusitanian1, Lusitanian2, Lusitanian3, Lusitanian4 ];
    

function Projects () {
    return (
        <section>
            <div>
                <Header/>
            </div>
            <nav style={{margin: "40px"}}>
                <Navbar/>
            </nav>
            <Container className="d-flex flex-column align-items-center">
            <Col xs={12} sm={10} md={12} lg={8} className="mb-4">
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title><a style={{ textDecoration: "none", color:"darkblue", fontWeight:"bold"}} href="https://manueldiogo.github.io/week1-project-game-titanic/">Titanic Xtreme Drift</a></Card.Title>
                        <Card.Text>Game made with HTML, CSS and Javascript.</Card.Text>
                        <Carousel interval={null} data-bs-theme="white" className="carousel" fade>
                            {titanicPhotos.map((photo, index) => (
                                <Carousel.Item key={index}>
                                        <img
                                            src={photo}
                                            alt={`Titanic ${index}`}
                                            className="d-block w-100 h-100"
                                        />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={10} md={12} lg={8} className="mb-4">
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title><a style={{ textDecoration: "none", color:"darkblue", fontWeight:"bold"}} href="https://project2-diana-gabriela-kpzp3vt26-rui-marques-projects.vercel.app/">PetShop</a></Card.Title>
                        <Card.Text>Front-end web app created with HTML, CSS, Javascript and ReactJS</Card.Text>
                        <Carousel interval={null} data-bs-theme="white" className="carousel" fade>
                            {petShopPhotos.map((photo, index) => (
                                <Carousel.Item key={index}>
                                        <img
                                            src={photo}
                                            alt={`PetShop ${index}`}
                                            className="d-block w-100 h-100"
                                        />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={10} md={12} lg={8} className="mb-4">
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title><a style={{ textDecoration: "none", color:"darkblue", fontWeight:"bold"}} href="https://project-3-frontend-ten.vercel.app/">LusitanianBoost</a></Card.Title>
                        <Card.Text>Front-end and back-end web app created with ReactJS, Javascript, HTML, Chakra UI, MongoDB, NodeJS and ExpressJS</Card.Text>
                        <Carousel interval={null} data-bs-theme="dark" className="carousel" fade>
                            {lusitanianPhotos.map((photo, index) => (
                                <Carousel.Item key={index}>
                                    
                                        <img
                                            src={photo}
                                            alt={`Lusitanian ${index}`}
                                            className="d-block h-100 w-100"
                                        />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
        <Footer/>
        </section>
    )
}

export default Projects;