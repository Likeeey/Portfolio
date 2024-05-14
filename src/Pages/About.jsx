import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Photo2 from "../assets/Photo2.jpg";
import { Container, Row, Col} from "react-bootstrap";
import Footer from "../Components/Footer";

const myPhotos = [
    { img: Photo2 }
];

function About() {
    return (
        <section>
            <Header />
            <nav style={{ margin: "40px" }}>
                <Navbar />
            </nav>

            <Container style={{ marginTop: "80px"}}>
                <Row className="justify-content-md-center">
                    <Col xs={12} sm={12} md={5} lg={4}>
                        {myPhotos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo.img}
                                className="img-fluid"
                                alt={`Photo ${index + 1}`}
                                style={{ marginBottom: "20px" }}
                            />
                        ))}
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={3} className="text-start">
                        <p className="about-intro">Hi, I'm Rui.</p>
                        <p>I'm a Fullstack Developer living in Lisbon with a background in massages, physiotherapy assistant, and sports. Given my background, I am well-aware of the significance of collaboration, adaptability, problem-solving, and time management, but I felt my professional career stuck so .. <b>I needed something more!</b></p>
                        <p>After searching for a field where ongoing learning would truly enrich my career and personal growth, I discovered that in programming. As soon as the opportunity appeared, I've made the decision to transition careers. I've enlisted in Ironhack and here I am.</p>
                        <p>It's amazing all the technologies and different languages you can learn in this world. We truly never stop learning, and we need a razor-sharp mind for every problem encounter. It can be stressful but rewarding at the end.</p>
                        <p>I aspire to contribute to the success of every project. I am <b>eager</b> to continue my growth as a developer, and I am ready to prove that to you!</p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </section>
    );
}

export default About;