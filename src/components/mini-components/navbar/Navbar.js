//State
import { useState } from 'react';

//Css
import './css/Navbar.css';

//Router
import { Link } from 'react-router-dom'

function Navbar({open}) {

    //States
    let [pop,setPop] = useState(false)

    //State functions
    let handlePop = ()=>{
        pop?setPop(false):setPop(true)
    }

    return (
    <nav className="navbar">
        <section className="navbar-container">
            <article className="navbar-links">
                <div className="navbar-links-company">
                    <Link to="/"><h1>CareerClub</h1></Link>
                    <div className="navbar-links-company-hamburger" onClick={handlePop}>
                        <div>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </div>
            </article>
            <article className={pop?"navbar-user active":"navbar-user"}>
                <ul className="navbar-links-ul">
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/companies">Companies</Link></li>
                </ul>
                <div>
                    <p onClick={open}>Sign In | Register</p>
                    <button>Post a Job</button>
                </div>
            </article>
        </section>
    </nav>
    )
}

export default Navbar