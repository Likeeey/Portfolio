import Linkedin from '../assets/linkenin.png'
import Github from '../assets/github.jpg'


function Footer () {
    return (
        <footer className='footer'>
            <div className='social-items'>
                <a href="https://www.linkedin.com/in/rui-marques-873667163/">
                    <i className="bi-linkedin" style={{ color: "grey", fontSize: "35px", marginRight: "10px"}}></i>
                </a>
                <a href="https://github.com/Likeeey">
                    <i className="bi-github" style={{ color: "grey", fontSize: "35px"}}></i>
                </a>
            </div>
            <div>
                <p> Ⓒ 2024 Rui Marques </p>
            </div>
        </footer>
    )
}

export default Footer;