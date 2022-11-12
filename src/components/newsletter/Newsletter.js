//Css
import './css/Newsletter.css';

//Icons
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail'

function Newsletter() {
    return (
    <section className="newsletter">
        <article className="newsletter-container">
            <div className="newsletter-title">
                <h1>Subscribe to newsletter</h1>
                <p>Subscribe to newsletter to get the latest notifications</p>
            </div>
            <div className="newsletter-form">
                <form className="newsletter-form-form">
                    <div>
                        <HiOutlineMail />
                        <input type="email" name="newsletter-email" id="newsletter-email" placeholder='Your email address' />
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </article>
    </section>
    )
}

export default Newsletter