//Css
import './css/Fof.css'


//Images
import image from './images/fof.svg'

function Fof() {
    return (
        <section className="four">
            <article className="four-container">
                <div>
                    <img src={image} alt="not-found" />
                    <h1>Oops! page not found</h1>
                </div>
            </article>
        </section>
    )
}

export default Fof