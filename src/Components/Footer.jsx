import Linkedin from '../assets/linkenin.png'
import Github from '../assets/github.jpg'

function Footer () {
    return (
        <footer className='footer'>
            <div className='social-items'>
                <a href="https://www.linkedin.com/in/rui-marques-873667163/">
                    <img src={Linkedin}/>
                </a>
                <a href="https://github.com/Likeeey">
                    <img src={Github}/>
                </a>
            </div>
            <div>
                <p> Ⓒ 2024 Rui Marques </p>
            </div>
        </footer>
    )
}

export default Footer;