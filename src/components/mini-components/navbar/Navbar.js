/* eslint-disable react-hooks/rules-of-hooks */
//State
import { useState } from 'react';

//Css
import './css/Navbar.css';

//Router
import { Link } from 'react-router-dom'

//Icons
import { RiUser4Fill } from '@react-icons/all-files/ri/RiUser4Fill'

//Redux
import { useSelector } from 'react-redux'

function Navbar({open}) {

    //User fetching
    let user = useSelector(state=>state.user)

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
                    {
                        user.username===""?
                    <p onClick={open}>Sign In | Register</p>
                    :
                    <Link to="/profile"><p><RiUser4Fill />{user.username}</p></Link>
                    }
                    <Link to="/post-a-job"><button>Post a Job</button></Link>
                </div>
            </article>
        </section>
    </nav>
    )
}

export default Navbar