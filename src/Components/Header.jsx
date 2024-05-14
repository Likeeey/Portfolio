import { Link } from "react-router-dom";

function Header() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to={'/'} className='custom-link'><p className='myname display-4 display-md-3 display-lg-2 fw-bold'>RUI MARQUES</p></Link>
                        <p className='fsd fs-2 fs-md-3 fs-lg-2'>FullStack Developer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;