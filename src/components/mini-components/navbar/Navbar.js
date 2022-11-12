//State
import { useState } from 'react';

//Css
import './css/Navbar.css';

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
                    <h1>CareerClub</h1>
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
                    <li>Home</li>
                    <li>Companies</li>
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