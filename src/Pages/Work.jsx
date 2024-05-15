import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import JCSLogo from "../assets/JCSLogo.webp"
import LouresLogo from "../assets/LouresGSLogo.png"
import SLBLogo from "../assets/BenficaLogo.png"
import FisidinamicaLogo from "../assets/FisidinamicaLogo.png"
import ZooLogo from "../assets/ZooLogo.png"
import Footer from "../Components/Footer"

function Work () {
    return (
        <section>
            <div>
                <Header/>
            </div>
            <nav style={{margin: "40px"}}>
                <Navbar/>
            </nav>

            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                <Card className="text-center" style={{ width: '22rem', height: "27.5rem"}}>
                        <img width={260} height={110} src={JCSLogo} className="mx-auto"/>
                        <Card.Body>
                            <Card.Title>Physiotherapy Assistant</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Joaquim Chaves Saúde | Jun 2017 - Dec 2023</Card.Subtitle>
                            <Card.Text>
                                Therapeutic massages and rehabilitation treatments.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Organization, Stress Management, Problem Solving, Teamwork, Communication.</ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                </div>
                
                <div className="col-md-6 col-lg-4 mb-4">
                    <Card className="text-center" style={{ width: '22rem', height: "27.5rem"}}>
                        <img width={100} height={110} src={LouresLogo} className="mx-auto"/>
                        <Card.Body>
                            <Card.Title>Sports Masseur</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">GS Loures | Sep 2022 - Aug 2023</Card.Subtitle>
                            <Card.Text>
                                Rehabilitation treatments to football players in national competitions.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Organization, Stress Management, Problem Solving, Teamwork, Communication.</ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                <Card className="text-center" style={{ width: '22rem', height: "27.5rem"}}>
                        <img width={210} height={150} style={{ marginTop: "-20px"}} src={SLBLogo} className="mx-auto"/>
                        <Card.Body>
                            <Card.Title>Sports Masseur</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Escola de Futebol Alverca/Benfica</Card.Subtitle>
                            <Card.Text>
                                Rehabilition and first aid to children in competition.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Adaptability, Problem Solving, Teamwork, Communication, Organization.</ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                <Card className="text-center" style={{ width: '22rem' , height: "27.5rem"}}>
                        <img width={130} height={120} src={FisidinamicaLogo} className="mx-auto"/>
                        <Card.Body>
                            <Card.Title>Physiotherapy Assistant</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fisidinâmica | Oct 2016 - Mar 2018</Card.Subtitle>
                            <Card.Text>
                                Therapeutic massages and rehabilitation treatments.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Adaptability, Teamwork, Organization, Time Management, Communication.</ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                <Card className="text-center" style={{ width: '22rem', height: "27.5rem"}}>
                    <img width={130} height={120} style={{ marginTop: "-20px", marginBottom: "-20px"}} src={ZooLogo} className="mx-auto"/>
                    <Card.Body>
                        <Card.Title>Marine Mammal Trainer Assistant</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Jardim Zoológico de Lisboa | Jan 2010 - Mar 2011</Card.Subtitle>
                            <div className="row">
                                <div className="col-12">
                                    <p className="card-text text-justify">
                                        Husbandry of marine mammal such as dolphins, sea lions, seals and penguins.
                                    </p>
                                </div>
                            </div>
                    </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Adaptability, Teamwork, Organization, Time Management, Communication.</ListGroup.Item>
                </ListGroup>
                </Card>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Work;