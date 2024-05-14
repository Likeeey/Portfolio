import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Javascript from '../assets/JS.png';
import Html from '../assets/HTML.png';
import Css from '../assets/CSS3.png';
import ExpressJS from '../assets/ExpressJS.png';
import MongoDB from '../assets/MongoDB.png';
import Mongoose from '../assets/mongoose.png';
import NodeJS from '../assets/Nodejs.png';
import ReactLogo from '../assets/React.png';
import BootstrapLogo from '../assets/Bootstrap.png';
import Footer from '../Components/Footer';

function HomePage () {
    return (
        <section>
            <div>
                <Header/>
            </div>
            <nav style={{margin: "40px"}}>
                <Navbar/>
            </nav>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <ul className='skillsList list-unstyled d-flex flex-wrap justify-content-center'>
                            <li className='col-5 col-md-4 col-lg-3'><img src={Javascript} alt="Javascript" className="img-fluid" /></li>
                            <li className='col-5 col-md-4 col-lg-3'><img src={Html} alt="HTML" className="img-fluid" /></li>
                            <li className='col-5 col-md-4 col-lg-3'><img src={Css} alt="CSS" className="img-fluid" /></li>
                            <li className='col-5 col-md-4 col-lg-3'><img src={BootstrapLogo} alt="Bootstrap" className="img-fluid" /></li>
                            <li className='col-5 col-md-4 col-lg-3'><img src={ExpressJS} alt="ExpressJS" className="img-fluid" /></li>
                            <li className='col-5 col-md-4 col-lg-3'><img src={MongoDB} alt="MongoDB" className="img-fluid" /></li>
                            <li className='col-5 col-md-4 col-lg-3'><img src={Mongoose} alt="Mongoose" className="img-fluid" /></li>
                            <li className='col-5 col-md-4 col-lg-3'><img src={NodeJS} alt="NodeJS" className="img-fluid" /></li>
                            <li className='col-5 col-md-4 col-lg-3'><img src={ReactLogo} alt="React" className="img-fluid" /></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </section>
    )
}

export default HomePage;