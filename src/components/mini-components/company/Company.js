//Css
import './css/Company.css'

//Images
import image from './images/c.svg'

//Modules
import { Link } from 'react-router-dom'

function Company() {
    return (
    <article className="company">
        <div className="company-main">
            <img src={image} alt="company" />
            <div>
                <h1>Rival Gaming</h1>
                <Link href="#">Website page</Link>
            </div>
        </div>
        <div className="company-open">
            <button>4 open position(s)</button>
        </div>
    </article>
    )
}

export default Company